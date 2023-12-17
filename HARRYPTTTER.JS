
var newq;
let h,w,nh,nw,s; 

function newPosition(){   
  h = window.innerHeight - 50;
  w = window.innerWidth - 50;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);
  return [nh,nw];       
}
