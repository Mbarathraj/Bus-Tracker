import React from 'react'
import TrackBus from './TrackBus'
import AddDriver from './AddDriver'
import AddBus from './AddBus'
import DriverDetails from './DriverDetails'
import BusDetails from './BusDetails'

const mainContent = ({content}) => {
  return (
    <div className='maincontent'>
         {content === "trackbus" && <TrackBus/>} 
         {content == "adddriver" && <AddDriver/>}
         {content == "addbus" && <AddBus/>}
         {content == "driver" && <DriverDetails/>}
         {content == "bus" && <BusDetails/>}
    </div>
  )
}

export default mainContent
