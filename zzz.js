// note convention is to capitalize classes 

class Ellipse {
  constructor() {
    this.r = sin(frameCount * .01) * 100;
    // you have to tie the parameter passed into the class  (_r) to the radius of this particular class object (this.r)
  }

  // declare a "method" - a method is essentially a function that applies only to this class object
  // you don't need to write 'function' in front of it

  // this method displays or draws the ellipse
  display() {
    // make ellipse transparent red so we can tell the difference between ellipse we defined with function
    
    
    push();
    noStroke();
    fill(255, 255, 255, 90);
    ellipse(110, 250, this.r);
    pop();
    // note you have to refer to the variable as this.r since it is the radius of this particular class object
  }

  // this changes the size of the radius
  grow() {
    this.r = sin(frameCount * .01) * 100;
  }

}