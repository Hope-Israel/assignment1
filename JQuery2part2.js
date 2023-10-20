

$(document).ready(function() {
   
    $("#multiply").click(function() {
        
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());

       
        if (!isNaN(num1) && !isNaN(num2)) {
          
            var result = num1 * num2;

           
            $("#result").text("Result: " + result);
        } else {
            
            $("#result").text("ERROR! Please enter valid numbers.");
        }
    });
});






