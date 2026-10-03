let karobka = document.querySelector(".container")
let loading = document.querySelector(".loading")
let title = document.querySelector(".header_title")
let logout = document.querySelector(".header_logout")
    loading.className = "loading_open"
let savedAdmin = JSON.parse(localStorage.getItem("savedAdmin"))
title.innerHTML = `Admin sahifasiga xush kelibsiz ${savedAdmin.ism}`
if(savedAdmin){
    fetch("https://dummyjson.com/users")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        getData(data.users);
   
})


}
else{
    alert("siz ro'yxatdan o'tishingiz kerak")
    setTimeout(()=>{
window.location.href = "../html/login.html"
    },2000)
}
function getData(item){
    console.log(item);
    
  
item.map(i=>{
    let yangiKarobka = document.createElement("div")
    yangiKarobka.innerHTML = ` <a href="../html/adminSingle.html?card-id=${i.id}"><img src="${i.image}" alt=""></a>

    <div class="body">
    <h1>${i.firstName}</h1>
    <p>${i.age}</p>
    <strong>${i.lastName}</strong>
    </div>`
    karobka.appendChild(yangiKarobka)


})
}
logout.addEventListener("click",()=>{
    let savedAdmin = localStorage.removeItem("savedAdmin")
        setTimeout(()=>{
    window.location.href = "../html/login.html"
},1500)


})