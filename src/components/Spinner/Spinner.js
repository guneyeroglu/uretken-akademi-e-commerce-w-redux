import CircularProgress from '@mui/material/CircularProgress';

import styles from './spinner.module.scss';
const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__dark}></div>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
