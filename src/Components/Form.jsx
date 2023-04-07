import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones  
  const [user,setUser] = useState({
    name:'',
    email:''
  })
  const [err,setErr] = useState(false)
  const [show,setShow] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(user.email)
    if (emailTest && user.name.length > 5 ){      
      setShow(true)
      setErr(false)      
    }else{
      setShow(false)
      setErr(true)      
    }
  }
  return (
    <div>
      { !show &&
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={(event) => setUser({...user,name: event.target.value})} required/>
          <input type="email" placeholder="Email" onChange={(event) => setUser({...user,email: event.target.value})} required/>
          <button>Send</button>
        </form>        
      }
      <br />
      {err && <h3>Please verify your information again</h3>}
      {show && <h2>Thank you {user.name}, we will contact you as soon as possible via email</h2>}
    </div>
  );
};

export default Form;
