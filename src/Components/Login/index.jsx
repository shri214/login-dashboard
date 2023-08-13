import React, { useState } from "react";
import "./style.css";
import { Inputs } from "../Input";
import { useNavigate } from "react-router-dom";
import {store} from "../reducer"

export function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError]=useState(false)

  const navigation = useNavigate();
  const handelLoginData = (e, name) => {
    if (name === "email") {
      setCredentials({ ...credentials, email: e.target.value });
    } else if (name === "password") {
      setCredentials({ ...credentials, password: e.target.value });
  };
}

  const handle=()=>{
    if(credentials.email!==""&&credentials.password!==""){
      setError(false)
      let obj={ email:credentials.email}
        store.dispatch({type:"credential", payload:obj})
      navigation('/account');
    }else{
      console.log("all field required" );
      setError(true)
    }
  }
  return (
    <div className="container-box login-box">
      <h2 style={{ fontSize: "3rem" }}>Signin to your PopX account</h2>
      <p style={{ color: "#BDBEC0", fontSize: "1.5rem" }}>
        Lorem ipsum dolor sit amet.
      </p>
      <p style={{ color: "#BDBEC0", fontSize: "1.5rem" }}>
        Lorem ipsum dolor sit amet.
      </p>
      <form className="forms">
        <Inputs
          type={"email"}
          texts={"Email Address"}
          setValue={handelLoginData}
          credentials={credentials.email}
          name={"email"}
        />
        <Inputs
          type={"password"}
          texts={"Password"}
          setValue={handelLoginData}
          credentials={credentials.password}
          name={"password"}
        />
        {error && <p style={{color:"red"}}> All Field Mandatory</p>}
        <button className="createAcc" onClick={handle}>
          Login
        </button>
      </form>
    </div>
  );
}
