import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'video-comp',
  templateUrl: './video.template.html'
})
export class VideoComponent implements OnInit {
  
  public videoParams = 'G9XyEyGMKy4?autoplay=0&controls=1&showinfo=0&modestbranding=0&loop=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0';
  
  public videoUrl = 'https://www.youtube.com/embed/';
  public trustedUrl;
  
  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer) {
  
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
    let videoSrc = this.videoUrl + this.videoParams;
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoSrc);
  };
}
