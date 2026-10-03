let urlid = location.search
console.log(urlid);
const id = new URLSearchParams(urlid).get("product-id")

let img = document.querySelector(".single_img")
let title = document.querySelector(".single_title")
let price = document.querySelector(".single_price")
let desc = document.querySelector(".single_desc")
let delet = document.querySelector(".singleDelet")

console.log(id);
fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data=>{
    console.log(data);

    getSingle(data);

});
function getSingle(item){

    
img.src = `${item.thumbnail}`
title.innerHTML = `${item.title}`
price.innerHTML = `${item.price}`
desc.innerHTML = `${item.description}`
}

delet.addEventListener("click", ()=>{
    fetch(`https://dummyjson.com/products/id')`, {
    method:"DELETE"
})
.then(res => res.json())
.then(data => {
    if(data){
        alert("Siz Maxsulotni o'chirdingiz")
        setTimeout(() => {
            window.location.href = "../html/index.html"
        },1500)
    }
})
})
