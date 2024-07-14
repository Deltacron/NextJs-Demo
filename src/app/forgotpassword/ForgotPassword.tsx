import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import InputGroup from '../../components/InputGroup';
import { Body, ButtonText, H4 } from '../../components/Typography';
import Button from '../../components/Button';

type ForgetpasswordProps = {
  open: boolean;
  close: () => void;
};

const Forgetpassword: React.FC<ForgetpasswordProps> = ({ open, close }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const router = useRouter();

  if (!open) return null;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(newValue));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (email && isEmailValid) {
      // Show the second modal
      setIsSecondModalOpen(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  const handlSecondModal = () => {
    setIsSecondModalOpen(false)
    router.push("/resetpassword")
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-md shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center p-4 pb-0">
          <div className="flex flex-col">
            <H4 className="mb-6">
              Forgot Password?
            </H4>
            <Body variant='body1'>
              No worries, let us help you recover it. Please enter your registered email address below.
            </Body>
          </div>
        </div>
        <div className="px-4 mb-8">
          <InputGroup
            label='Email address'
            type="email"
            placeholder="Enter your email address"
            onChange={handleEmailChange}
            note={"Please enter a valid email address"}
            error={!isEmailValid}
          />
        </div>
        <div className="flex justify-end items-center p-4">
          <Button
            className="justify-center px-10 py-2 rounded-[200px] max-md:px-5 tracking-[0.75px]"
            onClick={handleSubmit}
          >
            <ButtonText>
              RESET
            </ButtonText>
          </Button>
        </div>
      </div>

      {isSecondModalOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="flex flex-col px-4 py-4 bg-white rounded-md border border-gray-200 font-semibold border-solid max-w-md">
            <H4 >
              Request sent!
            </H4>
            <Body className="mt-6" variant='body1'>
              If this account exists, an email will be sent with further instructions.
            </Body>

            <div className="flex justify-end items-center mt-6">
              <Button
                className="justify-center px-10 py-2  rounded-[200px] max-md:px-5 tracking-[0.75px]"
                onClick={handlSecondModal}
              >
                <ButtonText>
                  Okay
                </ButtonText>
              </Button>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Forgetpassword;
