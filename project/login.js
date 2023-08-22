document.getElementById("SubmitButton").addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  // window.localStorage.setItem("my")

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8082/signup");
  xhr.setRequestHeader("Content-Type" , "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200)
    {
      res=JSON.parse(xhr.responseText)
      console.log(res);
      for(let i=0;i<res.length;i++)
      {
          if (res[i].email==email && res[i].password==password) 
          {
              document.getElementById('messages').innerHTML="success";
              window.location.href="http://localhost:5501/project/index.html";
              
          }
          if(res[i].email!=email && res[i].password!=password)
          {
              document.getElementById('messages').innerHTML="incorrect";
              
          }
      }
    }
  }

  xhr.send();
})