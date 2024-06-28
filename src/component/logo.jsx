import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Logo() {
  const navigate = useNavigate();
  const [username, setName] = useState(0);
  const [email, setEmail] = useState(0);
 const [password, setPassword] = useState(0);
  const [repassword, setRepassword] = useState(0);
  const[result,setResult] = useState(0);
  const[error,setError] = useState(false);
  const[output,setOutput]=useState('');



async function handleSubmit()
  {
    // const minPasswordLength = 4;
    
    // if(password.length< minPasswordLength)
    //     {
    //         setError(true);
    //     }
        
    // else 
    if(password==repassword){
    setResult({username,email,password});
    setError(false);
     const response = await axios.post('http://localhost:5000/logo',{
        username,email,password
     });
     console.log(response.data)
     if(response.data=='email not found')
        {
            setError(true);
        }
        else{
            setOutput('welcome' +  ' ' + response.data.username)
        }
    }
    else{
      setError(true)
    //   navigate('/error');
    }
  }
  function handleChange1(e) {
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
      <div style={{backgroundColor:"pink",display:'flex',flexDirection:'column',width:'400px',margin:'50px',border : "2px solid black",padding:50,borderRadius:'15px' }}>
      <label>Username</label>
       
       <input type="Username" placeholder ="Enter your username" onChange={handleChange1}/>


      
    <label>Email</label>
       
      <input type="Email" placeholder ="Enter your email id" onChange={handleChange2}/>
    
      <label>Password</label>
      
      <input type="Password" placeholder ="Enter your password" onChange={handleChange3}/>
      
      
      <label>repassword</label>
      
      <input type="rePassword" placeholder ="Enter your repassword" onChange={handleChange4}/>
        
      
        
        {error==true?<p>Invalid password</p>:''}
        <br />
      <button style ={{display:'flex',justify :'space between'}}onClick={handleSubmit}>
        login
    </button>
    
    </div>
    
      <p>data:{output} &nbsp;</p>
        </>
      );
} 




