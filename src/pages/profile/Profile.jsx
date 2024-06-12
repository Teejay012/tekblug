import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase-config';

const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
  } catch (error) {
    console.error('Error logging out user:', error.message);
  }
};

const Profile = () => {
  return (
    <div>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  )
}

export default Profile
