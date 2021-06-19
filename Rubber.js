class Rubber{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
	// assign options to the rubber ball
		
		this.r=r
		this.body=Bodies.circle(x, y, this.r ,options)
		World.add(world, this.body);

	}
	display()
	{
				
			push()
			
			
			
			fill("darkblue");
			ellipseMode(RADIUS)
			ellipse(this.body.position.x,this.body.position.y,this.r)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}