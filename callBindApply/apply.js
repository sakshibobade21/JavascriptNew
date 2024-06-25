const fig = {
  length: 20,
  width: 10,
  height: 10,
}
  
const volume = function(width, height) {
  return this.length * width * height;
}

const v1 = volume.call(fig, fig.width, fig.height);
const v2 = volume.apply(fig, [fig.width, fig.height]);
  
console.log("v1" ,v1);
console.log("v2", v2);