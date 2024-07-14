import * as React from "react";
import { Body, H5, } from "../../components/Typography";
import { MomentCard } from "./components/MomentCard";
import Image from "next/image";
import { Tooltip } from 'react-tooltip'
import bugsbunny from "../../assets/images/svgs/bugs-bunny.svg"
import growthmindset from "../../assets/images/svgs/Growth_mindset.svg"
import Yosemite from "../../assets/images/svgs/Yosemite.svg"
import uphill from "../../assets/images/svgs/uphill.png"
import women from "../../assets/images/women2.png"
import eye from "../../assets/images/svgs/eye_small.svg"
import smiley from "../../assets/images/svgs/smiley.svg"
import dove from "../../assets/images/svgs/dove.svg"
import welcome from "../../assets/images/welcome.png"
import people from "../../assets/images/people.png"
import daffyduck from "../../assets/images/svgs/daffyduck.svg"
import users from "../../assets/images/svgs/users.svg"
import purposedriven from "../../assets/images/svgs/Purposedriven.svg"
import favorite from '../../assets/images/svgs/favorite.svg';
import textSms from "../../assets/images/svgs/textsms.png"
import infoMark from "../../assets/images/svgs/info-mark.svg"
import fOne from "../../assets/images/svgs/femaleone.svg"
import fTwo from "../../assets/images/svgs/femaletwo.svg"
import fThree from "../../assets/images/femlaethree.png"
import mOne from "../../assets/images/maleone.png"
import Communication from "../../assets/images/svgs/Communication.svg"
import luci from "../../assets/images/svgs/luci.svg"
import lucas from "../../assets/images/svgs/lucas.svg"
import riskManage from "../../assets/images/svgs/RiskManagement.svg"
import torch from "../../assets/images/svgs/torch.svg"
import marta from "../../assets/images/marta.png"
import cartoon1 from "../../assets/images/cartoon1.png"
import caroon2 from "../../assets/images/cartoon2.png"
import smilingGirl from "../../assets/images/girlsmiling.png"
import straightmen from "../../assets/images/straightmen.png"
import shang from "../../assets/images/shanchi.png"
import redHead from "../../assets/images/redHead.png"
import menhoddie from "../../assets/images/meninhoddie.png"
import handsommen from "../../assets/images/handsomemen.png"
import HistoryCard from "./components/HistoryCard";
import Tag from "./components/Tag";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type AvatarProps = {
  src: string | StaticImport;
  alt: string;
  tooltip: { id: any; content: any };
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, tooltip }) => (
  <Image data-tooltip-id={tooltip?.id} loading="lazy" src={src} alt={alt} className="shrink-0 w-12 aspect-square" />
);

