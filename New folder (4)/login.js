let name = document.querySelector(".inpName")
let password = document.querySelector(".inpPass")
let btn = document.querySelector(".sendLogin")
btn.addEventListener("click", ()=>{
let ism = name.value
let parol = password.value
  console.log(ism,parol);
    fetch("https://dummyjson.com/auth/login",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
   
    
    username: ism,
    password: parol,
  }),
  

})
.then(res=>res.json())
.then(data=>{
    if(data.accessToken){
      setTimeout(()=>{
       localStorage.setItem("savedUsers",JSON.stringify(data.accessToken))
       window.location.href = "../html/index.html"
    },2000)
    }
    else if(ism.toLowerCase() == "izzatbek".toLowerCase() && parol == "izzatbek"){
        alert("Siz Admin sahifasiga kirdingiz")

      setTimeout(()=>{
        localStorage.setItem("savedAdmin",JSON.stringify({ism,parol}))
        window.location.href = "../html/admin.html"
      },2000)
        
    }
    

    else{
        alert("Siz hatoga duch keldingiz")
    }
})
})