function sendData()
{
	
	var nods={
                "utf8":"✓", 
                "authenticity_token":"TWq5wTGiDBnUuWj3t6Qte9EhTJOWpHViSJYZTLVtsL4=", 
                "user":{
                            "name":$('#name').val().toString(), 
                            "email":$('#email').val().toString(), 
                            "age":$('#age').val().toString(), 
                            "gender":"m", 
                            "address":$('#address').val().toString(), 
                            "description":$('#desc').val().toString(), 
                            "pincode":$('#pin').val().toString()
                            }, 
                            "commit":"Create User"
                };
                
$.ajax({
        type: "POST",
        url: "http://blooming-beach-2334.herokuapp.com/users",
        data: nods,
        dataType: "json",
        success: function(data){
        //alert(data);
        var json=JSON.parse(data);
        alert(json["address"]);
        }
        }
     }
        