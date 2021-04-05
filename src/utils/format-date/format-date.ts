import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const formatDate = (isoDate: dayjs.ConfigType) => {
  const date = dayjs(isoDate);

  if (date.isToday() || date.isYesterday()) {
    return date.fromNow();
  }

  return date.format('DD/MM/YY');
};
