import React from 'react';
import '../styles/EventCalendar.css';
import notice from "../assets/notice.png"

const EventCalendar = ({ notices }) => {
  // Sort notices by date in ascending order
  const sortedNotices = notices.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="noticeboard-container">
      <h1 className='notice_heading'><img src={notice}/>NoticeBoard </h1>
      {sortedNotices.map((notice, index) => (
        <div key={index} className="notice-item">
          <div className="notice-date">{new Date(notice.date).toLocaleDateString()}</div>
          <div className="notice-content">{notice.content}</div>
        </div>
      ))}
    </div>
  );
};

export default EventCalendar;
