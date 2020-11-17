const img = document.querySelector('#image');
const text = document.querySelector('#text');
const name = document.querySelector('#name');
const spans = document.querySelectorAll('.span');
const  url= 'https://randomuser.me/api/'
 const button = document.querySelector('.randome')

 
 

    const getUser = async()=>{
        try{
      const data = await fetch(url);
      const response = await data.json()
 const person = response.results[0]
 
const {
    name:{first},
    name:{last},
    picture:{large},
    email,
    dob:{age},
    phone,
    login:{
    password },
location:{
    street:{name:streetName},
    street:{number:StreetNumber}
}
}=person 
img.src =large
text.textContent = 'My Name is '
name.textContent = `${first} ${last}`
spans.forEach(btn=>{
    btn.addEventListener('click',()=>{
 if(btn.classList.contains('name')){
     text.textContent = 'My Name is '
    name.textContent = `${first} ${last}`
}
if(btn.classList.contains('email')){
    text.textContent= 'My email is'
    name.textContent =email
}
if(btn.classList.contains('street')){
text.textContent= 'My Street is'
    name.textContent = `${streetName} ${StreetNumber }`
}
if(btn.classList.contains('age')){
    text.textContent = 'My Age is '
    name.textContent = age
}
if(btn.classList.contains('phone')){
    text.textContent = 'My phone is ';
    name.textContent = phone
}
if(btn.classList.contains('password')){
    text.textContent = 'My Passwonrd is '
    name.textContent = password
}
    })
})
        }
        catch(error){
console.log(error)
        }
    }
 
 



const showUser =()=>{
 
    getUser()
}
 

window.addEventListener('DOMContentLoaded', showUser)

button.addEventListener('click',showUser)