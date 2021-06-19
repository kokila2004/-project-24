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
        push();
   
    fill('red')
    rectMode(CENTER)
    rect(190, 400, this.width, this.height);
    pop();
    }
}