import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Adjust the import path as necessary
import AdminPanel from '../component/AdminPanel'; // Adjust the import path as necessary

const Account = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        currentUser.email === import.meta.env.VITE_FIREBASE_ADMIN_EMAIL ? (
          <AdminPanel />
        ) : (
          <p>Email: {currentUser.email}</p>
        )
      ) : (
        <div>
        <p>Please log in to view account details.</p>
        </div>
      )}
    </div>
  );
};

export default Account;
