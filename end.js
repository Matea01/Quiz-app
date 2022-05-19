const username=document.getElementById("usernameID");
console.log(username.value);
const saveButton= document.getElementById("SaveBtn");

username.addEventListener('keyup', ()=> {
    
    console.log(username.value);
    saveButton.disabled = !username.value;
}
)


SaveScore = (e) =>{
    e.preventDefault();

}