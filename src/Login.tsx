import React, { useRef, useState } from 'react'


const Login = () => {

    const userRef = useRef()
    const errRef = useRef()

    const [user,setUser] = useState('')
    const [pwd,setPwd] = useState('')
    const [errMsg,setErrMsg] = useState('')
    const [success,setSuccess] = useState(false)

  return (
    <div>login</div>
  )
}

export default Login