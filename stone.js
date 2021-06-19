class Stone{
    constructor(x,y){

       var options={
           restitutions:0.3,
           friction:5,
           density:1

       }
       this.body = Bodies.rectangle(x, y, 150, 90, options);
      this.width = 35;
      this.height = 40;
      World.add(world, this.body);
		
    }
    display(){
	        var pos =this.body.position;
      var angle = this.body.angle;
        push();

      push();
      translate(pos.x, pos.y);
      rotate(angle);
    fill('red')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
    }
}
