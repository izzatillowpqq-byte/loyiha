let productid = location.search
let id = new URLSearchParams(productid).get("card-id")
console.log(id);

let btn = document.querySelector(".edit")
let ism = document.querySelector(".single_title")
let rasmi = document.querySelector(".single_img")
let tarifi = document.querySelector(".single_text")
let openModal = document.querySelector(".updateBox")
let updateBtn = document.querySelector(".updateBtn")
let ismUpdate = document.querySelector(".titleUpdate")
let descUpdate = document.querySelector(".descUpdate")
let rasmUpdate = document.querySelector(".imgUpdate")

fetch(`https://dummyjson.com/users/${id}`)
.then(res=>res.json())
.then (data=>{
    console.log(data);
    

    getSingle(data)
})
function getSingle(item){
    console.log(item);


    rasmi.src = `${item.image}`
    ism.innerHTML = `${item.firstName}`
    tarifi.innerHTML = `${item.email}`


}
btn.addEventListener("click",()=>{
let  question = confirm("Siz ushbu foydalanuvchini o'chirmoqchimisiz")
if (question){
    openModal.className = "updateBox_open"
    updateBtn.addEventListener("click",()=>{
        let updateValue = {
            image: rasmUpdate.value,
            firstName:ismUpdate.value,
            email: descUpdate.value
        
    
    }
    fetch(`https://dummyjson.com/users/${id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateValue)
      })
      .then(res => res.json())
      .then(data =>getSingle(data));

})   
}
})
