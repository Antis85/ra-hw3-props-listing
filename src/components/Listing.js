import React from 'react';
import PropTypes from 'prop-types';
import {
  itemQuantityClassString,
  getPriceString,
  getTitleValid,
} from '../utils/utils';

export default function Listing({ items }) {
  const itemsList = items.map((item) => {
    // console.log('Listing_item.MainImage.url_570xN: ',item.MainImage.url_570xN);
    // console.log('Listing_Object.entries(item): ',Object.entries(item));
    if (!item.quantity) return null;
    const imgSrcObj = { ...item.MainImage };
    const imgSrcAttr = imgSrcObj.url_570xN;

    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={imgSrcAttr} alt="" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{getTitleValid(item)}</p>
          <p className="item-price">{getPriceString(item)}</p>
          <p className={'item-quantity' + itemQuantityClassString(item)}>
            {item.quantity} left
          </p>
        </div>
      </div>
    );
  });
  return <div className="item-list">{itemsList}</div>;
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      listing_id: PropTypes.number.isRequired,
      MainImage: PropTypes.shape({ url_570xN: PropTypes.string.isRequired })
        .isRequired,
      title: PropTypes.string.isRequired,
      currency_code: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
