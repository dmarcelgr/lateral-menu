import { format, parseISO } from 'date-fns';

interface dateForFormat {
  date: string;
}

function formatDate(date) {
  switch (typeof date.date) {
    case 'string':
      return format(parseISO(date.date), 'MM/dd/yyyy');
    case 'undefined':
      return 'invalid date type';
  }
}

export default function EWPFormatISODate(date: dateForFormat) {
  return formatDate(date);
}
