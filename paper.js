class paper{

	constructor(x,y,width,height)
	{
		var options ={
			isStatic:false,	
            'restitution':0.8,
            'friction':1.0,
            'density':1.0	
			}
            this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

            
        }

        display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}
    }