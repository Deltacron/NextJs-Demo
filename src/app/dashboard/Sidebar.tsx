import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "../../components/Button";
import { DASHBOARD_LINKS } from "../../common/strings";
import { useUIStore } from "../../store/ui/uiStore";
import Image from "next/image";
import { MenuItem } from "../../components/MenuItem";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageSrc, buttonText, className }) => (
  <div className={`flex flex-col items-center pb-4 rounded-md border border-gray-200 border-solid bg-neutral-50 ${className}`}>
    <Image loading="lazy" src={imageSrc} alt={title} className="aspect-[1.47] w-[220px]" />
    <div className="flex flex-col self-stretch px-5 mt-6">
      <h2 className="text-xl font-bold tracking-normal text-black text-opacity-90">{title}</h2>
      <p className="mt-4 text-sm tracking-wide leading-5 text-black text-opacity-60">{description}</p>
    </div>
    <Button variant="secondary" onClick={() => {
      alert('This mechanism is under development')
    }} className="flex overflow-hidden relative flex-col justify-center px-2.5 py-3 mt-3 -ml-5 text-sm font-bold tracking-wider leading-4 text-center text-green-700 uppercase aspect-[4.56] fill-violet-700 fill-opacity-0">
      {buttonText}
    </Button>
  </div>
);

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setActiveView } = useUIStore(state => state);

  const menuItems = [
    { 
      text: "Your Mastery zones", 
      iconSrc: require('../../assets/images/svgs/medal.svg'),
      route: DASHBOARD_LINKS.MASTERY
    },
    { 
      text: "Squad channel", 
      iconSrc: require('../../assets/images/svgs/discussion.svg'),
      route: DASHBOARD_LINKS.CHANNEL
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`fixed top-6 right-1 md:right-4 z-20 text-black p-2 rounded-md xl:hidden ${isOpen && "hidden"} opacity-50`}
        onClick={toggleSidebar}
      >
        <IoIosMenu size={30} />
      </button>
      <main className={`fixed inset-y-0 right-0 z-10 w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out bg-white border border-gray-200 border-solid w-[350px] xl:relative xl:translate-x-0`}>
        <section className="flex flex-col px-4 pt-5 pb-20 w-full bg-white">
          <button
            className="fixed top-4 right-2 z-20 text-black p-2 rounded-md xl:hidden opacity-50"
            onClick={toggleSidebar}
          >
            <IoMdClose size={24} />
          </button>
          <Image loading="lazy" src={require('../../assets/images/Logo.jpg')} alt="Logo" className="self-center xs:hidden -ml-5 aspect-[4.17] max-w-[164px] w-[164px]" />
          {menuItems.map((item, index) => (
            <MenuItem 
            className={'opacity-100 cursor-pointer'} 
            key={index} text={item.text} iconSrc={item.iconSrc} 
            onClick={() => {
              if (item?.route) {
                setActiveView(item?.route)
                toggleSidebar();
              }
            }}
            />
          ))}
          <div className="flex flex-col justify-center mt-20 mb-24 border-2 border-white border-solid">
            <Card
              title="Invite Squadmates"
              description="Squadra works best when you have all your teammates on the app."
              imageSrc={require('../../assets/images/svgs/invite.svg')}
              buttonText="START INVITING 🚀"
              className={'opacity-100'}
            />
          </div>
        </section>
      </main>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-0 xl:hidden" onClick={toggleSidebar}></div>}
    </>
  )
};

export default Sidebar;