import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { CloseSvg } from '../Icons';
import { setSearchValue } from '../../global/store/actions';

import styles from './search.module.scss';

const Search = () => {
  const { t } = useTranslation();
  const { value } = useSelector((state) => state.commonReducer);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const handleSetSearch = (value) => {
    setSearchValue(dispatch, value);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return (
    <>
      {visible && (
        <div className={styles.wrapper}>
          <input placeholder={t('search')} type={'text'} value={value} onChange={({ target }) => handleSetSearch(target.value)} />
          {!!value && (
            <button onClick={() => handleSetSearch('')}>
              <CloseSvg />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
