import React from 'react'
import Sidebar from './Sidebar'
import './admin.css'
import MainContent from './mainContent'
import { useParams } from 'react-router-dom'
import './TrackBus'
import TrackBus from './TrackBus'

const Content = ({content}) => {
  return (
    <div className='content'>
    <Sidebar/>
     <MainContent content={content}/>
    </div>
    
  )
}

export default Content