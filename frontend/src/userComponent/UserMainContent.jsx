import React from 'react'
import TrackBus from '../adminComponent/TrackBus'
import UserTrackBus from './UserTrackBus'
import UserBusDetails from './UserBusDetails'
import UserDriverDetails from './UserDriverDetails'
import UserLocation from './UserLocation'

const UserMainContent = ({content}) => {
  return (
    <div className='maincontent'>
      <div className="row m-1 d-flex justify-content-center btn btn-info">
        Bus Management System
      </div>
        {content === "trackbus" && <UserTrackBus/>}
        {content === "bus" && <UserBusDetails/>}
        {content === "driver" && <UserDriverDetails/>}
        {content === "location" && <UserLocation/>}
    </div>
  )
}

export default UserMainContent