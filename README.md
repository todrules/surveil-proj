# Sample Project

## Built With

* Angular 5.0.0
* Ionic
* Angular Flex-Layout
* Cordova
* TypeScript
* Nodejs

# Features 

Built with Angular and Ionic, so, technically, it could already run on Android, iOS, and Windows Phone, as well as the browser. One code base - multiple platforms.

## Login

The login service does NOT call a web service. To keep the app simple, the app is storing user data in an IndexedDB database. Yes, even the password. I would never store a pass on the client and nowhere in plain-text.

If curious, you can normally view the data that is being stored for an app. For Chrome, it's under the Application tab in Developer Tools.

The initial landing page is the Login screen. However, if you have never logged in, then you'll need to click on the Signup link, which brings us to...

## Sign-up

Pretty self-explanatory. Fill in the fields and then submit. Some items to notice are:

* Form validation messages.
* Disabling form submission until the form is valid.
* After submit, a loading indicator is shown (I added mock network congestion to simulate a real app).
* After a second or two, a toast message will notify the user that their action was successful.
* In the app itself, the user data is stored in an app-wide object store, which is the system of record for all data.
* The store also takes care of storing and retrieving all data from localStorage (or in this case IndexedDB).

`The other parts of the app all have a similar flow.`

## Dashboard

* Examples of using Google Charts.

## Vision - Face Detection

`NOTE: I did NOT create the library that was used for the actual face detection`

`NOTE: You may have to grant permission for the site to use your webcam`

* This component uses machine learning techniques to detect faces
* Permission needs to be granted in order to use it.
* Just click the Start button to get it working.

#### Comments
A well-designed UI doesn't need a tutorial to explain how to use it. I also believe that well-written code should be self-explanatory and needs few comments, so there's not a ton of comments in my code.

You'll never see this:

```
// Service to Login  
 loginService() {
 }
 ```

Hopefully, this project shows a little of my coding style, as well as my UI design style and knowledge of the various libraries and frameworks.

## Any Questions?

You can email me at [todd@digitaltech.pro](mailto:todd@digitaltech.pro) or give me a call or text.

#### Known Issues & Items Dropped from Scope


* No unit tests
* No back-end authentication service
* No other auth or user management functions
* Not quite 100% compatible for mobile.
`NOTE: If I can get all the screens to work well on a mobile device, then I will push out an Android APK.`
