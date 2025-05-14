import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  // Define 5 users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Richard James",
      image: assets.profile_pic,
      email: 'richardjames@gmail.com',
      phone: '+1 123 456 7890',
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Church Road, London',
      },
      gender: 'Male',
      dob: '2000-01-20',
    },
    {
      id: 2,
      name: "Sarah Lee",
      image: assets.profile_pic,
      email: 'sarahlee@gmail.com',
      phone: '+1 234 567 8901',
      address: {
        line1: '10th Avenue, Manhattan',
        line2: 'New York, USA',
      },
      gender: 'Female',
      dob: '1995-08-15',
    },
    {
      id: 3,
      name: "John Doe",
      image: assets.profile_pic,
      email: 'johndoe@gmail.com',
      phone: '+1 987 654 3210',
      address: {
        line1: '1234 Elm Street',
        line2: 'Beverly Hills, CA',
      },
      gender: 'Male',
      dob: '1990-11-25',
    },
    {
      id: 4,
      name: "Emily Clark",
      image: assets.profile_pic,
      email: 'emilyclark@gmail.com',
      phone: '+1 345 678 9012',
      address: {
        line1: '4567 Oak Lane',
        line2: 'Miami, FL',
      },
      gender: 'Female',
      dob: '1988-05-17',
    },
    {
      id: 5,
      name: "David Smith",
      image: assets.profile_pic,
      email: 'davidsmith@gmail.com',
      phone: '+1 567 890 1234',
      address: {
        line1: '7890 Pine Road',
        line2: 'Dallas, TX',
      },
      gender: 'Male',
      dob: '1985-09-30',
    },
  ]);

  // State to manage the currently selected user
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [userData, setUserData] = useState(selectedUser);

  // Handle user selection
  const handleUserSelect = (userId) => {
    const selected = users.find((user) => user.id === userId);
    setSelectedUser(selected);
    setUserData(selected);
  };

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      {/* User Selection Dropdown */}
      <div>
        <label htmlFor="user-select" className="font-medium">Select User:</label>
        <select
          id="user-select"
          className='mt-2 bg-gray-100 p-2 rounded'
          onChange={(e) => handleUserSelect(parseInt(e.target.value))}
          value={selectedUser.id}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <img className='w-36 rounded mt-4' src={userData.image} alt="Profile" />

      {isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {isEdit
            ? <input className='bg-gray-100 max-w-52' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
            : <p className='text-blue-400'>{userData.phone}</p>}
          <p className='font-medium'>Address:</p>
          {isEdit
            ? <p>
                <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                <br />
                <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} /></p>
            : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {isEdit
            ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            : <p className='text-gray-400'>{userData.gender}</p>}
          <p className='font-medium'>Birthday:</p>
          {isEdit
            ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
            : <p className='text-gray-400'>{userData.dob}</p>}
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
            ? <button onClick={() => setIsEdit(false)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save information</button>
            : <button onClick={() => setIsEdit(true)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
