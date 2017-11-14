import { Component, Renderer2, ViewChild } from '@angular/core';
import * as JSFeat from 'jsfeat';
import { FACE_FULL_CASCADE } from './cascades/face.full.cascade';
import clm from '../../assets/js/clm';

export const MAX_WORK_SIZE = 160;

@Component({
  selector: 'vision-lib',
  templateUrl: './vision.template.html'
})
export class Vision {
  
  @ViewChild('webcam') webcam;
  @ViewChild('mycanvas') mycanvas;
  
  public webcamEle: HTMLVideoElement;
  public mycanvasEle: HTMLCanvasElement;
  public canvasWidth: number;
  public canvasHeight: number;
  public canvasCtx: CanvasRenderingContext2D;
  public videoWidth: number;
  public videoHeight: number;
  public canvasImg;
  public renderer: Renderer2;
  public workCanvas: HTMLCanvasElement;
  public workCtx: CanvasRenderingContext2D;
  public animation;
  public attempts: number;
  public tracker;
  public landmarks;
  public canRun = false;
  public isReady = false;
  public steps: number;
  
  constructor(render: Renderer2) {
    this.renderer = render;
    this.attempts = 0;
    this.steps = 0;
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.initView();
    });
  }
  
  private initView = () => {
    this.webcamEle = this.webcam.nativeElement;
    this.mycanvasEle = this.mycanvas.nativeElement;
    this.tracker = new clm.tracker();
    this.tracker.init();
    this.getVideoSize();
    
  }
  
  private getVideoSize = () => {
    this.videoWidth = this.webcamEle.videoWidth;
    this.videoHeight = this.webcamEle.videoHeight;
    
    if(this.videoWidth > 0 && this.videoHeight > 0) {
      this.videoReady(this.videoWidth, this.videoHeight);
    } else {
      if(this.attempts < 10) {
        this.attempts++;
        setTimeout(this.getVideoSize, 200);
      } else {
        this.videoReady(640, 480);
      }
    }
  };
  
  // Video should be ready now
  private videoReady = (w: number, h: number) => {
    this.videoWidth = w;
    this.videoHeight = h;
    this.initMainCanvas(this.mycanvasEle);

    const dims = this.getVideoScale(w, h);
    const width = dims[0];
    const height = dims[1];
    this.initWorkCanvas(width, height);
    
    this.canvasImg = new JSFeat.matrix_t(width, height, JSFeat.U8_t | JSFeat.C1_t);
    JSFeat.bbf.prepare_cascade(FACE_FULL_CASCADE);
    
    this.getUserMedia();
  }
  
  private initMainCanvas = (canvas: HTMLCanvasElement): void => {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.canvasCtx = canvas.getContext('2d');
    this.canvasCtx.fillStyle = 'rgb(0, 255, 0)';
    this.canvasCtx.strokeStyle = 'rgb(0, 255, 0)';
  };
  
  private getVideoScale = (width: number, height: number): number[] => {
    let scale = Math.min(MAX_WORK_SIZE / width, MAX_WORK_SIZE / height);
    let w = (width * scale) | 0;
    let h = (height * scale) | 0;
    return [w, h];
  };
  
  private initWorkCanvas = (width: number, height: number): void => {
    let workcanvas = this.renderer.createElement('canvas');
    this.workCanvas = workcanvas;
    this.workCanvas.width = width;
    this.workCanvas.height = height;
    this.workCtx = this.workCanvas.getContext('2d');
  };
  
  // Check for and init navigator
  private getUserMedia = () => {
    this.isReady = true;
    const navigatorAny = (window as any).navigator as any;
    navigator.getUserMedia = navigator.getUserMedia || navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia || navigatorAny.msGetUserMedia;
    if(navigator.getUserMedia) {
      navigator.getUserMedia({ video: true }, (stream) => {
        this.webcamEle.src = window.URL.createObjectURL(stream);
      }, (error) => {
        console.error(error);
      });
    } else {
      console.warn('Yo! You need a webcam.');
    }
  };
  
  public start = () => {
    this.canRun = true;
    this.tracker.start(this.webcamEle);
    this.step();
  };
  
  public stop = () => {
    this.canRun = false;
    this.tracker.stop();
    this.steps = 0;
    cancelAnimationFrame(this.animation);
  };
  
  // Animation loop
  private step = () => {
    if(!this.canRun) {
      cancelAnimationFrame(this.animation);
      return;
    }
    this.steps++;
    this.animation = requestAnimationFrame(this.step);
    if(this.webcamEle.readyState === this.webcamEle.HAVE_ENOUGH_DATA) {
      this.canvasCtx.drawImage(this.webcamEle, 0, 0, this.canvasWidth, this.canvasHeight);
      this.workCtx.drawImage(this.webcamEle, 0, 0, this.workCanvas.width, this.workCanvas.height);
      let imageData = this.workCtx.getImageData(0, 0, this.workCanvas.width, this.workCanvas.height);
      this.landmarks = this.tracker.getCurrentPosition();
      if(this.steps % 30 === 0) {

      }
      
      if(this.landmarks) {
        this.tracker.draw(this.mycanvasEle);
      }
    }
  };
  
  private drawFaces = (ctx: CanvasRenderingContext2D, rects, sc, max: number) => {
    let on = rects.length;
    if(on && max) {
      JSFeat.math.qsort(rects, 0, on - 1, (a, b) => {return (b.confidence < a.confidence);});
    }
    let n = max || on;
    n = Math.min(n, on);
    let r;
    for(let i = 0; i < n; i++) {
      r = rects[i];
      ctx.strokeRect((r.x * sc) | 0, (r.y * sc) | 0, (r.width * sc) | 0, (r.height * sc) | 0);
    }
  };
  
  
}
