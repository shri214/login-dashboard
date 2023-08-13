import React, { useState } from 'react'
import {Home} from '../Components/Home'
import { SingUp } from '../Components/SignUp'
import { Login } from '../Components/Login'
import { AccountSetting } from '../Components/Account'
import {Route, Routes} from "react-router-dom"

export function Page() {
  const [data, setData]=useState({email:"", password:""})
  console.log(data);
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SingUp setData={setData}/>}/>
      <Route path='/login' element={<Login setData={setData}/>}/>
      <Route path='/account' element={<AccountSetting data={data}/>} />
    </Routes>


    
  )
}

