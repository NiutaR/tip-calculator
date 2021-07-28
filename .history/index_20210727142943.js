/*Your project should have a button Calculate that will return the Tip value for each person based on next calculation:
(TotalBillAmount * ServiceLevel)/NumberOfPersons  */

const TotalBillAmount = document.getElementById('amount');

function ServiceLevel() {
    let radioBtn = document.getElementsByName('service');
    for(let i = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked) {
            
        }
    }
}

function NumberOfPersons() {
    let select = document.getElementById('person');
    let value = select.options[select.selectIndex].value;
    alert();
}

