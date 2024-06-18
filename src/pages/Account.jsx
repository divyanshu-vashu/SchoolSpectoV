import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Adjust the import path as necessary
import AdminPanel from '../component/AdminPanel'; // Adjust the import path as necessary

const Account = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        currentUser.email === 'admin@pps.com' ? (
          <AdminPanel />
        ) : (
          <p>Email: {currentUser.email}</p>
        )
      ) : (
        <p>Please log in to view account details.</p>
      )}
    </div>
  );
};

export default Account;
