import { useTranslation } from 'react-i18next';
import Modal from '@mui/material/Modal';

import { CloseSvg } from '../Icons';

import styles from './confirm-modal.module.scss';

const ConfirmModal = (props) => {
  const { open, setOpen, handleDelete, handleDeleteAndAddFav } = props;
  const { t } = useTranslation();

  const handleClose = () => setOpen(false);

  const handleDeleteAction = () => {
    handleClose();
    handleDelete();
  };

  const handleDeleteAndAddFavAction = () => {
    handleClose();
    handleDeleteAndAddFav();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__title}>
          <button onClick={handleClose}>
            <CloseSvg />
          </button>
        </div>
        <div className={styles.wrapper__text}>
          <span>{t('deleteAndAddFavText')}</span>
        </div>
        <div className={styles.wrapper__actions}>
          <button onClick={handleDeleteAction}>
            <span>{t('delete')}</span>
          </button>
          <button onClick={handleDeleteAndAddFavAction}>
            <span>{t('deleteAndAddFav')}</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