const SquadChannel = () => {

  const tooltipsData = [
    { id: 'bugs', content: 'Bugs' },
    { id: 'yosemite', content: 'Yosemite' },
    { id: 'klen', content: 'Klen' },
    { id: 'maria', content: 'Maria' },
    { id: 'quest', content: 'Look out for these skills in action in your Squad! Then Capture the Moment to help your Squad build Mastery in these skills.' },
    { id: 'john', content: 'John' },
    { id: 'jane', content: 'Jane' },
    { id: 'peter', content: 'Peter' },
    { id: 'susan', content: 'Susan' },
    { id: 'mark', content: 'Mark' },
    { id: 'anna', content: 'Anna' },
    { id: 'paul', content: 'Paul' },
    { id: 'luke', content: 'Luke' },
    { id: 'luna', content: 'luna' },
    { id: 'lisa', content: 'lisa' },
    { id: 'alice', content: 'Alice' }
  ];
  return (
    <div className="bg-white flex-1">
      <div className="flex gap-5 flex-1 max-md:flex-col max-md:gap-0">

        <main className="flex flex-col flex-1 lg:w-[83%]">
          <div className="flex flex-col grow w-full bg-neutral-100">
            <div className="xl:px-6 mt-4">

              <div className="flex flex-col w-full lg:flex-row gap-5 xs:mt-5 p-4 lg:p-0">
                {/* middle section */}
                <section className="flex flex-col lg:w-[159%] xs:pb-4">
                  <div className="flex flex-col  grow  lg:h-[88.5vh] overflow-auto lg:pb-4">
                    <MomentCard
                      avatar={require('../../assets/images/svgs/bugs-bunny.svg')}
                      name="Bugs Bunny"
                      action="noticed a Moment"
                      targetName="Yosemite Sam"
                      timeAgo="2 days ago"
                      category="Collaboration"
                      className="-mt-1"
                      noComment
                      addCommentInput={true}
                      categoryIcon={users}
                      title="‍✌You awesomed all over the place!!"
                      content="Greyhound divisively hello coldly wonderfully marginally far upon. And then the Greyhound divisively hello coldly wonderfully marginally far upon. The open Greyhound divisively hello coldly wonderfully marginally far upon."
                      reactions={[{ icon: favorite, count: 12 }]}
                    />
                    <div className="mt-6"></div>
                    <MomentCard
                      avatar={require('../../assets/images/svgs/Yosemite.svg')}
                      name="Yosemite Sam"
                      action="noticed a Moment"
                      targetName="Daffy Duck"
                      timeAgo="69 days ago"
                      addCommentInput={true}
                      category="Purpose Driven"
                      categoryIcon={purposedriven}
                      title="💯 Couldn't have done it better myself"
                      content="Tiramisu pastry chocolate. Danish muffin macaroon. Fruitcake marzipan pastry cheesecake jelly-o carrot cake. Cake liquorice toffee sweet icing macaroon pudding."
                      reactions={[
                        { icon: favorite, count: 1 },
                        { icon: textSms, count: 6 },
                      ]}
                      comments={[
                        {
                          author: 'Bugs Bunny',
                          text: 'Donut donut chupa chups. Sesame snaps caramels bear claw pie. Donut donut apple pie lemon drops.',
                        }
                      ]}
                    />
                    <HistoryCard
                      avatar={bugsbunny}
                      timePassed="12 days ago"
                      descritionWithTags={<span ><b className="text-black">Bugs Bunny</b> just unlocked</span>}
                      cardImage={uphill}
                      tags={[{ image: growthmindset, title: 'Growth Mindset' }]}
                    />
                    <HistoryCard
                      avatar={Yosemite}
                      timePassed="7 days ago"
                      user="Yosemite Sam"
                      descritionWithTags={<span >Invited <b>Daffy Duck</b> to the team. way to go 🚀</span>}
                      cardImage={women}
                    />
                    <HistoryCard
                      avatar={bugsbunny}
                      timePassed="12 days ago"
                      descritionWithTags={<span ><b className="text-black">Bugs Bunny</b> just unlocked</span>}
                      cardImage={uphill}
                      tags={[{ image: eye, title: 'Insightful' }, { image: smiley, title: 'Optimism' },
                        { image: dove, title: 'Resolving conflict' }
                      ]}
                    />
                    <HistoryCard
                      avatar={daffyduck}
                      timePassed="1 day ago"
                      user="Daffy Duck"
                      descritionWithTags={<span >joined <span className="font-bold">Looney Toons �</span>�</span>}
                      cardImage={welcome}
                    />
                    <HistoryCard
                      avatar={Yosemite}
                      timePassed="7 days ago"
                      user="Yosemite Sam"
                      descritionWithTags={<span >created <b>Looney Toons</b> Team</span>}
                      cardImage={people}
                    />
                  </div>
                </section>
                <section className="flex flex-col p-4 w-full xs:hidden only-sm:hidden only-md:hidden">
                  <div className="flex flex-col ">
                    <div className="flex gap-2 self-start text-2xl font-medium text-neutral-950">
                      <H5 className="grow">Signature Zones</H5>
                      <Image data-tooltip-id="signature-zone" loading="lazy" src={infoMark} alt="" className="shrink-0 self-start w-6 mt-1 aspect-square" />
                      <Tooltip
                        className="z-50 !text-[14px] !w-[20rem]"
                        id="signature-zone"
                        place="top"
                        content="Signature Flow Zones are your Squad’s unique skill strengths based on Moments Received. These Squadmates are currently leading the quest on these skills but if you're not one yet, you can always catch up! Check these Flow Zones for action steps to follow!"
                      />
                    </div>
                    <Body variant="body1" className="mt-2 !text-blackSecondary ">
                      Mastery Zones and Squad Leaders with Most Moments received
                    </Body>
                    <div className="flex gap-2 mt-2 text-sm font-medium tracking-normal leading-6 text-zinc-700  ">
                      <Tag icon={purposedriven} text="Purpose Driven" />
                      <Image data-tooltip-id={tooltipsData[0].id} loading="lazy" src={fOne} alt="mariyam" className="shrink-0 z-[5] w-12 aspect-square" />
                      <Image data-tooltip-id={tooltipsData[1].id} loading="lazy" src={fTwo} alt="loona" className="relative right-8 z-[4] shrink-0 w-12 aspect-square" />
                      <Image data-tooltip-id={tooltipsData[2].id} loading="lazy" src={mOne} alt="klen" className="shrink-0 relative z-[3] right-14 h-12 mt-2 md:mt-0 lg:mt-2 aspect-square" />
                      <Image data-tooltip-id={tooltipsData[3].id} loading="lazy" src={fThree} alt="maria" className="shrink-0 relative z-[2] right-20 h-12 mt-2 md:mt-0 lg:mt-2 aspect-square" />
                    </div>

                    {tooltipsData.map((tooltip) => (
                      <Tooltip
                        key={tooltip.id}
                        className="z-50 !text-[14px] !max-w-[20rem]"
                        id={tooltip.id}
                        place="top"
                        content={tooltip.content}
                      />
                    ))}

                    <div className="flex mt-3 gap-2">
                      <Tag icon={Communication} text="Communication" />
                      <Image loading="lazy" src={luci} alt="asd" className="shrink-0 w-12 aspect-square" />
                    </div>
                  </div>
                  <div className="flex gap-2 self-start mt-3 text-sm font-medium tracking-normal leading-6 whitespace-nowrap text-zinc-700">
                    <Tag icon={users} text="Collaboration" />
                    <Image loading="lazy" src={lucas} alt="lucas" className="shrink-0 w-12 aspect-square" />
                  </div>
                  <Body variant="body1" className="mt-8 !text-blackSecondary ">
                    Hottest Mastery Zones this week
                  </Body>
                  <div className="flex flex-col md:flex-row gap-2 mt-1 text-sm font-medium tracking-normal leading-6 text-zinc-700 ">
                    <Tag icon={riskManage} text="Risk Management" count={8} />
                    <Tag icon={torch} text="Enthusiastic" count={29} />
                  </div>
                  <hr className="mt-6 w-full border-t border-neutral-400 " />
                  <div className="flex gap-2.5 mt-7 text-2xl font-medium text-neutral-950 ">
                    <H5 className="">This Week&apos;s Skills Quest</H5>
                    <Image data-tooltip-id={tooltipsData[4].id} loading="lazy" src={infoMark} alt="" className="shrink-0 w-6 aspect-square" />
                  </div>
                  <Body variant="body1" className="mt-2 !text-blackSecondary ">
                    Build your Squad&apos;s Mastery Zones by looking out for these actions. Did a Squadmate...
                  </Body>
                  <Body variant="body1" className="mt-2 !text-blackSecondary ">
                    Get you or others to an &quot;aha&quot; moment
                  </Body>
                  <div className="flex gap-2 2xl:gap-4 flex-wrap mt-3 text-sm font-medium tracking-normal leading-6 whitespace-nowrap text-zinc-700  ">
                    <Tag icon={eye} text="Insightful" />
                    <Avatar tooltip={tooltipsData[6]} src={marta} alt="" />
                    <Avatar tooltip={tooltipsData[5]} src={lucas} alt="" />
                    <Avatar tooltip={tooltipsData[7]} src={fTwo} alt="" />
                    <Avatar tooltip={tooltipsData[9]} src={cartoon1} alt="" />
                    <Avatar tooltip={tooltipsData[8]} src={caroon2} alt="" />
                    <Avatar tooltip={tooltipsData[10]} src={smilingGirl} alt="" />
                    <Avatar tooltip={tooltipsData[11]} src={straightmen} alt="" />
                    <Avatar tooltip={tooltipsData[12]} src={shang} alt="" />
                    <Avatar tooltip={tooltipsData[13]} src={fOne} alt="" />
                    <Avatar tooltip={tooltipsData[14]} src={luci} alt="" />
                    <Avatar tooltip={tooltipsData[15]} src={redHead} alt="" />
                    <Avatar tooltip={tooltipsData[7]} src={menhoddie} alt="" />
                    <Avatar tooltip={tooltipsData[5]} src={handsommen} alt="" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SquadChannel