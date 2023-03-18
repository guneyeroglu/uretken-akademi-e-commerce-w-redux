import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ProductCardHome from '../../components/ProductCards/ProductCardHome/ProductCardHome';

import styles from './favorite.module.scss';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.productReducer);
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__breadcrumb}>
        <span>{t('product', { count: favorites.length || 0 })}</span>
      </div>
      <div className={styles.wrapper__content}>
        {!!favorites.length && favorites.map((item) => <ProductCardHome key={item.id} item={item} />)}
        {!favorites.length && (
          <div className={styles['not-found']}>
            <span>{t('notFound')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
