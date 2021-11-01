import currencies from '../data/currencies';

const itemQuantityClassString = ({ quantity }) => {
  if (quantity <= 10) return ' level-low';
  if (quantity <= 20) return ' level-medium';
  if (quantity > 20) return ' level-high';
};

const getPriceString = ({ currency_code, price }) => {
  const currencyCode =
    (currencies[currency_code] && currencies[currency_code] + ' ' + price) ||
    price + ' ' + currency_code;
  return currencyCode;
};

const getTitleValid = ({ title }) => {
  if (title.length > 50) return title.slice(0, 47) + '...';
  return title;
};

export { itemQuantityClassString, getPriceString, getTitleValid, };
