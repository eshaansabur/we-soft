import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    let [userDetails, setUserDetails] = useState({});
    const {userId} = useParams();
    const navigate = useNavigate();
    const url = `https://dummyjson.com/users/${userId}`; 
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setUserDetails(data))
    }, [])
    const goBack=()=>{
        navigate('/')
    }
    console.log(userDetails);
    const {id, address, age, eyeColor, bank, birthDate, bloodGroup, email, gender, height, image, firstName, lastName, phone, university, weight, username, password} = userDetails;
    return (
        <div className='py-4 bg-gradient-to-r from-purple-700 to-fuchsia-300'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>goBack()}>Go Back to Profiles</button>
            <div className='container mx-auto'>
            <div className='flex items-center justify-center'>
            <img className='h-40 w-40 bg-white border-4 border-green-800 rounded-full' src={image} alt="" />
            </div>
            <h5 class="mt-2 mb-2 text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-indigo-100">Basic Information of the User</h5>
            <h6 className='text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300'>Id: {id}</h6>
            <h5 class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Name: {firstName} {lastName}</h5>
            <h5 class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Age: {age}</h5>
            <h5 class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Date Of Birth: {birthDate}</h5>
            <h5 class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Blood Group: {bloodGroup}</h5>
            <h5 class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Email: {email}</h5>
            <h5 class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">University: {university}</h5>
            <p class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Gender: {gender?.toUpperCase()}, Height: {height} cm, Weight: {weight} kg</p>
            <h6 class="mb-2 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Phone: {phone}</h6>
            <section>
            <h5 class="mt-2 mb-2 text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-indigo-100">Office Profile Login Credentials:</h5>
            <h6 class="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">User Name: {username}</h6>
            <h6 class="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Password: {password}</h6>
            </section>
            <section>
            <h5 class="mt-2 mb-2 text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-indigo-100">Bank Details:</h5>
                <h5 class="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Card Number: {bank?.cardNumber}</h5>
                <h5 class="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Card Expires on: {bank?.cardExpire}</h5>
                <h5 class="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-slate-300">Currency: {bank?.currency}</h5>
            </section>
            </div>
        </div>
    );
};

export default UserDetails;