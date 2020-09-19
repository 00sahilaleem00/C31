class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage('sprites/smoke.png');
    this.smoke = [];
  }

  display(flight) {
    
    
    console.log(this.smoke);


    if(flight==1){
      var birdarray = [this.body.position.x,this.body.position.y];
      this.smoke.push(birdarray);
    for(var i=0;i<this.smoke.length;i++){
      image(this.smokeimg,this.smoke[i][0],this.smoke[i][1])
    }
  }else{
    this.smoke = [];
  }

    
    super.display();
  }
}
