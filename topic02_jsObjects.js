function createObject(){
    var employee_1 = {employee_id:1, firstName:"Jared", lastName:"Purcell", address:"17 Cherry Tree Ln", city:"Las Vegas", state:"Nevada", zipcode:"911", payment_type:"Direct Deposit"};
    var employee_2 = {employee_id:2, firstName:"John", lastName:"Stockton", address:"301 S Temple", city:"Salt Lake City", state:"Utah", zipcode:"84101", payment_type:"Check"};
    var user_choice = parseInt(document.getElementById("user_input").value);
    if (user_choice == 1){
        document.getElementById("display_info").innerHTML = "You have selected to view "+ employee_1.firstName + " " + employee_1.lastName 
        + "'s profile. He lives in " + employee_1.city + ", " + employee_1.state + "."
    }else if(user_choice == 2){
        document.getElementById("display_info").innerHTML = "You have selected to view "+ employee_2.firstName + " " + employee_2.lastName 
        + "'s profile. He lives in " + employee_2.city + ", " + employee_2.state + "."
    }

}