// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.



//Rand(0,1)


function getOffset( el ) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight
    };
}

function connect(div1, div2, color, thickness) { // draw a line connecting elements
    var off1 = getOffset(div1);
    var off2 = getOffset(div2);
    // bottom right
    var x1 = off1.left ;
    var y1 = off1.top ;
    // top right
    var x2 = off2.left ;
    var y2 = off2.top;
    // distance
    var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1))) + 300;
    // center
    var cx = ((x1 + x2) / 2) - (length / 2) + 25;
    var cy = ((y1 + y2) / 2) - (thickness / 2) + 25;
    // angle
    var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
    // make hr
    var htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:fixed; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
    //
    // alert(htmlLine);
    document.body.innerHTML += htmlLine;
}

function Range(min,max){

var foo = [];

for (var i = min; i <= max; i++) {
   foo.push(i);
}
return foo
}


function Rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function myfunc(div,track) {

  var className = div.getAttribute("class");
  if(className == "col-sm-5 egg" && track % 2 == 0) {
    div.className = "col-sm-5 circle";
    div.disabled = true;
  }
  else if(className == "col-sm-5 egg" && track % 2 == 1){
     div.className =  "col-sm-5 cross";
     div.disabled = true;
  }
}


function myfunc2(track){
  return track + 1
}





function ifWin(){
  var data = [];
  var row =[];
  for (var i = 1; i <= 9; i++) {
    var currentDivId = "g";
    currentDivId += i.toString();
    console.log(currentDivId);
    var className = document.getElementById(currentDivId).getAttribute("class");
    if(className == "col-sm-5 egg" ) {
      row.push(0);
     }
    else if(className == "col-sm-5 circle" ){
      row.push(1);
       }
    else if(className == "col-sm-5 cross" ){
      row.push(2);
       }
    if( i % 3 == 0) {
      data.push(row);
      var row =[];
    }


    // 0's are eggs, circle's will be 1, cross will be 2
}
  console.log(data)
  for ( var col = 0; col <= 2; col++){
    for ( var row = 0; row <= 2; row++){
      var target = data[col][row];
      //var gDex = col*data[col].length + row
      for ( var y = -1; y <= 1; y++){
        for ( var x = -1; x <= 1; x++){
          var curX= row + x;
          var curY= col + y;
          if (curX  >= 0 && curX < data.length  && curY  >= 0 && curY < data.length){
            if (data[curY][curX] == target && data[curY][curX]!= 0 && !(x == 0 && y == 0) ){
              curX = curX + (curX - row);
              curY = curY + (curY - col);
              if (curX  >= 0 && curX < data.length  && curY  >= 0 && curY < data.length){

                if (data[curY][curX] == target){
                  console.log(data[curY][curX])
                  for (var i = 1; i <= 9; i++){

                    var currentDivId = "g";
                    currentDivId += i.toString(); 
                    document.getElementById(currentDivId).disabled = true;

                  }
                  var origin=document.getElementById("g" + ((col)*data[col].length + (row+1)).toString()); 
                  var end=document.getElementById("g" + ((curY)*data[curY].length + (curX+1)).toString()); 
                  connect(origin, end, "blue", 20)
                  return 
                }

              }
              }



              }
             }
  


        }


      }


}

}




//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
