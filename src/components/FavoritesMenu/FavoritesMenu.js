import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconButton, Popover } from '@mui/material';

import { FavoriteSvg, ArrowSvg } from '../Icons';
import ProductCardFavorite from '../ProductCards/ProductCardFavorite/ProductCardFavorite';
import { setFavoriteMenu } from '../../global/store/actions';

import styles from './favorites-menu.module.scss';

const FavoritesMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.productReducer);
  const { value, favoriteOpen } = useSelector((state) => state.commonReducer);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setFavoriteMenu(dispatch, true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFavoriteMenu(dispatch, false);
  };

  const handleFavoritesClick = () => {
    handleClose();
    setTimeout(() => navigate('/favorites'), 500);
  };

  return (
    <div className={styles.wrapper}>
      <IconButton onClick={handleClick} className={favoriteOpen ? styles.open : ''}>
        {<FavoriteSvg />}
        <span>
          {t('favorites')} {!!favorites.length ? `(${favorites.length})` : ''}
        </span>
      </IconButton>
      <Popover
        open={favoriteOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={styles.popup}
      >
        <div className={styles.container}>
          <div className={styles.container__title}>
            <span>
              {t('myFavorites')} {favorites.length}
            </span>
            <button onClick={handleFavoritesClick}>
              {t('favorites')}
              <ArrowSvg />
            </button>
          </div>
          <div className={styles.container__content}>
            {!favorites.length && (
              <div className={styles['not-found']}>
                <span>{t('noFavProducts')}</span>
              </div>
            )}
            {!!favorites.length &&
              favorites
                .filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
                .map((item) => <ProductCardFavorite key={item.id} item={item} />)}
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default FavoritesMenu;
