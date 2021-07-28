/*Your project should have a button Calculate that will return the Tip value for each person based on next calculation:
(TotalBillAmount * ServiceLevel)/NumberOfPersons  */

const TotalBillAmount = document.getElementById('service').value;

const ServiceLevel = document.getElementById('service').value;

const NumberOfPersons = document.getElementById('person').value;

const calculate = (TotalBillAmount * ServiceLevel) / NumberOfPersons;

calculate = Math.round(calculate * 100) / 100;
calculate = 