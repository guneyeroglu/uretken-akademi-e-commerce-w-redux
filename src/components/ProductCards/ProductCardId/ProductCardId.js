import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';

import { addToCart, setFavorite } from '../../../global/store/actions';
import { LikeSvg } from '../../Icons';

import styles from './product-card-id.module.scss';

const ProductCardId = (props) => {
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
          <div className={styles.description}>
            <Tooltip title={item.description}>
              <span>{item.description}</span>
            </Tooltip>
          </div>
          <div className={styles.actions}>
            <button onClick={() => setFavorite(dispatch, item)} className={`${styles.like} ${isFav ? styles.fav : ''}`.trim()} name={'favorite'}>
              <LikeSvg name='favorite' />
            </button>
            <button onClick={() => addToCart(dispatch, item)}>{t('addToCart')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardId;
