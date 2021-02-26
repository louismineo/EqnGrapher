// reference https://www.w3schools.com/tags/tag_input.asp


function Compute(){
  var eqn = document.forms["EqnInput"]["eqn"].value;
  if (validateForm(eqn) == true){
    processEqn(eqn);
  };
}

function validateForm(eqn) {
    if (eqn == "") {
      alert("Fill in an equation before pressing submit");
      return false;
    }
    else{
      return true
    }
  }

function processEqn(eqn){
  alert(eqn); //y = 5*x+3
  x_axis=[]
  y_axis=[]

  for (x = -5; x < 6; x++){
    eval(eqn)
    x_axis.push(x)
    y_axis.push(y)
  }
  
  console.log(x_axis)
  console.log(y_axis)
  return x_axis,y_axis
}