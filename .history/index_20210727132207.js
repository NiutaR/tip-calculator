/*Your project should have a button Calculate that will return the Tip value for each person based on next calculation:
(TotalBillAmount * ServiceLevel)/NumberOfPersons  */
/*function calculate () {
const TotalBillAmount = document.getElementById('service').value;

const ServiceLevel = document.getElementById('service').value;

const NumberOfPersons = document.getElementById('person').value;

const calculate = (TotalBillAmount * ServiceLevel) / NumberOfPersons;

calculate = Math.round(calculate * 100) / 100;
calculate = calculate.toFixed(2);


if (TotalBillAmount === '' || ServiceLevel == 0) {
    alert('Please enter values');
    return;
}
if (NumberOfPersons === '' || NumberOfPersons <= 1) {
    NumberOfPersons = 1;
    document.getElementById('each').style.display = 'none';
} else {
    document.getElementById('each').style.display = 'block';

}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;


document.getElementById()
document.getElementById('btn').onclick = function() {
    calculate();
};
}


/*const TotalBillAmount = document.getElementById('amount').nodeValue;
//console.log(TotalBillAmount);

const calculate = document.getElementById('btn');

btn.onclick = function() {
    const tips = document.querySelectorAll('input[id="person"]');
    let selected;
    for(const tip of tips) {
        if(tip.checked) {
            selected = tip.nodeValue;
            break;
        }
    }
    return TotalBillAmount / tips;
    console.log(selected);
}*/

/*let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let TotalBillAmount = document.getElementById('amount').value;
    let ServiceLevel = document.getElementById('service').value;

    let NumberOfPersons = document.getElementById('person');
    let totalCalculate = (TotalBillAmount * ServiceLevel) / NumberOfPersons;
  
})*/

function calculateTip() {
    let TotalBillAmount = document.getElementById('amount').value;
    let ServiceLevel = document.getElementById('service').value;
    let NumberOfPersons = document.getElementById('person').value;

    let total = (TotalBillAmount * ServiceLevel) / NumberOfPersons;

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

    document.getElementById('btn').onclick
}