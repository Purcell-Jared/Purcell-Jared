function createObject(){
    var employee_1 = {employee_id:1, firstName:"Jared", lastName:"Purcell", address:"17 Cherry Tree Ln", city:"Las Vegas", state:"Nevada", zipcode:"911", payment_type:"Direct Deposit"};
    var employee_2 = {employee_id:2, firstName:"John", lastName:"Stockton", address:"301 S Temple", city:"Salt Lake City", state:"Utah", zipcode:"84101", payment_type:"Check"};
    var user_choice = parseInt(document.getElementById("user_input").value);
    if (user_choice == 1){
        document.getElementById("display_1").innerHTML = "You have selected to view "+ employee_1.firstName + " " + employee_1.lastName 
        + "'s profile. He lives in " + employee_1.city + ", " + employee_1.state + "."
    }else if(user_choice == 2){
        document.getElementById("display_1").innerHTML = "You have selected to view "+ employee_2.firstName + " " + employee_2.lastName 
        + "'s profile. He lives in " + employee_2.city + ", " + employee_2.state + ".";
    }
    
    employee_1.hireDate = "01/01/2019";
    document.getElementById("display_2").innerHTML = employee_1.firstName + " " + employee_1.lastName + " was hired on " + employee_1.hireDate + ".";

    var employee_3 = Object.create(employee_2);
    employee_3.firstName = "Peter";
    employee_3.lastName = "Pan";
    document.getElementById("display_3").innerHTML = employee_3.firstName + " " + employee_3.lastName + " is also from " + employee_3.city + ", " + employee_3.state + "."; 
}
function displayEmployeeInfo(){
    var employee_1 = {
        employee_id:1, 
        firstName:"Jared", 
        lastName:"Purcell", 
        address:"17 Cherry Tree Ln", 
        city:"Las Vegas", 
        state:"Nevada", 
        zipcode:"911", 
        payment_type:"Direct Deposit",
        hireDate: "01/01/2019",
        displayInfo: function(){
            return "| Employee Number: " + this.employee_id +
            " | Employee Name: " + this.firstName + " " + this.lastName + 
            " | Hire Date: " + this.hireDate +
            " | Address: " + this.address +
            " | City: " + this.city +
            " | State: " + this.state +
            " | Zipcode: " + this.zipcode +
            " | Payment Method: " + this.payment_type + " |";
                   
        }
    }
    document.getElementById("display_4").innerHTML = employee_1.displayInfo();
}
