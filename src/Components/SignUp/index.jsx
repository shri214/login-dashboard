import React, { useState } from "react";
import "./style.css";
import { Inputs } from "../Input";
import { useNavigate } from "react-router-dom";

import {store} from "../reducer"




export function SingUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
  });

  const [error, setError]=useState(false)
  const [isAgency, setIsAgency] = useState(true); // Default value can be true or false



  const handleRadioChange = (event) => {
    setIsAgency(event.target.value === "yes");
  };

  const handle = (e, name) => {
    if (name === "name") {
      setCredentials({ ...credentials, name: e.target.value });
    } else if (name === "email") {
      setCredentials({ ...credentials, email: e.target.value });
    } else if (name === "password") {
      setCredentials({ ...credentials, password: e.target.value });
    } else {
      setCredentials({ ...credentials, company: e.target.value });
    }
  };
  console.log(credentials, isAgency);
  const navigation=useNavigate();

  const handelLoginData=()=>{
    if(credentials.email!==""&&credentials.name!==""&&credentials.password!==""&&credentials.company!==""){
      setError(false)
      let obj={name:credentials.name, email:credentials.email}
        store.dispatch({type:"credential", payload:obj})
      navigation('/account');
    }else{
      console.log("all field required" );
      setError(true)
    }
  }
  return (
    <div className="singUp-box">
      <form className="forms">
        <h1>Create your PopX account</h1>
        <Inputs
          type={"text"}
          texts={"Name"}
          flag={true}
          setValue={handle}
          credentials={credentials.name}
          name={"name"}
        />

        <Inputs
          type={"email"}
          texts={"Email Address"}
          flag={true}
          setValue={handle}
          credentials={credentials.email}
          name={"email"}
        />

        <Inputs
          type={"password"}
          texts={"Password"}
          flag={true}
          setValue={handle}
          credentials={credentials.password}
          name={"password"}
        />

        <Inputs
          type={"text"}
          texts={"Company Name"}
          flag={true}
          setValue={handle}
          credentials={credentials.company}
          name={"company"}
        />

        <label htmlFor="boolean">
          Are you an Agency?<span style={{ color: "red" }}>*</span>
        </label>
        <div class="formup">
          <input
            type="radio"
            name="boolean"
            id="yes"
            value="yes"
            checked={isAgency}
            onChange={handleRadioChange}
          />
          Yes
          <input
            type="radio"
            name="boolean"
            id="no"
            value="no"
            checked={!isAgency}
            onChange={handleRadioChange}
          />
          No
        </div>
        {error && <p style={{color:"red"}}> All Field Mandatory</p>}
      </form>
      <button className="createAcc" onClick={handelLoginData}>Create Account</button>
    </div>
  );
}
