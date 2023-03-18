import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import styles from './not-found.module.scss';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToHome = () => navigate('/');

  return (
    <div className={styles.wrapper}>
      <div className={styles['wrapper__not-found']}>
        <span>{t('noPage')}</span>
      </div>
      <div className={styles.wrapper__actions}>
        <button onClick={handleNavigateToHome}>
          <span>{t('gotoHome')}</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
