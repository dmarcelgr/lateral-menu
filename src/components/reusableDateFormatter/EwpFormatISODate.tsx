import { format, parseISO } from 'date-fns';

type DateInput = string | Date;

const formatDate = (
  date: DateInput,
  dateFormat: string = 'yyyy-MM-dd'
): string => {
  let dateObj: Date;

  if (typeof date === 'string') dateObj = parseISO(date);
  else dateObj = date;

  return format(dateObj, dateFormat);
};

export default formatDate;
