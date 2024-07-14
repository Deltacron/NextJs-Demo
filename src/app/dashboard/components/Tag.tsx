import Image from 'next/image';
import React from 'react'
import { Subtitle } from '../../../components/Typography';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type TagProps = {
  icon: string | StaticImport;
  text: string;
  count?: number;
  className?: string;
};


const Tag: React.FC<TagProps> = ({ icon, text, count, className }) => {
  return (
    <div className={`flex gap-2 px-4 py-2 bg-neutral-200 rounded-[32px] w-fit ${className}`}>
      <Image loading="lazy" src={icon} alt="" className="shrink-0 w-8 aspect-square" />
      <Subtitle variant="subtitle2" className="flex-auto my-auto">
        {text} {count && `| ${count}`}
      </Subtitle>
    </div>
  )
}

export default Tag
