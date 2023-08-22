document.getElementById("SubmitButton").addEventListener("click", function() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(firstname);
    console.log(lastname);
    console.log(username);
    console.log(email);
    console.log(password);

    const signup = {
      firstname: firstname,
      lastname: lastname,
      username:username,
      email:email,
      password: password
    }
    console.log(signup)

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/signup");
    xhr.setRequestHeader("Content-Type" , "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200)
      {
      // const response = JSON.parse(xhr.responseText)
      // console.log(response);
      
      console.log(xhr.responseText)
      }
    }
    xhr.send( JSON.stringify(signup) );
    window.location.href="http://localhost:5501/project/index.html";
  })