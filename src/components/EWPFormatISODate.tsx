import { format, parseISO } from 'date-fns';

interface dateForFormat {
  date: string;
}

export default function EWPFormatISODate(date: dateForFormat) {
  return format(parseISO(date.date), 'MM/dd/yyyy');
}
