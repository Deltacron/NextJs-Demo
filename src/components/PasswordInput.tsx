import React, { ChangeEvent, useState } from "react";
import { Caption, Label, Subtitle } from "./Typography";
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

type InputGroupProps = {
  label?: string;
  type: string;
  placeholder?: string;
  note?: string;
  children?: React.ReactNode;
  error?: boolean,
  onSubmit?: () => void,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  id?: string,
};

const PasswordGroup: React.FC<InputGroupProps> = ({ label, id = "password", type, note, placeholder = "************", children, error, onSubmit = () => { }, onChange, className }) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const defaultClass = "mt-5 w-full";
  return (
    <div className={[defaultClass, className].join(' ')}>
      <Subtitle variant="subtitle1" className={"flex"}>
        {label}
      </Subtitle>
      <div className={`flex gap-2.5 mt-1 max-w-full w-full max-md:flex-wrap rounded-xl border-2 px-4 py-3
      ${focused ? 'border-green-500' : 'border-inputDefault'} border-solid`}>
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false)
            onSubmit()
          }}
          onChange={onChange}
          className="flex-1 justify-center items-start  text-base font-semibold tracking-normal leading-6 
        whitespace-nowrap focus:outline-none focus:ring-0 w-full text-neutral-950 max-md:pr-5 font-raleway"
        />
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <IoIosEye
              size={25}
            />
          ) : (
            <IoIosEyeOff
              size={25}
            />
          )}
        </div>
      </div>
      {error && <Caption className="ml-4 !text-red-500" >{note}</Caption>}
    </div>
  )
};

export default PasswordGroup;