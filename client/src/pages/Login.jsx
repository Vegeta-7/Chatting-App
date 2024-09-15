import React, { useState } from 'react'
import SignIn from '../components/SignIn';
import Register from '../components/Register';


const Login = () => {
  const [signIn, setSignIn] = useState(true);  

  return (
    <div>
      {signIn ? (
        <SignIn signIn={signIn} setSignIn={setSignIn}/>
      ):(
        <Register signIn={signIn} setSignIn={setSignIn}/>
      )}
    </div>
  );
}

export default Login