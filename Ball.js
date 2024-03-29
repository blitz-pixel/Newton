class ball{

    constructor(x,y,radius){
        
        var options={
       'isStatic': true,
       'restitution': 0.3,
        'friction':0.5,
        'density' : 1.2           
        }
        
        this.body=Bodies.circle(x,y,radius/2,options);
        this.radius=radius;
        //this.width=x;
        //this.height=y;
        //this.image=loadImage("paper.png");
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(255);
        //strokeWeight(4);
        stroke("brown");
        ellipse(0,0,this.radius,this.radius);
        pop();
   
    }
}