// src/components/UpdateNotice.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as necessary
import '../styles/UpdateNotice.css'; // Import the CSS file for styling
import CustomNavbar from '../component/Navbar';

const UpdateNotice = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const noticeDoc = await getDoc(doc(db, 'Notices', id));
        if (noticeDoc.exists()) {
          setContent(noticeDoc.data().content);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching notice: ', error);
      }
    };

    fetchNotice();
  }, [id]);

  const handleUpdateNotice = async () => {
    try {
      const noticeDocRef = doc(db, 'Notices', id);
      await updateDoc(noticeDocRef, {
        content: content,
      });
      alert('Notice updated successfully!');
    } catch (error) {
      console.error('Error updating notice: ', error);
    }
  };

  return (
    <div>
        <CustomNavbar/>
    <div className='update-notice-container'>
    <div className="update-notice">
      <h2>Update Notice</h2>
      <textarea
        className="update-notice-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Update notice content..."
      />
      <button onClick={handleUpdateNotice} className="update-button">
        Update Notice
      </button>
    </div>
    </div>
    </div>
  );
};

export default UpdateNotice;
