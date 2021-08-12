//This function is called when the user clicks on the Compute Interest Button
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    //We verify that the interest is not null and positive
    if(principal <= 0) 
    {
        //if the principal is negative or null we display an alert and erase the result area
        alert("Enter a positive number");
        document.getElementById("result").innerHTML= "";
        document.getElementById("principal").focus();

    }
    else
    {
        //if the principal is positive, we display the result with highlighted numbers
        document.getElementById("result").innerHTML=
        "If you deposit \<mark\>" + principal + "\</\mark\>,\<br\>" + "at an interest rate of \<mark\>" + rate + "%\</\mark\>.\<br\>" + "You will receive an amount of \<mark\>" + interest + "\</\mark\>,\<br\>" + "in the year \<mark\>" + year + "\</\mark\>\<br\>";

    }
   
}

//this function allows the rate to be visible when the user change the value with the slider. It is called onchange.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        