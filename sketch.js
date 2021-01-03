
const{Engine,World,Bodies,Constraint}=Matter;
var engine;
var world;

var ground;
var b=[];
var bl,rp;

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Grd(600,600,1200,20);
  bl = new Ball(200,200);
  rp = new Rope(bl.body,{x: 500,y: 50});

  for(var i=0;i<8;i++){
    b.push(new Box(700,100));
    if(i<6){
      b.push(new Box(800,100));
      b.push(new Box(900,100));
    }
  }

}

function draw() {
  Engine.update(engine);
  background(255);  

  ground.display();

  for(var z of b){
    z.display();
  }
  bl.display();
  rp.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bl.body,{x: mouseX,y: mouseY});
}