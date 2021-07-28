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

function calculateTip() {
    let totalBillAmount = document.getElementById('amount').value;
    let serviceLevel = document.getElementsByName('service');
    let numberOfPersons = document.getElementById('person').value;

    //getting radio buttons
    
    for (let i = 0; i<rad.length; i++) {
        if (rad[i].checked) {
            alert(rad[i].value);
        }
    }

}