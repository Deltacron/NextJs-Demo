import React from "react";
import Image from "next/image";
import { SkillCard } from "../../components/SkillCard";
import { Body, ButtonText, H5 } from "../../components/Typography";
import Tag from "./components/Tag";
import Button from "../../components/Button";

const MasteryZonePanel: React.FC = () => {
  return (
    <main className="flex flex-col px-6 pt-5 pb-5 overflow-auto lg:h-[90vh] bg-neutral-100 max-md:px-5">
      <div className="mt-6 max-md:max-w-full">
        <div className="flex gap-0 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-5 pr-2 pb-2 pl-4 w-full text-lg font-medium leading-7 bg-white rounded-md border border-gray-200 border-solid text-zinc-700 max-md:mt-6 max-md:max-w-full">
              <div className="flex items-center gap-2 self-start text-2xl text-neutral-950">
                <H5>Weekly Stats</H5>
                <Image loading="lazy" src={require('../../assets/images/svgs/exclamation.svg')}
                  alt="" className="shrink-0 self-start w-6 mt-1 aspect-square" />
              </div>
              <Body variant="body1" className="mt-4 mb-2 !text-likesCountBlack">
                🔥 Hottest Mastery Zones this week
              </Body>
              <Tag icon={require('../../assets/images/svgs/torch.svg')} text="Enthusiastic" count={69} />
              <Body variant="body1" className="mt-4 !text-lightBlack">
                32 Moments given (+x from last week)
              </Body>
              <Body variant="body1" className="mt-4 !text-lightBlack">
                20 Moments received (-x from last week)
              </Body>
              <Button variant="secondary" className="flex flex-col justify-center self-end px-4 mt-2 ">
                <ButtonText className="!text-labelGiveMomentGreen uppercase">
                  Give a moment now!
                </ButtonText>
              </Button>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 pt-5 pb-11 w-full text-lg font-medium leading-7 bg-white rounded-md border border-gray-200 border-solid text-zinc-700 max-md:mt-6 max-md:max-w-full">
              <div className="flex items-center gap-2 self-start text-2xl text-neutral-950">
                <H5>This Week's Skills Quest</H5>
                <Image loading="lazy" src={require('../../assets/images/svgs/exclamation.svg')}
                  alt="" className="shrink-0 self-start w-6 mt-1 aspect-square" />
              </div>
              <Body variant="body1" className="mt-4 mb-2 !text-lightBlack">
                Build this Mastery Zone by putting this simple tip into action this week!
              </Body>
              <Tag icon={require('../../assets/images/svgs/eye_small.svg')} text="Insightful" count={1} />
              <Body variant="body1" className="mt-4 mb-2 !text-lightBlack">
                Dig deep into the problem so you can see it from different perspectives.
              </Body>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-6 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <SkillCard
            icon={require('../../assets/images/svgs/torch.svg')}
            name="Enthusiastic"
            description="Spock read minds, but Squadmates aren't Vulcans. Just tell 'em what you're thinking."
            avatars={[require('../../assets/images/profile_male.png'), require('../../assets/images/profile_female.png')]}
            count={78}
          />
          <SkillCard
            icon={require('../../assets/images/svgs/drove.svg')}
            name="Resolving Conflict"
            description="Look for work that is meaningful – if you haven't found it , keep looking!"
            avatars={[require('../../assets/images/profile_male_2.png'), require('../../assets/images/profile_female_2.png')]}
            count={29}
          />
        </div>
      </div>
      <div className="mt-3.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <SkillCard
            icon={require('../../assets/images/svgs/eye_large.svg')}
            name="Insightfulness"
            description="Spock read minds, but Squadmates aren't Vulcans. Just tell 'em what you're thinking."
            avatars={[require('../../assets/images/profile_female.png'), require('../../assets/images/profile_female_2.png')]}
            count={54}
          />
          <SkillCard
            icon={require('../../assets/images/svgs/users.svg')}
            name="Collaboration"
            description="Spock read minds, but Squadmates aren't Vulcans. Just tell 'em what you're thinking."
            avatars={[require('../../assets/images/profile_male_3.png'), require('../../assets/images/profile_male_2.png')]}
            count={14}
          />
        </div>
      </div>
      <div className="mt-3.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <SkillCard
            icon={require('../../assets/images/svgs/smiley.svg')}
            name="Optimism"
            description="Spock read minds, but Squadmates aren't Vulcans. Just tell 'em what you're thinking."
            avatars={[require('../../assets/images/profile_female_2.png'), require('../../assets/images/profile_male_3.png')]}
            count={15}
          />
          <SkillCard
            icon={require('../../assets/images/svgs/notes.svg')}
            name="Organized"
            description="Spock read minds, but Squadmates aren't Vulcans. Just tell 'em what you're thinking."
            avatars={[require('../../assets/images/profile_female_2.png'), require('../../assets/images/profile_male.png')]}
            count={16}
          />
        </div>
      </div>
      <div className="mt-3.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <SkillCard
            icon={require('../../assets/images/svgs/bulb.svg')}
            name="Innovation"
            description="Spock read minds, but Squadmates aren't Vulcans. Just tell 'em what you're thinking."
            avatars={[require('../../assets/images/profile_female.png'), require('../../assets/images/profile_male.png')]}
            count={12}
          />
          <SkillCard
            icon={require('../../assets/images/svgs/shield.svg')}
            name="Resilience"
            description="Spock read minds, but Squadmates aren't Vulcans. Just tell 'em what you're thinking."
            avatars={[require('../../assets/images/profile_female.png'), require('../../assets/images/profile_male_3.png')]}
            count={12}
          />
        </div>
      </div>
    </main>
  );
};

export default MasteryZonePanel;