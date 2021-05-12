class Pinkblock{
    constructor(x,y,width,height){

     var options={
         isStatic:false,
         'friction':0,
         'restitution':0.4

     }

     this.x=x;
     this.y=y;
     this.height=height;
     this.width=width;

     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.position;
       push()
        translate(pos.x,pos.y);
        rotate(angle);   
        rectMode(CENTER);
        strokeWeight(4);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();
        
        

    }
};