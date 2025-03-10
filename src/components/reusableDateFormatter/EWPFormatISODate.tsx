import { format, parseISO } from 'date-fns';

interface dateForFormat {
  date: string;
}

function formatDate(date) {
  if (typeof date.date === 'string') {
    return format(parseISO(date.date), 'MM/dd/yyyy');
  } else {
    return 'invalid date type';
  }
}

export default function EWPFormatISODate(date: dateForFormat) {
  return formatDate(date);
}
