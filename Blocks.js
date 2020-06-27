class Blocks {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity = 255;

    World.add(world, this.body);
  }

  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    } else{
      World.remove(world,this.body);
      this.visiblity -= 5;
    } 
  }
  }
