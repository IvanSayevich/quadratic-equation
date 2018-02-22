module.exports = function solveEquation(equation) {
  //let equation = '2 * x^2 - 10 * x + 12'
  let result = [];
       array = equation.split(' ');
      a = parseInt(array[0], 10);
      b = parseInt(array[3].concat(array[4]),10);
      c = parseInt(array[7].concat(array[8]),10);

  let d = Math.pow(b, 2) - 4*a*c;
      x = Math.round((-b - Math.sqrt(d))/(2*a));
      y = Math.round((-b + Math.sqrt(d))/(2*a));

  if(x>y){
    result.push(y,x);
  }else{ 
    result.push(x,y);
  }
  
  return result;
} 


