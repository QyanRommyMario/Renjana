let iconmata = document.getElementById("iconmata");
      let password = document.getElementById("password")

      iconmata.onclick = function(){
        if(password.type == "password"){
          password.type = "text";
        } else{
          password.type = "password";
        }
      }