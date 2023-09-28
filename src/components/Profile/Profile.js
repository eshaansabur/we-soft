import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Profile = () => {
    const [profiles, setProfiles] = useState([]);
    const url= 'https://dummyjson.com/users';
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProfiles(data.users))
    }, [])
    return (
        <div className='bg-gradient-to-r from-purple-900 to-indigo-950'>
            <div className='container mx-auto'>
            <h1 className='text-center text-4xl pb-8 pt-8 text-white'>Profile List Of Users</h1>
                <div className='grid grid-cols-3'>
                {
                    profiles.map(profile=>
                    <User key={profile.id} profile={profile}>

                    </User>)
                }
                </div>
            </div>
        </div>
    );
};

export default Profile;