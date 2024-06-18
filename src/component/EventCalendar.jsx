import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as necessary
import '../styles/EventCalendar.css';
import noticeIcon from '../assets/notice.png';

const EventCalendar = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticeCollection = collection(db, 'Notices');
        const noticeSnapshot = await getDocs(noticeCollection);
        const noticeList = noticeSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            content: data.content,
            date: data.date.toDate() // Convert Firestore timestamp to JS Date
          };
        });
        setNotices(noticeList);
      } catch (error) {
        console.error("Error fetching notices: ", error);
      }
    };

    fetchNotices();
  }, []);

  // Sort notices by date in ascending order
  const sortedNotices = notices.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="noticeboard-container">
      <h1 className='notice_heading'>
        <img src={noticeIcon} alt="Notice Icon" /> NoticeBoard
      </h1>
      {sortedNotices.map((notice) => (
        <div key={notice.id} className="notice-item">
          <div className="notice-date">{new Date(notice.date).toLocaleDateString()}</div>
          <div className="notice-content">{notice.content}</div>
        </div>
      ))}
    </div>
  );
};

export default EventCalendar;
