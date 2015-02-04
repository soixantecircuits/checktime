/*globals rxt:false, exports:false */
var deps = ["jquery", "underscore", "moment", "underscore.string", "coffee-script", "reactive-coffee", "bootstrap", "css!bootstrap-css", "css!/css/main"];
console.log("Loading up " + deps.join(","));
requirejs(deps, function() {
  rxt.importTags();
  //_.mixin(_.str.exports())
});

require(["domReady!", "jquery"], function(doc, $, tmpl) {
  var colorArray = [
    [255, 0, 0],
    [0, 0, 255],
    [0, 255, 0],
    [0, 255, 255],
    [255, 255, 0],
    [255, 0, 255],
    [0, 120, ],
    [120, 0, 120],
    [0, 0, 120],
    [0, 0, 0]
  ];
  var counter = 0;
  var setColor = function(color) {
    $('body').css({
      'backgroundColor': 'rgba(' + color.join(',') + ', 1)'
    });
  }
  
  setInterval(function(){
    $('h2').html(moment().format('hh:mm:ss.SSS'));
  }, 20);

  setInterval(function() {
    if (counter < 10) {
      setColor(colorArray[counter]);
    } else {
      counter = 0;
      setColor(colorArray[counter]);
    }
    counter++;
  }, 100);

});