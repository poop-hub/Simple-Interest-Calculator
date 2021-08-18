function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years);
    
    //check the principle for erroneous values
    if (principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
    }
    else {
      document.getElementById("result").innerHTML =
        "If you deposit "+"<span style=\"background-color: #FFFF00\">"+principal+"</span>"+
        ",<br>at an interest rate of "+"<span style=\"background-color: #FFFF00\">"+rate+"</span>"+
        "%<br>You will receive an amount of "+"<span style=\"background-color: #FFFF00\">"+interest+"</span>"+
        ",<br>in the year "+"<span style=\"background-color: #FFFF00\">"+year+"</span>"+"<br>"
    }
}

function updateRate()
{
  var value = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = value + "%";
}