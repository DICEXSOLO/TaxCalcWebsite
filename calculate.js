function calculate(){
    var personalAllowance = 12579;
    var grossIncome = document.getElementById('income').value;
    var taxDue;
    var nationalInsurance;
    var takeHomePay;
    var takeHomePayM;
    var taxableIncome = grossIncome - personalAllowance;
    var formatter = new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: 'GBP',
      
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

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
        var grossIncome1 = grossIncome - 9568;
        nationalInsurance = (40716 * 0.12) + ((grossIncome1 - 40716)*0.02);
    }

takeHomePay= grossIncome - taxDue - nationalInsurance;
takeHomePayM = (takeHomePay / 12);


document.getElementById("tHP").innerHTML = formatter.format(takeHomePay);
document.getElementById("tHPM").innerHTML = formatter.format(takeHomePayM);
document.getElementById("iT").innerHTML = formatter.format(taxDue);
document.getElementById("nI").innerHTML = formatter.format(nationalInsurance);
document.getElementById("gI").innerHTML = formatter.format(grossIncome);
var x = document.getElementById("results-container");
x.style.display = (x.style.display == 'block') ? 'none' : 'block';
//alert("Your take home pay is: £" + takeHomePay);
}



