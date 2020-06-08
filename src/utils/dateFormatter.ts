import { format, parseISO } from 'date-fns';

export default function dateFormatter(date: Date | string): string {
  const dateToParse = date.toString();

  const parsedDate = format(parseISO(dateToParse), 'dd/MM/yyyy');

  return parsedDate;
}
