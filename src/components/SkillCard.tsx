import React from 'react';
import Image from "next/image";
import { Body, ButtonText, Caption, H5 } from "./Typography";

type SkillCardProps = {
  icon: string;
  name: string;
  description: string;
  avatars: string[];
  count: number;
};

export const SkillCard: React.FC<SkillCardProps> = ({ icon, name, description, avatars, count }) => (
  <section className="flex flex-col w-full lg:w-6/12 grow justify-center p-px rounded-md border border-gray-200 border-solid max-md:mt-6 max-md:max-w-full">
    <div className="p-4 bg-white rounded-md max-md:max-w-full">
      <div className="flex gap-0 lg:gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[19%] justify-center items-center max-md:ml-0 max-md:w-full">
          <Image loading="lazy" src={icon} alt={`${name} skill icon`} className="shrink-0 w-24 aspect-square mt-0 md:mt-8 lg:mt-0" />
        </div>
        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <div className="flex gap-5 text-2xl font-medium whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full">
              <H5 className="flex-auto flex-wrap text-wrap">{name}</H5>
              <Image loading="lazy" src={require('../assets/images/svgs/venndiagram.svg')} alt="" className="shrink-0 self-start aspect-[1.41] w-[34px]" />
            </div>
            <Body variant='body2' className="mt-3 ">
              {description}
            </Body>
            <div className="flex gap-5 justify-between mt-3 w-full text-green-700 max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 text-xs tracking-wide leading-4">
                {avatars.map((avatar, index) => (
                  <Image key={index} loading="lazy" src={avatar} alt={`User avatar ${index + 1}`} className="shrink-0 w-8 aspect-square" />
                ))}
                <span className="my-auto">
                  <Caption className='!text-primary'>
                    +{count - avatars.length} others
                  </Caption>
                </span>
              </div>
              <ButtonText className="my-auto uppercase !text-labelGiveMomentGreen">
                {count}
              </ButtonText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);