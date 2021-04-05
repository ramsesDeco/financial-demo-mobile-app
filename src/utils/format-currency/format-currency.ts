export const formatCurrency = (amount: string | number) => {
  return `$${parseFloat(`${amount}`)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
};
