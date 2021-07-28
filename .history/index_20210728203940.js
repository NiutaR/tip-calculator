/*Your project should have a button Calculate that will return the Tip value for each person based on next calculation:
(TotalBillAmount * ServiceLevel)/NumberOfPersons  */

//const TotalBillAmount = document.getElementById('amount');

/*function ServiceLevel() {
    let radioBtn = document.getElementById('service');
    for(let i = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked) {
            
        }
    }
}*/
//getting values fro radio buttons
/*const calculate = document.getElementById('btn');
document.btn.onclick = function() {
    let ServiceLevel = document.querySelector('input[name = service]:checked').value;
    totalTip.innerHTML = "Your bil" + ServiceLevel;
}*/


/*function NumberOfPersons() {
    let select = document.getElementById('person');
    let value = select.options[select.selectedIndex].value;
    console.log(value);
}

function calculate() {
    return (TotalBillAmount * ServiceLevel) / NumberOfPersons;
}
console.log(calculate());*/

/*function calculateTip(totalBillAmount, serviceLevel) {
    let totalBillAmount = document.getElementById('amount').value;
    let serviceLevel = document.getElementsByName('service');
    let numberOfPersons = document.getElementById('person').value;

    //getting radio buttons
    
    for (let i = 0; i < service.length; i++) {
        if (service[i].checked) {
            alert(service[i].value);
        }
    }



}*/
//(TotalBillAmount * ServiceLevel)/NumberOfPersons 
function calcTip(billAmount, personSelected) {
    let tipAmount = (billAmount * personSelected);
    return tipAmount.toFixed(2);
  }
  
  function handleClick(event) {
    let billAmount = document.getElementsByTagName("input")[0].value;
    let personElement = document.getElementsByTagName("select")[0];
    let personSelected = personElement.options[personElement.selectedIndex].value;
    personSelected = personSelected;


    let rbs = document.querySelectorAll('input[name="r1"]');
    let selectedValue;
    for(let rb of rbs) {
        if(rb.che)
    }

    document.getElementById("result").innerHTML = "You should tip $" + calcTip(billAmount, personSelected);
  }
  
  document.getElementsByTagName("input")[1].onclick = handleClick;