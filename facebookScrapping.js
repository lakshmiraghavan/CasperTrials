/**
 * Created by lakshmi on 1/11/16.
 */
var casper = require('casper').create({
    logLevel: "info",
    verbose:true,
    onDie: function(){
        console.log("Facebook page logged in");
    },
    onPageInitialized: function(){
        console.log("Page initialized")
    }
});

//casper.userAgent('Mozilla/4.0');

casper.viewport={width: 1366, height: 768};

var x= require("casper").selectXPath;


casper.start('http://www.facebook.com/', function() {
    this.sendKeys("#email", "jsduder@gmail.com");
    this.sendKeys("#pass","furby1234");
    casper.capture("formfilled.png");
});

casper.thenClick(x('//label[@id = "loginbutton"]'), function(){
    casper.wait(500, function(){
        casper.capture('loggedin.png');
    });
});

casper.run();
