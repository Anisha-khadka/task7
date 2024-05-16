function storemsg() {
    console.log("Function called");
  
    var firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    var emailaddress = document.getElementById("emailaddress").value;
    var number = document.getElementById("number").value;
    var textarea = document.getElementById("inputText").value;

     if((firstname==="") || (lastname==="") || (emailaddress==="") || (number==="") || (textarea==="")){
        alert("All fields are required");
     }
  else{
     var contact={
        firstname,
     lastname,
      emailaddress,
       number,
        textarea

        

     }

     localStorage.setItem("contact",JSON.stringify(contact));
     alert("success")
    }
    }


