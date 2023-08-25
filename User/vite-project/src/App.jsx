import {useState} from "react";
import './App.css' 
import logo from "./assets/instagram.png"
  
function App (){
    const [login ,setlogin] = useState(true)
    const loginSwitch = ()=>{
          setlogin(!login)
    }
return(
<div id='Container'>
  <div id="user">
  <img src ={logo} alt="logo"/>
  <input hidden={login} type="text" name="neha" placeholder='mobile number or email' id=''/>
  <input hidden ={login} type='text' name="" placeholder ='Full Name' id=""/>
  <input type="email" name=""  id ="" placeholder='phone number,username,or email'/>
  <input type="text" name="" id="" placeholder="password"/>
  <button>{login?"sign in":"sign up"}</button>
<div id="footer">
{login?"Don't have account?":"have an account"} <span onClick ={loginSwitch}>{login?"sign up":"Log in"}</span>
    </div>
  </div>
</div>

)
}

export default App;