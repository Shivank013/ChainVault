import React from 'react';
import "@passageidentity/passage-elements/passage-auth";
import pic from "../../assets/login_bg.jpg";

function Login() {
  return (
    
    <div className='w-full h-screen flex justify-center items-center' style={{backgroundImage: `url(${pic})`, backgroundSize: 'cover'}}>
      <passage-auth app-id="8c0AtBB6VHkphQ2mNffiyyZC"></passage-auth>
      <script src="https://psg.so/web.js"></script>
    </div>
  );
}

export default Login;
