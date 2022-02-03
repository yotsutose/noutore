let canvas,ctx,width,height;
const boxsize = 50;
let start,end;

let vector = [];

let count=0;
const move = (e) => {
  if(count==10) return;
  const xflag = (vector[count][0]<= e.pageX && e.pageX<= vector[count][0]+boxsize+5);
  const yflag = (vector[count][1]<= e.pageY && e.pageY<= vector[count][1]+boxsize+5);
  if(xflag && yflag){
    ctx.clearRect(vector[count][0]-1,vector[count][1]-1,boxsize+2,boxsize+2);
    count++;
    if(count==5){
      end = performance.now();
      console.log( (end-start)/1000 );
      ctx.font = '80pt Arial';
      ctx.fillText('Time:'+((end-start)/1000).toFixed(3), 20, height/2);
    }
  }
}

window.onload = function() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;

  start = performance.now();

  ctx.font = '20pt Arial';
	for(var i = 0; i < 5; i += 1) {
    const r1 = Math.random();
    const r2 = Math.random();
    vector.push([r1*width*0.8,r2*height*0.8]);
    ctx.strokeRect(vector[i][0],vector[i][1],boxsize,boxsize);
    ctx.fillText(i, vector[i][0]+17, vector[i][1]+35);
	}
  for(var i = 5; i < 10; i += 1) {
    const r1 = Math.random();
    const r2 = Math.random();
    vector.push([r1*width*0.9,r2*height*0.9]);
    ctx.beginPath();
    ctx.arc(vector[i][0],vector[i][1],boxsize/1.7,0,Math.PI*2,true);
    ctx.stroke();
    ctx.closePath();
    ctx.fillText(i, vector[i][0]-8, vector[i][1]+10);
	}
  console.log(vector);
  canvas.addEventListener('mousemove',move,false);
};

