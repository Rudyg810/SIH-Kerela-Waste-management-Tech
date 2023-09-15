import React from 'react'
import styles from "./LoginPage.module.css";
import style from "../../components/Form.module.css"
import { useState } from 'react';
import Layout from '../../layout';
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom"

const Register = () => {
    const [name, setName]= useState("");
    const [password, SetPassword]= useState("");
    const [phone, setPhone]= useState("");
    const navigate = useNavigate()

const handelSubmit = async(e) => {
  e.preventDefault()
  try{
    //rn doing direct loal host
    const res = await axios.post('http://localhost:8080/api/v1/auth/register',{name,password, phone})
 //res.suxxess.data se api ka validation check hoga ahr api pe res.status lga rlha to wo aaega
  if(res.data.success){
    toast.success(res.data.message)
    setTimeout(2000)
    navigate("/login")

  }
  else{
    
    toast.error(res.data.message)
  }
  }
  catch(error){
    console.log(error)
  }
}

return(
  <div>
    <Layout> 
<div >
<div className={styles.loginPage}>
      <img className={styles.loginPageChild} alt="" src="/rectangle-121.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.createYourAccountParent}>
            <div className={styles.createYourAccount}>Create your account.</div>
            <div className={styles.alreadyHaveAnContainer}>
              <span>{`Already have an account? `}</span>
              <span className={styles.signIn}>Sign In</span>
            </div>
          </div>
        </div>


    



    <div className={style.nameParent}>
    <form className="form-container" onSubmit={handelSubmit}> 

      <div className={style.name}>
        <div className={style.fullNameContainer}>
        </div>
        <input className={style.input} type="text"   
        
         
placeholder='Full Name'
value={name} 
onChange= {(e)=> setName(e.target.value)}
        />
      </div>
      <div className={style.name}>
        <div className={style.fullNameContainer}>
        </div>
           <input className={style.input2} type="text" 
value={phone} 
placeholder='Mobile Number'
onChange= {(e)=> setPhone(e.target.value)} />

      </div>
      <div className={style.pass}>
        <div className={style.fullNameContainer}>
        </div>
        <input className={style.input2} type="text"
        placeholder='Password'
value={password} 
onChange= {(e)=> SetPassword(e.target.value)}  />
      </div>
      <div className={style.check}>
        <div className={style.checkChild} />
        
      </div>
      <div className={style.signUpWrapper}>
        <button className={style.signUp}  type='submit' >Sign Up</button>
      </div>
      </form>

    </div>





     </div>
      <img className={styles.rubbish1Icon} alt="" src="/rubbish-1@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
    </div>

</div>
</Layout>


</div>
    );
}
export default Register 