import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import ProductCardCart from '../../components/ProductCards/ProductCardCart/ProductCardCart';
import { ArrowSvg } from '../../components/Icons';

import styles from './cart.module.scss';

const Cart = () => {
  const { cart } = useSelector((state) => state.productReducer);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const totalProductCount = cart.reduce((total, product) => (total += product.count), 0);
  const totalProductAmount = cart.reduce((total, product) => (total += product.price * product.count), 0).toFixed(2);
  const shippingCost = totalProductAmount > 1000 ? 0 : 19.99;

  const handleNavigateHome = () => navigate('/');

  return (
    <div className={styles.wrapper}>
      {!!cart.length && (
        <>
          <div className={styles.wrapper__content}>
            <div className={styles.title}>
              <span>
                {t('myCart')} ({totalProductCount})
              </span>
              <div className={styles.title__backward}>
                <Link to={'/'}>
                  <ArrowSvg />
                  <span>{t('gotoHome')}</span>
                </Link>
              </div>
            </div>
            <div className={styles.items}>
              {cart.map((item) => (
                <ProductCardCart key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className={styles.wrapper__bill}>
            <div className={styles.title}>
              <span>{t('orderSummary')}</span>
            </div>
            <div className={styles.info}>
              <div className={styles.info__product}>
                <span>{t('productTotal')}</span>
                <span>${totalProductAmount}</span>
              </div>
              <div className={styles.info__shipping}>
                <span>{t('shippingCost')}</span>
                <span>${shippingCost}</span>
              </div>
              <div className={styles.info__total}>
                <span>{t('finalTotal')}</span>
                <span>${(parseFloat(totalProductAmount) + parseFloat(shippingCost)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      )}
      {!cart.length && (
        <div className={styles['not-found']}>
          <span>{t('noProduct')}</span>
          <span>{t('waitingForYou')}</span>
          <button onClick={handleNavigateHome}>
            <span>{t('keepShopping')}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
