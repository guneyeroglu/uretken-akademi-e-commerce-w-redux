import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from '@mui/material';

import ConfirmModal from '../../../components/ConfirmModal/ConfirmModal';
import { LikeSvg, TrashSvg, PlusSvg, MinusSvg } from '../../Icons';
import { removeFromCart, setFavorite, increaseCart, decreaseCart, removeFromCartAndAddToFavorite } from '../../../global/store/actions';

import styles from './product-card-cart.module.scss';

const ProductCardCart = (props) => {
  const { item } = props;

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.productReducer);

  const isFav = favorites.find((fav) => fav.id === item.id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        <div className={styles['wrapper__item--img']}>
          <div className={styles.container}>
            <img src={item.image} alt={item.title} />
          </div>
        </div>
        <div className={styles['wrapper__item--info']}>
          <div className={styles.name}>
            <Tooltip title={item.title}>
              <span>{item.title}</span>
            </Tooltip>
          </div>
          <div className={styles.price}>
            <Tooltip title={item.price}>
              <span>${(item.count * item.price).toFixed(2)}</span>
            </Tooltip>
          </div>
          <div className={styles.category}>
            <Tooltip title={item.category}>
              <span>{item.category}</span>
            </Tooltip>
          </div>
          <div className={styles.actions}>
            <div className={styles.actions__apart}>
              <button onClick={() => setOpen(true)}>
                <TrashSvg />
              </button>
              <button onClick={() => setFavorite(dispatch, item)} className={`${styles.like} ${isFav ? styles.fav : ''}`.trim()}>
                <LikeSvg />
              </button>
            </div>
            <div className={styles.actions__apart}>
              <button onClick={() => decreaseCart(dispatch, item)} disabled={item.count === 1} className={item.count === 1 ? styles.disabled : ''}>
                <MinusSvg />
              </button>
              <div className={styles.count}>
                <span>{item.count || 0}</span>
              </div>
              <button onClick={() => increaseCart(dispatch, item)} disabled={item.count === 10} className={item.count === 10 ? styles.disabled : ''}>
                <PlusSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        open={open}
        setOpen={setOpen}
        handleDelete={() => removeFromCart(dispatch, item)}
        handleDeleteAndAddFav={() => removeFromCartAndAddToFavorite(dispatch, item)}
      />
    </div>
  );
};

export default ProductCardCart;
