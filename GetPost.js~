/*This method post the data to web service in JSON format */
function sendData()
{
	console.log(" i am in sendata");
	//alert( "getpost");
	var nods={
                "utf8":"✓", 
                "authenticity_token":"TWq5wTGiDBnUuWj3t6Qte9EhTJOWpHViSJYZTLVtsL4=", 
                "user":{
                            "name":$('#iname').val().toString(), 
                            "email":$('#iemail').val().toString(), 
                            "age":$('#iage').val().toString(), 
                            "gender":$('input[name=gender]:cheked').val().toString(), 
                            "address":$('#iaddress').val().toString(), 
                            "description":$('#idesc').val().toString(), 
                            "zipcode":$('#izipcode').val().toString()
                            }, 
                            "commit":"Create User"
                };
                
/*$.ajax({
        type: "POST",
        url: "http://blooming-beach-2334.herokuapp.com/users",
        data: nods,
        dataType: "json",
success:alert("Success"),
       
        //success: function(data){
        //alert(data);
        //var json=JSON.parse(data);
//        alert(json["address"]);}
        })
     }
  */ 
  
  
 // alert(data1);        
                  $.ajax({
                  type: "POST",
                  url: "http://blooming-beach-2334.herokuapp.com/users",
                  data: data1,
                  dataType: "json",
                  success: alert("success \n"),
                                                });     
 
 
 /*this method retrive data from web services*/  
 
     
$.getJSON('http://blooming-beach-2334.herokuapp.com/users', function(data) {
  var items = [];

  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });

  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('body');
});
}