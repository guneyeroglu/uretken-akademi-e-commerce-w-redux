import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import ProductCardId from '../../components/ProductCards/ProductCardId/ProductCardId';
import Spinner from '../../components/Spinner/Spinner';

import styles from './product.module.scss';

const Product = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://fakestoreapi.com/products/${id}`;

  const { t } = useTranslation();

  const getAllProducts = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();

    // eslint-disable-next-line
  }, []);

  console.log(data);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Spinner />}
      <div className={styles.wrapper__content}>
        {isError && (
          <div className={styles.error}>
            <span>{t('error')}</span>
          </div>
        )}
        {!isLoading && !isError && data && <ProductCardId item={data} />}
        {!isLoading && !isError && !data && (
          <div className={styles['not-found']}>
            <span>{t('noProduct')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
