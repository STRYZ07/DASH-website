// add function
form.addEventListener("submit", (e) =>{
   e.preventDefault()

   const username = form.username.value
   const password = form.password.value

   const authenticated = authentication(username,password)

   if (authenticated) {
      window.location.href = "../main/main.html"
   } else {
      alert("Username and Password is InCorrect!")
   }
})

// function for username and password
function authentication(username,password){
   return true
}