class Paper {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution':0.2,
          'friction':0.5,    
          'density':0.4,
      }
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y,30,options);
    this.radius=30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    imageMode(CENTER);
		image(this.image, 0, 0, this.radius*2, this.radius*2);
      fill("purple");
      pop();
    }
  };