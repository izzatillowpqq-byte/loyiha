let box = document.querySelector("#container")
let inpSearch = document.querySelector(".search_product")
let logout = document.querySelector(".logout")
let loading = document.querySelector(".loading")
    loading.className = "loading_open"
    let saved = JSON.parse(localStorage.getItem("savedUsers"))
    console.log(saved);


if(saved){
fetch("https://dummyjson.com/products")
.then(res=>res.json())
.then(data=>{
    console.log(data.products);
    
    getData(data.products);
    loading.className = "loading"
});
}
else{
    alert("Siz tizimga kirmagansiz, iltimos login qiling")
    setTimeout(()=>{
        window.location.href = "../html/login.html"
    },2000)
}


function getData(item){
    box.innerHTML = ""
    let natija = item || []
natija.map(i=>{
    console.log(i);
    let yangiKarobka = document.createElement("div")
yangiKarobka.innerHTML = ` <a href="../html/single.html?product-id=${i.id}"><img src="${i.thumbnail}" alt=""></a>
<div class="body">
    <h1>${i.title}</h1>
    <p>${i.description}</p>
    <strong>${i.price}</strong>
    </div>`

    box.appendChild(yangiKarobka)
})

}
inpSearch.addEventListener(`keyup`,(r)=>{
    loading.className = "loading_open"
  fetch(`https://dummyjson.com/products/search?q=${r.target.value}`)
.then(res => res.json())
.then(data=>{
    getData(data.products);
})

})
logout.addEventListener("click",()=>{
    setTimeout(()=>{
        localStorage.href = ("savedUsers")
    window.location.href = "../html/login.html"
},2000)

})