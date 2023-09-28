import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const prof= props.profile;
    console.log(prof);
    const {id, address, age, eyeColor, bank, birthDate, bloodGroup, email, gender, height, image, firstName, lastName, phone, university, weight, username, password}=prof;
    const navigate = useNavigate();
    const seeDetails= (id) =>{
        navigate(`user/${id}`)
    }
    return (
        <div onClick={()=>seeDetails(id)}
        class="cursor-pointer bg-gradient-to-r from-slate-500 to-cyan-300 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-4">
          <img
            class="rounded-t-lg"
            src={image}
            alt="" />
        <div class="p-6">
        <h5
            class="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-red-900">
            Profile Card
        </h5>
          <h5
            class="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-lime-800">
            Name: {firstName} {lastName}
          </h5>
          <p class="text-sky-800 mb-4 text-xl font-bold">
            Email: {email}
          </p>
        </div>
      </div>
    );
};

export default User;