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

// import { format, parseISO } from 'date-fns';
//
// type DateInput = string | Date;
//
// const formatDate = (
//   date: DateInput,
//   dateFormat: string = 'yyyy-MM-dd'
// ): string => {
//   let dateObj: Date;
//
//   if (typeof date === 'string') dateObj = parseISO(date);
//   else dateObj = date;
//
//   return format(dateObj, dateFormat);
// };
//
// export default formatDate;
