// alert("Testing")
const name = document.getElementById("input-name")
const button = document.getElementById("Button")
const UserName = document.getElementById("Name")

button.addEventListener("click",() =>{
    const value = name.value
    localStorage.setItem("Name" , value)
    location.reload()
})

window.addEventListener('load', ()=>{
    const value = localStorage.getItem("Name")
    UserName.innerText = value
})