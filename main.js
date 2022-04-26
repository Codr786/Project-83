var last_position_of_x , last_position_of_y;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

color = "black";
width_line = 3;


function my_mousedown(e){
  color = document.getElementById("color").value;
  width_line = document.getElementById("width_line").value;

var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;

if(width < 992){
    document.getElementById("canvas").width=new_width;
    document.getElementById("canvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_line").value;
    console.log("my_touchstart");

    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove")

     current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_y = e.touchest[0].clientY - canvas.offsetTop;

     if(mouseEvent == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;

        console.log("last position of x and y cordinates = ");
        console.log("x = "  + last_position_of_x +", y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_y);

        console.log("current position of x and y cordinates = ");
        console.log("x = "  + current_position_of_x+", y = " +current_position_of_y );
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();

        last_position_of_x=current_position_of_x;
        last_position_of_y=current_position_of_y;

    }

function Clear_canvas(){
    ctx.cleaRect(0,0,canvas.width,canvas.height);
}