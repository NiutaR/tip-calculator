/*Your project should have a button Calculate that will return the Tip value for each person based on next calculation:
(TotalBillAmount * ServiceLevel)/NumberOfPersons  */

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

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;


document.getElementById()
document.getElementById('btn').onclick = function() {
    calculate();
};