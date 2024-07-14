import Image from 'next/image'
import React, { FC, ReactNode } from 'react'
import { Body, Caption } from '../../../components/Typography'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Tag from './Tag';

type Tags = {
  image: string;
  title: string;
}

type HistoryCardProps = {
  avatar: string | StaticImport;
  timePassed?: string;
  user?: string;
  description?: string;
  descritionWithTags?: ReactNode;
  cardImage: string | StaticImport;
  tags?: Tags[]
}

const HistoryCard: FC<HistoryCardProps> = ({ avatar, user, descritionWithTags, timePassed, description, cardImage, tags = [] }) => {



  return (
    <div className="py-2 pr-2 pl-4 mt-6 max-w-full bg-white rounded-md border border-gray-200 border-solid ">
      <div className="flex gap-5 xs:flex-col-reverse max-md:flex-col max-md:gap-0">
        <div className="flex flex-col md:w-[63%] xs:w-full ">
          <div className="flex gap-4 items-start self-stretch my-auto ">
            <Image
              loading="lazy"
              alt=""
              src={avatar}
              className="shrink-0 w-24 xs:w-16 aspect-square"
            />
            <div className="flex flex-col text-zinc-700">
              <Caption className=" tracking-wide leading-4">
                {timePassed}
              </Caption>
              <Body variant='body1' className='mt-1 leading-7 !font-bold !text-black'>
                {user}
              </Body>
              <Body variant='body1' className='leading-7 tracking-[0.5px]'>
                {descritionWithTags}
              </Body>
              {tags?.length > 0 && (
                <div className="flex gap-2 mt-2.5 flex-wrap text-sm font-medium tracking-normal leading-6 whitespace-nowrap">
                  {tags?.map((item, index) => {
                    return <Tag key={index} icon={item?.image} text={item?.title}  />
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:ml-5 md:w-[42%] xs:self-center  ">
          <Image
            loading="lazy"
            src={cardImage}
            alt="unhill"
            className=" w-full aspect-[1.37] "
          />
        </div>
      </div>
    </div>
  )
}

export default HistoryCard
