import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';

import { addToCart, setFavorite } from '../../../global/store/slices';
import { LikeSvg } from '../../Icons';

import styles from './product-card-favorite.module.scss';

const ProductCardFavorite = (props) => {
  const { item } = props;
  const { t } = useTranslation();
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
              <span>${item.price}</span>
            </Tooltip>
          </div>
          <div className={styles.category}>
            <Tooltip title={item.category}>
              <span>{item.category}</span>
            </Tooltip>
          </div>
          <div className={styles.actions}>
            <button onClick={() => dispatch(addToCart(item))}>{t('addToCart')}</button>
            <button onClick={() => dispatch(setFavorite(item))} className={`${styles.like} ${isFav ? styles.fav : ''}`.trim()}>
              <LikeSvg />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFavorite;
