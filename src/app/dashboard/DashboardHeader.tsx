import React, { FC } from 'react'
import { H4 } from '../../components/Typography'
import Button from '../../components/Button'
import { useUIStore } from '../../store/ui/uiStore';
import { DASHBOARD_LINKS } from '../../common/strings';
import Image from 'next/image';

type IDashboardHeader = {
  title?: string;
}

const DashboardHeader: FC<IDashboardHeader> = ({title = "Mastery Zone"}) => {
  const { setActiveView } = useUIStore(state => state);

  return (
    <div className='fixed lg:relative w-full flex flex-row items-center justify-between px-8 pr-14 md:pr-16 xl:pr-8 bg-[#F5F6F5] '>
      <H4>
       {title}
      </H4>
      <Button variant='secondary' onClick={() => setActiveView(DASHBOARD_LINKS.PROFILE) } className='!px-0'>
        <Image alt='' loading="lazy" 
        src={require('../../assets/images/profile.png')} 
        className="shrink-0 w-16 aspect-square" />
      </Button>
    </div>
  )
}

export default DashboardHeader
