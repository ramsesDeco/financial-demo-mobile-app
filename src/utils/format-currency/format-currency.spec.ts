import {formatCurrency} from './format-currency';

describe('format-currency', () => {
  it('formats a string amount into a currency', () => {
    expect(formatCurrency('1000000.21')).toBe('$1,000,000.21');
  });

  it('formats a number amount into a currency', () => {
    expect(formatCurrency(1000000.21)).toBe('$1,000,000.21');
  });
});
