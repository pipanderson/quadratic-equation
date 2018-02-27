module.exports = function solveEquation(equation) {
  function compare(first_numb,second_numb) {
    return first_numb-second_numb;
  };
  var x1,x2,solutions=[];
  var reg=/.\d+/g;
  var EquationWithoutSpaces= equation.replace(/\s+/g,"");
  rez=EquationWithoutSpaces.match(reg);
  a=rez[0];
  b=rez[2];
  c=rez[3];
  var D=(b*b)-(4*a*c);
  if (D>0) {
    solutions[0]=Math.round((-b-Math.sqrt(D))/(2*a));
    solutions[1]=Math.round((-b+Math.sqrt(D))/(2*a));
    
    return (solutions.sort(compare));
  };
  };
  
