let canvas,context,width,height;
const boxsize = 50;
let start,end;

let vector = [];

let count=0;
const move = (e) => {
  if(count==10) return;
  const xflag = (vector[count][0]<= e.pageX && e.pageX<= vector[count][0]+boxsize+5);
  const yflag = (vector[count][1]<= e.pageY && e.pageY<= vector[count][1]+boxsize+5);
  if(xflag && yflag){
    context.clearRect(vector[count][0]-1,vector[count][1]-1,boxsize+2,boxsize+2);
    count++;
    if(count==1){
      end = performance.now();
      console.log( (end-start)/1000 );
      context.font = '100pt Arial';
      context.fillText('Time:'+((end-start)/1000).toFixed(3), width/4, height/2);
    }
  }
}

window.onload = function() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;

  start = performance.now();

  context.font = '20pt Arial';
	for(var i = 0; i < 10; i += 1) {
    const r1 = Math.random();
    const r2 = Math.random();
    vector.push([r1*width*0.9,r2*height*0.9]);
    context.strokeRect(vector[i][0],vector[i][1],boxsize,boxsize);
    context.fillText(i, vector[i][0]+17, vector[i][1]+35);
	}
  console.log(vector);
  canvas.addEventListener('mousemove',move,false);
};

