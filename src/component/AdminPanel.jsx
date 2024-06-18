// src/components/AdminPanel.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../firebase'; 
import '../styles/AdminPanel.css'; 
import CustomNavbar from './Navbar';

const AdminPanel = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesCollection = collection(db, 'Notices');
        const snapshot = await getDocs(noticesCollection);
        const noticesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNotices(noticesList);
      } catch (error) {
        console.error('Error fetching notices: ', error);
      }
    };

    fetchNotices();
  }, []);

  const handleDeleteNotice = async (id) => {
    try {
      const noticeRef = doc(db, 'Notices', id); // Correct usage of doc function
      await deleteDoc(noticeRef);
      // Update the notices list after deletion
      setNotices(notices.filter(notice => notice.id !== id));
      alert('Notice deleted successfully!');
    } catch (error) {
      console.error('Error deleting notice: ', error);
    }
  };

  return (
    <div>
        <CustomNavbar/>
    <div className='admin-panel-container'>
    <div className="admin-panel">
      <h2 className='admin-heading'>Admin Panel</h2>
      <div className="admin-notices-list">
        {notices.map((notice) => (
          <div key={notice.id} className="admin-notice-item">
            <p className='admin-notice-content'>{notice.content}</p>
            <div>
              <Link to={`/admin/update/${notice.id}`} className="admin-button">Update</Link>
              <button onClick={() => handleDeleteNotice(notice.id)} className="admin-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/admin/create" className="admin-button">Create Notice</Link>
    </div>
    </div>
    </div>
  );
};

export default AdminPanel;
