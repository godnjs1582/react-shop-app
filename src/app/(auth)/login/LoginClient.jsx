'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import LogoPath from '../../../assets/colorful.svg';
import styles from './Auth.module.scss';
import {useRouter} from 'next/router';
import MyLoader from '../../../components/loader/MyLoader';
import Input from '../../../components/input/Input';

const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isAutoLogin, setisAutoLogin] = useState(false);

  // const router=useRouter();
  // const redirectUser=()=>{
  //     router.push("/");
  // }
  const loginUser = (e) => {
    e.preventDetault();
    setisLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      <MyLoader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>
          <form onSubmit={loginUser} className={styles.form}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.group}>자동 로그인, 비밀 번호 수정</div>
            <div className={styles.buttonGroup}>
              Button
              <div>Button</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
