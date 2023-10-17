import { useState, useEffect } from 'react';

const useDateFormat = (dateVal:string, type?:string) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const nowDate = new Date(dateVal);
    const month = nowDate.getMonth() + 1;
    const date = nowDate.getDate();
    const hours = nowDate.getHours() < 10 ? `0${nowDate.getHours()}` : nowDate.getHours();
    const minutes = nowDate.getMinutes() < 10 ? `0${nowDate.getMinutes()}` : nowDate.getMinutes();
    
    if (type === 'comment' && nowDate.getDate() === new Date().getDate()) {
      setFormattedDate(`${hours}:${minutes}`);
    } else if (type === 'comment') {
      setFormattedDate(`${month}.${date} ${hours}:${minutes}`);
    } else {
      setFormattedDate(`${month}월 ${date}일 ${hours}:${minutes}`);
    }
  }, [dateVal, type]);

  return formattedDate;
};

export default useDateFormat;