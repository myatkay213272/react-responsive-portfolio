import React, { useRef,useEffect, useState } from 'react'
import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {

    const userRef = useRef();
    const errRef = useRef()

    const [user,setUser] = useState(false)
    const [validName,setValidname] = useState(false)
    const [userFocus,setUserFocus] = useState(false)


    const [pwd,setPwd] = useState('')
    const [validPwd,setValidPwd] = useState(false)
    const [pwdFocus,setPwdFocus] = useState(false)

    const [matchPwd,setMatchPwd] = useState('')
    const [validMatch,setValidMatch] = useState(false)
    const [matchFocus,setMatchFocus] = useState(false)

    const [errmsg,setErrMsg] = useState('')
    const [success,setSuccess] = useState(false)


    useEffect(()=>{
        userRef.current.focus()
    },[])


    useEffect(()=>{
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidname(result)
    },[user])



    useEffect(()=>{
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        // const match == pwd === matchPwd
        // setValidMatch(match)
    },[pwd,matchPwd])


    useEffect(()=>{
        setErrMsg('')
    },[user,pwd,matchPwd])

  return (
    <section>

        <p ref={errRef} className={errmsg ? "errmsg" :
            "offscreen"} aria-live='assertive'>
                {errmsg}
        </p>
        
        <h1>Register</h1>

        <form>
            <label htmlFor='username'>
                Username :

                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon = {faCheck}/>
                </span>

                <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon = {faTimes}/>
                </span>

            </label>

            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete='off'
                onChange={(e)=>setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}    // Accessibility: marks invalid if not valid
                aria-describedby='uidnote'
                onFocus={()=>setUserFocus(true)}
                onBlur={()=>setUserFocus(false)}

            />


            <p id="uidnote" className={userFocus && user && !validName 
                                        ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                4 to 24 Characters. <br/>
                Must begin with a letter.<br/>
                Letters,numbers,underscores,hyphens allowed.
            </p>



            <label htmlFor='password'>
                Password :

                <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon = {faCheck}/>
                </span>

                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon = {faTimes}/>
                </span>

            </label>

            <input
                type="text"
                id="password"
                autoComplete='off'
                onChange={(e)=>setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}    // Accessibility: marks invalid if not valid
                aria-describedby='pwdnote'
                onFocus={()=>setPwdFocus(true)}
                onBlur={()=>setPwdFocus(false)}

            />


            <p id="uidnote" className={pwdFocus && !validPwd
                                        ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle}/>
                4 to 24 Characters. <br/>
                Must include uppercase & lowercase , a number & a special Characters letter.<br/>
                
            </p>
            
            
        </form>
    </section>
  )
}

export default Register



















