"use client"
import React from 'react'
import Sidebar from './Sidebar';
import MasteryZonePanel from './MasteryZone';
import { useUIStore } from '../../store/ui/uiStore';
import Profile from './profile';
import DashboardHeader from './DashboardHeader';
import { DASHBOARD_LINKS } from '../../common/strings';
import SquadChannel from './SquadraChannel';

const Dashboard = () => {
  const uiStore = useUIStore(state => state);

  const getMainContent = () => {
    if (uiStore?.activeView === DASHBOARD_LINKS.PROFILE) return <Profile />
    if (uiStore?.activeView === DASHBOARD_LINKS.MASTERY) return <MasteryZonePanel />
    if (uiStore?.activeView === DASHBOARD_LINKS.CHANNEL) return <SquadChannel />
  }

  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='w-full'>
        <DashboardHeader
          title={uiStore?.activeView === DASHBOARD_LINKS.MASTERY ? "Mastery Zone" : DASHBOARD_LINKS.CHANNEL === uiStore?.activeView ? 'Squad Channel' : "Profile"} />
        {getMainContent()}
      </div>
    </div>
  )
}

export default Dashboard;
