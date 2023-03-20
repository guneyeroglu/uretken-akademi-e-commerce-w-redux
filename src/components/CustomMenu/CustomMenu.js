import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { setSettingMenu } from '../../global/store/slices';

import styles from './custom-menu.module.scss';

const CustomMenu = (props) => {
  const { list, icon, text } = props;
  const dispatch = useDispatch();
  const { settingOpen } = useSelector((state) => state.commonReducer);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    dispatch(setSettingMenu(true));
  };
  const handleClose = () => {
    setAnchorEl(null);
    dispatch(setSettingMenu(false));
  };

  return (
    <div className={styles.wrapper}>
      <IconButton onClick={handleClick} onClose={handleClose} className={settingOpen ? styles.open : ''}>
        {icon}
        <span>{text}</span>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={settingOpen}
        onClose={handleClose}
        className={styles.list}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {list.map((item) => (
          <MenuItem key={item.id} onClick={item.onClick} className={item.selected ? styles.selected : ''}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;
