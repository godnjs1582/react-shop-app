'use client'
import React, { useState } from 'react';
import Image from "next/image";
import LogoPath from "../../../assets/colorful.svg";
import styles from "./Auth.module.scss";
import { useRouter } from 'next/router';
import MyLoader from "../../../components/loader/MyLoader";

const LoginClient = () => {

  

    const [email, setEmail]=useState('');
    const [password, setpassword] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [isAutoLogin, setisAutoLogin] = useState(false);
    
    // const router=useRouter();  
    // const redirectUser=()=>{
    //     router.push("/");
    // }
    const loginUser=(e)=>{
        e.preventDetault();
        setisLoading(true);
    }

    const signInWithGoogle =()=>{

    }

  return (
    <>
    <MyLoader/>
       <section className={styles.page}>
        <div className={styles.container}>
            <h1 className={styles.logo}>
                <Image src={LogoPath} alt="logo"/>
            </h1>
            <form onSubmit={loginUser} className={styles.form}>
                Input
                <div className={styles.group}>
                    자동 로그인, 비밀 번호 수정
                </div>
                <div className={styles.buttonGroup}>
                    Button
                    <div>
                        Button
                    </div>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default LoginClient