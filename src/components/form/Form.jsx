import  {useState} from 'react'
import './form.css'


function Form() {

const [password,setPassword]=useState('')
const [email,setEmail]=useState('');
  return (

    <div className='login'>
      <form
       onSubmit={(e)=>{
        e.preventDefault();
        if (email==='seena@gmail' && password ==='abc123'){alert('login succesfuly')}
        else{alert('plz enter email:seena@gmail passwor:dabcd123 ')}
        console.log()
       }}>
        <label htmlFor='email'>Email{email}</label>
       <input type="email" name="email" id="email" required  value={email}
       onChange={(e)=>{
        setEmail(e.target.value);
        setPassword()
       }}/>
       <label htmlFor='password'>Password{password}</label>
       <input type="password" name="password" id="password" required
       
       onChange={(e)=>
       setPassword (e.target.value)
       } />
       <button>login</button>
      </form>
    </div>
  )
}

export default Form
