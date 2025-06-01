import { format } from 'date-fns';

export const formatDate = (date: Date | null): string => {
  if (!date) return '';
  return format(date, 'dd/MM/yyyy');
};

export const formatBirthDateForCertificate = (date: Date | null): string[] => {
  if (!date) return Array(6).fill('');
  
  const dateString = format(date, 'ddMMyyyy');
  return dateString.split('');
};

export const convertDateToWords = (date: Date | null): string => {
  if (!date) return '';
  
  const day = format(date, 'd');
  const month = format(date, 'MMMM');
  const year = format(date, 'yyyy');
  
  return `${day}${getDaySuffix(parseInt(day, 10))} ${month}, ${year}`;
};

const getDaySuffix = (day: number): string => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};