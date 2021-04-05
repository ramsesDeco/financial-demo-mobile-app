import dayjs from 'dayjs';
import {formatDate} from './format-date';

describe('format-date', () => {
  it('returns relative format when is hours', () => {
    const isoDate = dayjs().subtract(4, 'hours').toISOString();
    expect(formatDate(isoDate)).toBe('4 hours ago');
  });

  it('returns relative format when is 1 day', () => {
    const isoDate = dayjs().subtract(1, 'day').toISOString();

    expect(formatDate(isoDate)).toBe('a day ago');
  });

  it('returns DD/MM/YY format when is more than 1 day', () => {
    const isoDate = '2021-04-02T21:50:19.032Z';

    expect(formatDate(isoDate)).toBe('02/04/21');
  });
});
