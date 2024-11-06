"use client";

import { useUser } from "@/context/UserContext";


const UserCard = ({ user }) => {  
  const {selectedUser} = useUser()
  return (
    <div
    className={`flex flex-row justify-between w-full p-4 my-2 ${selectedUser?.name === user?.name ? 'bg-blue-600' : 'bg-blue-50'} rounded-lg cursor-pointer transition-colors duration-150`}
    >
       <p className={`${selectedUser?.name === user?.name ? 'text-white' : 'text-blue-900'}`}>{user?.name}</p>

      {user?.stats === 1 && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-green-500">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )}

      {user?.stats === 2 && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-gray-500">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )}
    </div>
  );
};

export default UserCard;
