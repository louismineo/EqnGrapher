// this is where we wrangle the eqn and data


//var Data = {
//    X_axis : [], //[-2,-1, 0, 1,  2, 3 ]
//  Y_axis : [] //[-2, 1, 4, 7, 10, 13]
//    };
//export { Data };




function Compute(){
    var eqn = document.forms["EqnInput"]["eqn"].value;

    var Data = {
        X_axis : [], //[-2,-1, 0, 1,  2, 3 ]
        Y_axis : [] //[-2, 1, 4, 7, 10, 13]
        };

    if (validateForm(eqn) == true){
      console.log(eqn)
      Data.X_axis = CreateEqnData(eqn).x_axis
      Data.Y_axis = CreateEqnData(eqn).y_axis
      
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

function CreateEqnData(eqn){

    var x_axis=[]
    var y_axis=[]

    for (x =-3;x<5;x++){
        eval(eqn)
        x_axis.push(x)
        y_axis.push(y)
    }
    return x_axis,y_axis
}
console.log(Data)