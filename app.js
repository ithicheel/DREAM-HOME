const database = firebase.database();
const refs = database.ref("SignUp")
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const number = document.getElementById('number')
const username_login = document.getElementById('username_login')
const password_login = document.getElementById('password_login')
const submit = document.getElementById('submit')
const submit_Login = document.getElementById('submit_login')
const form = document.getElementById('form')
submit.addEventListener('click', ()=>{
    let isCheck = true;
    for(let i=0; i<4; i++){
        if(form[i].value == ""){
            isCheck = false;
            // console.log(form[i].value);
        }
    }
    if(isCheck){
        refs.child('users').push({
            username:username.value,                
            password:password.value,
            email:email.value,
            phone_number:number.value
        })
        alert("Succesful")
    }else {
        alert("Ta guitsed buglunu uu")
    }
    
})
submit_Login.addEventListener("click", check)
async function check(){
    let username = username_login.value
    let password = password_login.value
    let isCheck =false
    await refs.child('users').on("value", data=> {
        let datas = data.val();
        let keys = Object.keys(datas)
        // console.log(keys); 
        for(let i=0; i<keys.length; i++){
            let pass = datas[keys[i]].password
            let user = datas[keys[i]].username
            // console.log(pass,user);  
            if(username == user && password == pass){
                isCheck = true;
            }
        }
        if(isCheck){
            window.location.href = 'https://inspiring-wing-fa8723.netlify.app/main.html'
        }else {
            alert("Error hha")
        }
    })
}
