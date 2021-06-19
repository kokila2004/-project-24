class Iron{
    constructor(x,y){

       var options={
           restitution:0.8,
           friction:3,
           density:30
       
     }
     this.body = Bodies.rectangle(x, y, 190, 100, options);
      this.width = 55;
      this.height = 60;
      World.add(world, this.body);
    } 
    display(){
        push();
   
        fill('black')
        rectMode(CENTER)
        rect(290, 550, this.width, this.height);
        pop()
    }
}