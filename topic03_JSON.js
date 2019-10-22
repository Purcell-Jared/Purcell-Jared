function jsonParse(){
    var employee_1 = '{"employee_id":1, "firstName": "Jared", "lastName": "Purcell", "address": "17 Chery Tree Ln", "city": "Las Vegas", "state": "Nevada"}'
    var object = JSON.parse(employee_1);
    document.getElementById("jsonParse").innerHTML = "Employee Id #:: "+ object.employee_id + "<br> " + 
                                                     "First Name:: " + object.firstName + "<br>" + 
                                                     "Last Name:: " + object.lastName + "<br>" + 
                                                     "Address:: " + object.address + "<br>" +
                                                     "City:: " + object.city + "<br>" + 
                                                     "State:: " + object.state;
}

function stringify(){
    var employee_1 = {employee_id:1, firstName: "Jared", lastName: "Purcell", address: "17 Chery Tree Ln", city: "Las Vegas", state: "Nevada"};
    var convertToString = JSON.stringify(employee_1);
    document.getElementById("stringify").innerHTML = convertToString;
}