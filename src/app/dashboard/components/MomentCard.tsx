import { Body, ButtonText, H6, Subtitle } from "../../../components/Typography";
import bugsbunny from "../../../assets/images/svgs/bugs-bunny.svg";
import React from "react";
import Button from "../../../components/Button";
import Image from "next/image";
import Tag from "./Tag";

type MomentCardProps = {
  avatar: string;
  name: string;
  action: string;
  targetName: string;
  timeAgo: string;
  category: string;
  categoryIcon: string;
  title: string;
  content: string;
  className?: string;
  addCommentInput?: boolean;
  noComment?: boolean;
  reactions: {
    icon: string;
    count: number;
  }[];
  comments?: {
    author: string;
    text: string;
  }[];
};

export const MomentCard: React.FC<MomentCardProps> = ({
  avatar,
  name,
  action,
  targetName,
  timeAgo,
  category,
  categoryIcon,
  title,
  content,
  reactions,
  addCommentInput,
  className,
  comments = []
}) => {

  return (
    <article className={`flex flex-col p-4 bg-white rounded-lg border border-gray-200 border-solid ${className}`}>
      <div className="flex flex-col md:flex-row gap-5 justify-between px-px w-full xs:flex-wrap">
        <div className="flex flex-row gap-2 items-center">
          <Image loading="lazy" src={avatar} alt={`${name}'s avatar`} className="shrink-0 w-12 h-12 aspect-square" />
          <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
            <div className="text-lg font-medium tracking-wide leading-7 text-black text-opacity-90">
              <Body variant="body1" className="!font-bold !text-blackSecondary">{name}</Body> {action}
            </div>
            <div className="flex gap-3">
              <div className="text-lg font-medium tracking-wide leading-7 text-black text-opacity-90">
                by <Body variant="body1" className="!font-bold !text-blackSecondary">{targetName}</Body>
              </div>
              <div className="flex-auto my-auto text-xs tracking-wide leading-4 text-zinc-700">
                {timeAgo}
              </div>
            </div>
          </div>
        </div>
        <Tag icon={categoryIcon} text={category} />
      </div>
      <H6 className="mt-5 text-xl font-bold tracking-normal text-zinc-600">{title}</H6>
      <Body variant="body1" className="mt-2 text-lg font-medium tracking-wide leading-7 !text-lightBlack max-md:mr-2">
        {content}
      </Body>
      <div className="flex gap-5 self-start mt-6 text-xl font-semibold tracking-normal leading-6 text-center whitespace-nowrap !text-lightBlack">
        {reactions.map((reaction, index) => (
          <div key={index} className="flex flex-1 gap-2 items-center">
            <Image
              onClick={() => alert('This mechanism is under development')}
              loading="lazy"
              src={reaction.icon}
              alt=""
              className={`shrink-0 w-9 aspect-square text-gray-500'`}
            />
            <H6 className="!text-likesCountBlack">{reaction.count}</H6>
          </div>
        ))}
      </div>
      <div className="w-full border mt-4 border-dividerGray opacity-60" />
      <div className="flex flex-col">
        {comments?.length > 0 && (
          <>
            <div className="flex gap-2 mt-4">
              <Image
                loading="lazy"
                alt="bgd"
                src={bugsbunny}
                className="shrink-0 self-start w-8 aspect-square"
              />
              <div className="flex flex-col grow shrink-0 py-1 pb-2 pr-9 pl-2.5 bg-commentBackgroundGreen rounded-xl basis-0 w-fit">
                <Subtitle variant="subtitle1" className="!text-black">
                  {comments[0].author}
                </Subtitle>
                <Subtitle variant="subtitle2" className="mt-1 !text-commentGray">
                  {comments[0].text}
                </Subtitle>
              </div>
            </div>
            <Subtitle variant="subtitle1" className={"mt-3 cursor-pointer !text-darkGreen"}>
              View 5 more comments
            </Subtitle>
          </>

        )}
      </div>

      {addCommentInput && (
        <div className="flex gap-2 mt-3 text-base font-semibold tracking-normal leading-6 text-neutral-400" >
          <input
            id="commentInput"
            type="text"
            placeholder="Write a comment about this Moment..."
            className="flex-1 justify-center !text-blackSecondary !font-raleway items-start px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-0 focus:border-green-500 border-solid bg-white bg-opacity-70 border-neutral-400"
          />
          <Button aria-label="Submit comment" className="bg-white !text-primary-700 px-4 font-bold">
            <ButtonText className="!text-primary">
              SEND
            </ButtonText>
          </Button>
        </div>
      )}
    </article>
  );
};