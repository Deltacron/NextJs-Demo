import * as React from "react";
import { Caption, H5, Label, Subtitle } from "./Typography";

type InputGroupProps = {
  label?: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  note?: string;
  children?: React.ReactNode;
  error?: boolean,
  onBlur?: () => void,
  onChange?: (e: any) => void,
  id?: string,
};

const InputGroup: React.FC<InputGroupProps> = ({ label, id = "input", defaultValue = "", type, note, error, placeholder, children, onBlur, onChange }) => (
  <div className="mt-5 w-full">
    <Subtitle variant="subtitle1" className={"flex"}>
      {label}
    </Subtitle>
    <div className="flex gap-2.5 mt-1 max-w-full w-full max-md:flex-wrap">
      <input
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={`justify-center items-start px-4 py-3 text-base font-semibold tracking-normal leading-6 
        whitespace-nowrap rounded-xl border-2 border-inputDefault focus:outline-none focus:ring-0 focus:border-green-500  border-solid w-full text-neutral-950 max-md:pr-5 
        max-md:max-w-full font-raleway ${!error && 'mb-6'}`}
        onBlur={onBlur}
        defaultValue={defaultValue}
      />
      {children}
    </div>
    {error && <Caption className="ml-4 !text-red-500">{note}</Caption>}
  </div>
);

export default InputGroup;