import React from 'react';
import "@passageidentity/passage-elements/passage-auth";
import pic from "../../assets/login_bg.jpg";

function Login() {
  return (
    <div className='w-full h-screen flex justify-center items-center' style={{backgroundImage: `url(${pic})`, backgroundSize: 'cover'}}>
      <passage-auth app-id={"sQWkD22Sfvwd110FDImSuaau"}></passage-auth>
    </div>
  );
}

export default Login;
