let add = 0.01;
let start = 0;

function setup() {
  createCanvas(300,300);
}

function draw() {
  let yoff = 0;
  
  loadPixels();
  background(0);
  stroke(255);
  noFill();
  
  for(let y = 0; y < height; y++) {
    let xoff = start;
    for(let x = 0; x < width; x++) {
      let col = noise(xoff, yoff) * 255;
      let index = (x + y * width) * 4
      if(col < 63.75) {
        pixels[index] = 44;
        pixels[index+1] = 111;
        pixels[index+2] = 137;
        pixels[index+3] = 255;
      } else if(col > 63.75 && col < 127.5) {
        pixels[index] = 55;
        pixels[index+1] = 146;
        pixels[index+2] = 158;
        pixels[index+3] = 255;
      } else if(col > 127.5 && col < 135) {
        pixels[index] = 192;
        pixels[index+1] = 202;
        pixels[index+2] = 176;
        pixels[index+3] = 255;
      } else if(col > 135 && col < 184) {
        pixels[index] = 66;
        pixels[index+1] = 167;
        pixels[index+2] = 68;
        pixels[index+3] = 255;
      } else if(col > 184 && col < 200){
        pixels[index] = 135;
        pixels[index+1] = 135;
        pixels[index+2] = 135;
        pixels[index+3] = 255;
      } else {
        pixels[index] = 232;
        pixels[index+1] = 232;
        pixels[index+2] = 232;
        pixels[index+3] = 255;
      }
      
      xoff += add;
    }
    yoff += add;
  }
  updatePixels();
  start += add;
}