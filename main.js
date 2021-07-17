canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
nasa_array=["nasa 1.jpg","nasa 2.jpg","nasa 3.jpg","nasa 4.jpg","nasa 5.jpg"];

random_number=Math.floor(Math.random()*5);
console.log(random_number);

background_img =nasa_array[random_number];
console.log(background_img);
rover_img = "rover.png";

rover_y = 10;
rover_x = 10;

function add(){
    background_image=new Image();
    background_image.onload=upload_img();
    background_image.src=background_img;

    rover_image=new Image();
    rover_image.onload=upload_img_r();
    rover_image.src=rover_img;
}

function upload_img(){
    ctx.drawImage(background_image, 0,0, canvas.width,canvas.height);
}

function upload_img_r(){
    ctx.drawImage(rover_image, rover_x,rover_y, rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
      up();
      console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
      }

      if(keyPressed == '37'){
        left();
        console.log("left");
      }

      if(keyPressed == '39'){
        right();
        console.log("right");
      }
}

function up(){
if(rover_y >=0){
rover_y -=10;
console.log("When we arrow is pressed,x=" + rover_x + "y=" + rover_y);
upload_img();
upload_img_r();
}
}
function down(){
  if(rover_y >=500){
  rover_y +=10;
  console.log("When we arrow is pressed,x=" + rover_x + "y=" + rover_y);
  upload_img();
  upload_img_r();
  }
  }
  function right(){
    if(rover_x <=700){
    rover_x +=10;
    console.log("When we arrow is pressed,x=" + rover_x + "y=" + rover_y);
    upload_img();
    upload_img_r();
    }
    }
    function left(){
      if(rover_x <=0){
      rover_x -=10;
      console.log("When we arrow is pressed,x=" + rover_x + "y=" + rover_y);
      upload_img();
      upload_img_r();
      }
      }