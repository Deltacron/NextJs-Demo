import React, { ChangeEvent, useState } from "react";
import InputGroup from "../../../components/InputGroup";
import { Body, ButtonText, Subtitle } from "../../../components/Typography";
import { teamRoles } from "../../../assets/data";
import Button from "../../../components/Button";
import { useUserStore } from "../../../store/userStore";
import { useUIStore } from "../../../store/ui/uiStore";
import { DASHBOARD_LINKS } from "../../../common/strings";
import Image from "next/image";
import { IUserMeta } from "../../../interface";
import Select from 'react-select';

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="flex flex-col items-center mt-6 text-sm font-bold tracking-wider leading-4 text-center text-green-700 uppercase">
    <Image loading="lazy" src={src} alt={alt} className="aspect-square w-[200px]" />
    <div onClick={() => { document.getElementById('avatarImage')?.click() }} className="cursor-pointer flex overflow-hidden relative flex-col justify-center py-6 aspect-[5.56] fill-violet-700 fill-opacity-0 max-md:px-5">
      change avatar
    </div>
  </div>
);

const Profile: React.FC = () => {
  const tags = [
    { text: "Thinking through problems", isActive: false },
    { text: "Challenging yourself", isActive: true },
    { text: "Helping others", isActive: false },
    { text: "Brainstorming ideas", isActive: true },
    { text: "Unlearn what I thought I knew and challenge myself in different ways", isActive: true },
    { text: "Planning things carefully", isActive: false },
  ];

  // stores
  const userStore = useUserStore(state => state);
  const { setActiveView } = useUIStore(state => state);

  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
  const [name, setName] = React.useState<string>(userStore?.userMeta.name);
  const [phone, setPhone] = React.useState<string>(userStore?.userMeta.phone ?? '');
  const [role, setRole] = React.useState<string>(userStore?.userMeta?.role ?? '');

  const [isSaving, setIsSaving] = useState(false);

  const getSkillTextColor = (value: string) => {
    const index = selectedSkills.findIndex((_skill: string) => _skill === value);
    if (index > -1)
      return '!text-[#00B914]';
    else return 'text-[#5B5C5B]';
  }

  return (
    <main className="flex flex-col justify-center px-6 py-6 bg-neutral-100 max-md:px-5">
      <section className="flex flex-col py-8 bg-white rounded-md border border-gray-200 border-solid max-md:max-w-full">
        <div className="flex flex-col items-start px-6 max-md:px-5 max-md:max-w-full">
          <div className="max-w-full w-[701px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                <form className="flex flex-col grow text-base font-semibold tracking-normal leading-6 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                  <InputGroup type="text" defaultValue={name} label="Full name" placeholder="Enter your full name"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                  <div className="mt-5 xs:items-center flex flex-col">
                    <Subtitle variant="subtitle1" className=" xs:self-start xs:ml-8  tracking-normal leading-6 ">
                      Team role
                    </Subtitle>
                    <Select
                      id="team-role"
                      defaultValue={{ value: role, label: role }}
                      onChange={(selectedOption) => setRole(selectedOption?.value ?? '')}
                      options={teamRoles}
                      className="xs:w-[401px] border border-[#b5b5b5] rounded-xl font-semibold shadow-none"
                      placeholder="Select your role"
                      styles={{
                        control: (styles) => ({ ...styles, borderRadius: '0.75rem' }),
                        input: (style) => ({ ...style, paddingTop: 8, paddingBottom: 8, paddingLeft: 4 }),
                        singleValue: (styles) => ({ ...styles, paddingLeft: 4, }),
                      }}
                    />
                  </div>
                  <InputGroup type="phone" label="Phone number" placeholder="01234 555555"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} />
                  <label className="mt-16 max-md:mt-10 max-md:max-w-full">Things you like to do:</label>
                </form>
              </div>
              <div className="flex flex-col ml-8 w-[31%] max-md:ml-0 max-md:w-full">
                <Avatar src={require('../../../assets/images/profile.png')} alt="User avatar" />
                <input type="file" id="avatarImage" onChange={(e: ChangeEvent<HTMLInputElement>) => { alert('This feature is under development') }} className="hidden" accept="image/*"></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:block">
            {tags.map((item, index) => {
              return (
                <Button key={index} variant="secondary"
                  className={`w-full md:w-fit text-wrap mt-4 mr-4 px-4 py-2 ${selectedSkills?.findIndex((_skill: string) => _skill === item?.text) > -1 ? 'bg-green-100 border-primary text-green-500' : 'bg-white border-neutral-400 text-black'} border-2 border-solid  rounded-[32px] whitespace-nowrap`}
                  onClick={() => {
                    const index = selectedSkills.findIndex((_skill: string) => _skill === item?.text)
                    if (index > -1) {
                      setSelectedSkills(selectedSkills.filter((_skill: string) => _skill !== item?.text))
                    } else {
                      setSelectedSkills([...selectedSkills, item?.text])
                    }

                    console.log('Index', index);

                  }}>
                  <Body variant="body1" className={`${getSkillTextColor(item?.text)}`}>
                    {item.text}
                  </Body>
                </Button>
              )
            })}
          </div>
        </div>
        <div className="flex gap-5 self-end mt-8 mr-6 text-sm font-bold tracking-wider leading-4 text-center uppercase text-zinc-800 max-md:mr-2.5">
          <Button variant="secondary" className="text-primary" onClick={() => {
            setActiveView(DASHBOARD_LINKS.MASTERY)
          }}>
            Cancel
          </Button>
          <div className="flex flex-col justify-center">
            <Button onClick={() => {
              const payload: IUserMeta = {
                ...userStore?.userMeta,
                name: name ?? userStore?.userMeta.name,
                phone: phone ?? userStore?.userMeta.phone,
                skills: selectedSkills
              };
              userStore.setUserMeta(payload);
              setIsSaving(true);
              setTimeout(() => {
                setIsSaving(false);
                setActiveView(DASHBOARD_LINKS.MASTERY)
              }, 1000);
            }} className="py-3 px-8">
              <ButtonText className="uppercase">
                {`${isSaving ? 'Saving...' : 'Save Changes'}`}
              </ButtonText>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;