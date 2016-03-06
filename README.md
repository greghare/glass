# Glass
Simple media and information hub for digital coffee tables

![Screenshot](https://raw.githubusercontent.com/miimario/glass/master/screenshot.PNG)

##### Existing Features
- Simple UI
- Remote controller (using socket.io)
- Support for HTML5 video

##### Planned Features
- Weather forecast
- Cast images
- Screensavers (slideshow, simple HTML animations, etc.)
- Notifications from phone (using Pushbullet or similar API)
- Remote web-based configuration page

### Usage
```
$ git clone https://github.com/miimario/glass.git
$ cd glass/receiver
$ node receiver.js
$ cd ../sender
$ node sender.js
```
Go to http://localhost:3000  (sender)  
Open a new tab and go to http://localhost:4000  (receiver)

Enter a direct link to an MP4 or other HTML5 supported video format in the sender and click "send".  
The receiver will begin playing the video.  
When it has finished it will return to the main display.

### Author
Glass was written and design by [Greg Hare](http://greghare.me)
