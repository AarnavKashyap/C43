function Bird(){
    this.x = 65;
    this.y = height/2;
    this.gravity = 0.35;
    this.lift = -7;
    this.image = loadImage("flappy-bird.png");
    this.show = function(){
       image(this.image,this.x,this.y,80,50);
    }
    this.up = function(){
     this.velocity = this.velocity+this.lift;
    }
    this.update = function(){
        this.velocity = this.velocity+this.gravity;
        this.y = this.y+this.velocity;
        if(this.y>height){
            this.y = height;
            this.velocity = 0;
        }
        if(this.y<0){
            this.y = 0;
            this.velocity = 0;
        }
    }
    
}
