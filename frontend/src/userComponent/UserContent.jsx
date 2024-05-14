import React from 'react'
import '../adminComponent/admin.css'
import Sidebar from './UserSidebar'
import './user.css'
import UserMainContent from './UserMainContent'
const UserContent = ({content}) => {
  return (
   <div className='content'>
    <Sidebar/>
    
    <UserMainContent content={content}/>
   </div>
  )
}

export default UserContent