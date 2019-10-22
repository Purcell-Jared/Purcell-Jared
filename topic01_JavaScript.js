// This is the loops section    
function addOddLoop(){
    var input = parseInt(document.getElementById('user_input').value);
    var sum = 0;
	for (var i = 1; i <= input; i += 2){
		sum += i;
	}
    document.getElementById("loops").innerHTML = sum;
}

function forInLoop(){
    var text = "";
    var employee_1 = {employee_id:1, firstName:"Jared", lastName:"Purcell", address:"17 Cherry Tree Ln", 
                      city:"Las Vegas", state:"Nevada", zipcode:"911", payment_type:"Direct Deposit"};
    var i;
    for(i in employee_1){
        text += employee_1[i] + " ";
    }
    document.getElementById("forInLoop").innerHTML = text;
}

function forOfLoop(){
    var employee_1 = ["Jared", "Purcell", "17 Cherry Tree Ln", 
                      "Las Vegas", "Nevada", "911", "Direct Deposit"];
    var i;
    var newWindow = window.open();
    for(i of employee_1){
        newWindow.document.write(i + "<br >");
    }
}

function whileLoop(){
    var text = "";
    var i = 100; 

    while (i > -1){
        text += "<br>" + i;
        i -= 25;
    }
    document.getElementById("whileLoop").innerHTML = text;
}

function doWhileLoop(){
    var text = "";
    var i = 0;

    do {
        text += "<br>" + i;
        i += 25;
    } while (i < 101);
    document.getElementById("doWhileLoop").innerHTML = text;
}

// This is the conitional statements section
function sleepInConditions(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    var message = "Sleep in."
        
    if (dayOfWeek != 6 && dayOfWeek != 0){
        message = "Get up and get ready for work!";
    }
    else if (month == 0 && dayOfMonth == 1){
        message = "Sleep in.";
    }
    if (month == 6 && dayOfMonth == 4){
        message = "Sleep in.";
    }
    if (month == 11 && dayOfMonth == 25){
        message = "Sleep in.";
    }
       
    document.getElementById("conditional_statement").innerHTML = message;
}
// This is the functions and parameters section
function validateDate(){
    var date = document.getElementById("enterDate").value;
    var verifyDate = formatDate(date)
    if (verifyDate == false){
        date = "Invalid Date Format";
    } else if (verifyDate == true){
        date = "Success";
    }
    document.getElementById("date").innerHTML = date;
}        

function formatDate(dtest){
    var regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (regex.test(dtest)){
            return true;
        }else {
            return false;
        }
}
// This is the variables section
function doFV(){
        
    var principal = parseFloat(document.getElementById('principal').value);
    var annualRate = parseFloat(document.getElementById('rate').value);
    var years = parseFloat(document.getElementById('years').value);
    var periodsPerYear = parseFloat(document.getElementById('periods').value);
    var futureValue = computeFutureValue(principal, annualRate, years, periodsPerYear).toFixed(2);
    document.getElementById("variableOutput").innerHTML = "$" + futureValue;

}
function computeFutureValue(principal, annualRate, years, periodsPerYear){
    
    var r = annualRate / periodsPerYear;
    var n = periodsPerYear * years;
    var f = principal * Math.pow((1 + r), n);
    return f;

} 
// This is the arrays section
function fillArray(){
    var favFoods = ["steak","crab legs","tacos","hamburger","salmon","pizza"];
    var favDrinks = [];
    favDrinks[0] = "lemonade";
    favDrinks[1] = "sprite";
    favDrinks[2] = "orange juice";
    favDrinks[3] = "kool-aid";
    favDrinks[4] = "rootbeer";
    favDrinks[5] = "orange fanta";
    var first = parseInt(document.getElementById('userInput1').value);
    var second = parseInt(document.getElementById('userInput2').value);
    var message = "Dinner will be " + favFoods[first] + " with " + favDrinks[second] + " tonight.";

    if (first > 5 || second > 5){
        message = "Enter integer value between 0-5";
    } else if (first < 0 || second < 0){
        message = "Enter integer value between 0-5";
    }
    document.getElementById("arrayOutput").innerHTML = message;
}




