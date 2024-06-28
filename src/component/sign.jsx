import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Counter() {
  const navigate =useNavigate();
  const [username, setName] = useState(0);
  const [email, setEmail] = useState(0);
 const [password, setPassword] = useState(0);
  const [repassword, setRepassword] = useState(0);
  const[result,setResult] = useState(0);
  const[error,setError] = useState(false);
  


function handleSubmit(){
  // {const minPasswordLength = 4;
    
  //   if(password.length< minPasswordLength)
  //       {
  //           setError(true);
  //       }
        
  //   else 
  if(password==repassword)
    {
    setResult({username,email,password,repassword});
    setError(false);
     navigate('/logo')
          //navigate (/'login')
    axios.post('http://localhost:5000/sign',{
       username,email,password,repassword
    });
    


 
    }
    else{
      setError(true)
      

    }
  }

function handleChange1(e)
  {
    setName(e.target.value)
  }

 function handleChange2(e) {
    setEmail(e.target.value)
  }

  function handleChange3(e) {
    setPassword(e.target.value)
  }
  function handleChange4(e) {
    setRepassword(e.target.value)
   }
    return (
      <>
      <div style={{backgroundColor:"beige",display:'flex',flexDirection:'column',alignItems: 'center',width:'400px',margin:'50px',border : "2px solid gray",padding:50,borderRadius:'15px' }}>
     
      <label>Username</label>
      
    <input type="Username" placeholder= "Enter your username" onChange={handleChange1}/>
     
    <label>Email</label>
       
      <input type="Email" placeholder ="Enter your email id" onChange={handleChange2}/>
    
      <label>Password</label>
      
      <input type="Password" placeholder ="Enter your password" onChange={handleChange3}/>
      
      <label>Re password</label>
      <input type="Re password" placeholder='Enter your re password ' onChange={handleChange4}/>
      
      
        
      
        
        {error==true?<p>Invalid password</p>:''}
      <button style ={{justify :'space between'}}onClick={handleSubmit}>
        signup
    </button>
    
    </div>
    
      <p>data:{result.username} &nbsp; {result.email} &nbsp;{result.password} &nbsp;{result.repassword} &nbsp; </p>
        </>
      );
} 




