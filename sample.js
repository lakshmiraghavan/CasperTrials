/**
 * Created by lakshmi on 1/11/16.
 */

var casper = require('casper').create();

//casper.userAgent('Mozilla/4.0');

casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});
casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});
casper.run();
