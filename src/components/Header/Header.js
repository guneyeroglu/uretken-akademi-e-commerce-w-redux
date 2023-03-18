import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import SettingsIcon from '@mui/icons-material/Settings';

import CustomMenu from '../CustomMenu/CustomMenu';
import FavoritesMenu from '../FavoritesMenu/FavoritesMenu';
import Search from '../Search/Search';
import { LogoSvg, CartSvg } from '../Icons';

import styles from './header.module.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { cart } = useSelector((state) => state.productReducer);

  const totalProductCount = cart.reduce((total, product) => (total += product.count), 0);

  const languages = [
    {
      id: 1,
      label: t('turkish'),
      onClick: () => {
        localStorage.setItem('i18n__language', 'tr');
        i18n.changeLanguage('tr');
      },
      selected: i18n.language === 'tr',
    },
    {
      id: 2,
      label: t('english'),
      onClick: () => {
        localStorage.setItem('i18n__language', 'en');
        i18n.changeLanguage('en');
      },
      selected: i18n.language === 'en',
    },
  ];

  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        <div className={styles['wrapper__content--logo']}>
          <Link to={'/'}>
            <LogoSvg />
          </Link>
        </div>
        <div className={styles['wrapper__content--search']}>
          <Search />
        </div>
        <nav className={styles['wrapper__content--nav']}>
          <FavoritesMenu />
          <Link to={'/cart'}>
            <CartSvg />
            <span>
              {t('cart')} {!!totalProductCount ? `(${totalProductCount})` : ''}
            </span>
          </Link>
          <CustomMenu list={languages} icon={<SettingsIcon />} text={t('settings')} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
