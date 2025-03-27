import { format, parseISO } from 'date-fns';

interface dateForFormat {
  date: string;
}

function formatDate({ date }) {
  if (typeof date === 'string') {
    return format(parseISO(date), 'MM/dd/yyyy');
  } else {
    return 'invalid date type';
  }
}

export default function EwpFormatISODate(date: dateForFormat) {
  return formatDate(date);
}
