"use client"
import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputGroup from '../components/InputGroup';
import PasswordGroup from '../components/PasswordInput';
import Link from 'next/link';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { ButtonText, H6 } from '../components/Typography';
import Forgetpassword from './forgotpassword/ForgotPassword';
import { ValidateEmail } from '../utils/helpers';
import Image from 'next/image';

const Login: React.FC = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const emailVal = e.target.value;
    setEmail(emailVal);
    setIsEmailValid(ValidateEmail(emailVal));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // validation
    if (email !== '' && isEmailValid) {
      if (password.length >= 8) {
        setIsFormSubmitted(true);
        router.push("/dashboard");
      } else {
        setIsPasswordValid(false);
      }
    } else {
      setIsEmailValid(false);
    }
  };

  return (<>
    <Forgetpassword open={showModal} close={closeModal} />
    <div className="">
      <div className="flex flex-col xl:flex-row max-md:gap-0 h-[100vh]">
        <section id='loginBanner' className="hidden md:flex flex-col w-full xl:w-7/12 py-20 lg:py-40 max-md:ml-0 max-md:w-full bg-gradient-to-tr from-green-start to-green-end">
          <h1 className="grow justify-center flex  only-lg:text-[5rem] only-lg:pl-[3rem] only-lg:pr-[2rem] items-center px-16 w-full text-8xl font-extrabold tracking-wider whitespace-nowrap text-[#2B2C2B] ">
            Be <br /> Masterful&#128293;
          </h1>
        </section>
        <section className="w-full mt-6 md:mt-10 xl:w-5/12 flex flex-col justify-center items-center xs:mx-auto only-md:mx-auto only-sm:mx-auto max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch  my-auto px-10 md:px-24 xl:px-36">
            <div className="h-[85vh] md:h-[55vh] lg:h-[53vh] xl:h-[86vh]">
              <div className='flex flex-col justify-center items-center xl:items-start '>
                <Image loading='lazy' src={require('../assets/images/Logo.jpg')} alt="logo" className="xs:relative xs:hidden only-sm:hidden only-md:hidden  right-5 max-w-full aspect-[4.17] w-[246px]" />
                <H6 className='mt-10 md:mt-6 lg:mt-10 mb-2'>
                  Sign in to your account
                </H6>
              </div>
              <form className='mt-8'>
                <InputGroup
                  type="email"
                  id="email"
                  placeholder="Email address"
                  onChange={handleEmailChange}
                  note={!isEmailValid ? "Please enter a valid email address" : ""}
                  onBlur={() => {
                    if (email === '' || !ValidateEmail(email)) {
                      setIsEmailValid(false);
                    }
                  }}
                  error={!isEmailValid} />
                <div className="xs:items-center flex flex-col">

                  <PasswordGroup
                    type="password"
                    id="password"
                    note="Password must be between 8 and 20 characters."
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value)
                      if (e.target.value !== '') {
                        setIsPasswordValid(true);
                      }
                    }}
                    onSubmit={() => {
                      if (password.length < 8) {
                        setIsPasswordValid(false);
                      }
                    }}
                    error={!isPasswordValid}
                  />

                  <div className="mt-2 text-xs tracking-wide leading-4 pl-5 xs:self-start xs:ml-5 text-red-600 text-opacity-[87%]">
                    {isFormSubmitted && !password ? "Password is required" : ""}
                  </div>
                </div>
                <div className="flex mt-8">
                  <Link href="#" id='linkForgotPassword' onClick={openModal} className="flex-auto font-raleway my-auto mr-2.5 text-base font-semibold tracking-normal leading-6 text-[#00A600]">
                    Forgot password?
                  </Link>

                  <div className="flex flex-col justify-center text-sm font-bold tracking-wider leading-4 text-center uppercase text-zinc-800">
                    <Button onClick={handleSubmit}
                      id='btnSignin'
                      className='justify-center px-10 py-3 rounded-3xl max-md:px-5'>
                      <ButtonText>
                        SIGN IN
                      </ButtonText>
                    </Button>
                  </div>

                </div>
              </form>
            </div>
            <div className=''>
              <Footer />
            </div>
          </div>
        </section>
      </div>
    </div>
  </>);
};

export default Login;