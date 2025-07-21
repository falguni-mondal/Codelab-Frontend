import React from 'react'
import UserDetails from './UserDetails'

const Profile = () => {
  return (
    <div className='w-full flex gap-3 p-10' id='profile-page'>
      <section className='w-[30%]' id="user-dets-sectn">
        <UserDetails />
      </section>
      <section className='w-[70%]' id="user-records-sectn">

      </section>
    </div>
  )
}

export default Profile