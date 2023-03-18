import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import ProductCardHome from '../../components/ProductCards/ProductCardHome/ProductCardHome';
import Spinner from '../../components/Spinner/Spinner';
import { setProductLength, setSearchValue } from '../../global/store/actions';

import styles from './home.module.scss';

const Home = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://fakestoreapi.com/products';

  const { t } = useTranslation();
  const { productLength } = useSelector((state) => state.productReducer);
  const { value } = useSelector((state) => state.commonReducer);
  const dispatch = useDispatch();

  const getAllProducts = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data);
      setProductLength(dispatch, response.data.length);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();
    setSearchValue(dispatch, '');

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setProductLength(dispatch, data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())).length);

    // eslint-disable-next-line
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__breadcrumb}>
        <span>{t('product', { count: productLength || 0 })}</span>
      </div>
      {isLoading && <Spinner />}
      <div className={styles.wrapper__content}>
        {isError && (
          <div className={styles.error}>
            <span>{t('error')}</span>
          </div>
        )}
        {!isLoading &&
          !isError &&
          data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())).map((item) => <ProductCardHome key={item.id} item={item} />)}
        {!isLoading && !isError && !productLength && <div className={styles['not-found']}>{!!value.length && <span>{t('notFound')}</span>}</div>}
        {!isLoading && !isError && !data.length && <div className={styles['not-found']}>{!value.length && <span>{t('noProduct')}</span>}</div>}
      </div>
    </div>
  );
};

export default Home;
