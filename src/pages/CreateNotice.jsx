import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as necessary
import "../styles/CreateNotice.css"
import CustomNavbar from '../component/Navbar';

const CreateNotice = () => {
  const [content, setContent] = useState('');

  const handleCreateNotice = async () => {
    try {
      const noticeRef = collection(db, 'Notices');
      const newNotice = {
        content: content,
        date: serverTimestamp()
      };
      await addDoc(noticeRef, newNotice);
      alert('Notice created successfully!');
      setContent('');
    } catch (error) {
      console.error('Error adding notice: ', error);
    }
  };

  return (
    <div>
        <CustomNavbar/>
    <div className='create-notice-container'>
    <div className="create-notice">
      <h2 className='create-notice-heading'>Create Notice</h2>
      <textarea
        className="create-notice-content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter notice content..."
      />
      <button onClick={handleCreateNotice} className='create-notice-btn'>Create Notice</button>
    </div>
    </div>
    </div>
  );
};

export default CreateNotice;
