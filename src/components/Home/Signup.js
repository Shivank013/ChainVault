import React from 'react'
import { Link } from 'react-router-dom';
import "@passageidentity/passage-elements/passage-auth";

function Signup() {
  return(
   <div>
   Signup
   <div>
        <Link to={"/signup/goverment"}><button>Goverment Signup</button></Link>
        <Link to={"/signup/institute"}><button>Institute Signup</button></Link>
        <Link to={"/signup/student"}><button>Student Signup</button></Link>
   </div>
   </div>
  );
}

export default Signup 
