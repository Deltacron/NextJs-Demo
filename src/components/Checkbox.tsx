import React from 'react'

type CheckboxProps = {
  label: string;
  onChecked: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({label = "It's OK to email me about Squadra", onChecked}) => {
  return (
    <div className="flex gap-2.5 mt-5 text-sm font-medium tracking-normal leading-6 text-neutral-950">
      <input type="checkbox" onChange={onChecked} id="email-opt-in" className="shrink-0 w-6 aspect-square checked:appearance-none checked:bg-primary checked:text-white" />
      <label htmlFor="email-opt-in" className="flex-auto my-auto">
        {label}
      </label>
    </div>
  )
}

export default Checkbox
