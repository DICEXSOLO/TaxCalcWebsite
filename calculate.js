function calculate(){
    var personalAllowance = 12579;
    var grossIncome = document.getElementById('income').value;
    var taxDue;
    var nationalInsurance;
    var takeHomePay;
    var taxableIncome = grossIncome - personalAllowance;

    if (taxableIncome<125140){
        taxableIncome = grossIncome - personalAllowance;
    }

    if (taxableIncome>0 && taxableIncome<37700){
        taxDue = taxableIncome * 0.2;
    } else if (taxableIncome>37700 && taxableIncome < 137430){
        taxDue = (37700 * 0.2) + ((taxableIncome-37700)*0.4);
    } else if (taxableIncome > 150000) {
        taxDue =(37700 * 0.2) + ((taxableIncome-37700)*0.4) + ((taxableIncome-150000)*0.45);
    }

    if (grossIncome< 9568) {
nationalInsurance = 0;
    } else if (grossIncome>9568 && grossIncome<50284){
        nationalInsurance = (grossIncome-9568) * 0.12;
    } else if (grossIncome > 50284){
        grossIncome = grossIncome - 9568;
        nationalInsurance = (40716 * 0.12) + ((grossIncome - 40716)*0.02);
    }

takeHomePay= grossIncome - taxDue - nationalInsurance;

alert("Your take home pay is: £" + takeHomePay);
}

