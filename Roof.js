class roof{
    constructor(x,y){
        var options={
            'isStatic':true,
        }
        
    this.body= Bodies.rectangle(x, y, 200, 10 , options);
    this.width=200;
    this.height=10;
 	World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        strokeWeight(4);
        stroke(255);
        rect(0,0,this.width,this.height);
        pop(); 
       }
}