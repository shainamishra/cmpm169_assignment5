/* 
Remix of Daren Bartolucci's "Atlantic jodhpur"
by Shaina Mishra

Instructions:

Each circle in the corner of the canvas represents 
a song playing. The volume of the songs is based on
the distance of the mouse from the circle.

Remixed:
I changed the backround from a solid color to a preloaded image, I changed all of the songs included and made them sound reverbed(ish), and I changed the colors of the circles to coincide to a dominant color on the album cover art that the song comes from.
*/

function preload(){
  song1 = loadSound('Flourescent Adolescent.mp3')
  song2 = loadSound('Cornerstone.mp3')
  song3 = loadSound('Snap Out of It.mp3')
  song4 = loadSound('Black Treacle.mp3')
  bgb = loadImage('am.jpg');
}

function setup() {
  background(bgb);
  createCanvas(400, 400);
  song1.play()
  song1.loop()
  song2.play()
  song2.loop()
  song3.play()
  song3.loop()
  song4.play()
  song4.loop()
}

function draw() {
  background(bgb);
  let volume1 = map(mouseX,0, width, 1,0) * map(mouseY,0,height,1,0)
  song1.setVolume(volume1)
  let volume2 = map(mouseX,0,width, 0,1) * map(mouseY,0,height,0,1)
  song2.setVolume(volume2)
  let volume3 = map(mouseX,0,width, 1,0)*map(mouseY,0,height,0,1)
  song3.setVolume(volume3)
  let volume4 = map(mouseX,0,width,0,1)*map(mouseY,0,height,1,0)
  song4.setVolume(volume4)
  fill(251,243,228)
  circle(400, 0, 400 * volume4)
  fill(129,120,43)
  circle(400, 400, 400 * volume2)
  fill(0,0,0)
  circle(0, 400, 400 * volume3)
  color(142,142,142)
  fill(82,8,67,255)
  circle(0, 0, 400 * volume1)
}