'use client'
import React, { ChangeEvent, useState } from 'react';
import { useRouter } from "next/navigation";
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { ButtonText, H2 } from '../../components/Typography';
import PasswordGroup from '../../components/PasswordInput';
import Image from 'next/image';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const router = useRouter();

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    return "";
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const passwordErrorMsg = validatePassword(password);

    if (!passwordErrorMsg && !confirmPasswordError) {
      // Submit the form or perform the necessary actions
      if (password != confirmPassword) {
        setConfirmPasswordError(true);
      } else {
        router.push("/login");
      }
    } else {
      setPasswordError(!!passwordErrorMsg);
      setConfirmPasswordError(password !== confirmPassword);
    }
  };

  return (
    <div className="h-full flex flex-col items-center py-10 pl-6 text-sm font-medium bg-white text-neutral-950 max-md:px-5">
      <Image loading='lazy' src={require('../../assets/images/Logo.jpg')} alt="logo"
        className="self-start max-w-full aspect-[4.17] w-[246px]" />
      <div className="flex flex-col items-center pb-9 xs:py-10 sm:py-10 xl:py-0 pr-20 pl-6 xs:px-10 text-sm font-medium bg-white text-neutral-950 max-md:px-5 md:px-10 container mx-auto">
        <H2 className={"mt-6"}>
          Reset your password
        </H2>
        <div className="xs:items-center flex flex-col mt-[60px] w-1/4">
          <PasswordGroup
            type="password"
            note="Password must be between 8 and 20 characters."
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            onSubmit={() => {
              if (password) setPasswordError(false)
              else setPasswordError(true)
            }}
            error={passwordError}
          />
          <PasswordGroup
            type="password"
            note="Password does not match."
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              if (e.target.value !== "") {
                setConfirmPasswordError(false);
              }
            }}
            onSubmit={() => {
              if (confirmPassword) {
                if (confirmPassword === password) {
                  setConfirmPasswordError(false)
                } else setConfirmPasswordError(true)
              }
              else setConfirmPasswordError(true)
            }}
            error={confirmPasswordError}
            className='mt-1'
          />
        </div>
        <Button onClick={handleSubmit} className="justify-center px-10 py-4 mt-[50px] text-center uppercase rounded-[200px] text-[#2B2C2B] max-md:px-5 max-md:mt-10">
          <ButtonText>
            RESET MY PASSWORD
          </ButtonText>
        </Button>
        <div className='absolute bottom-5'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;