import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@mui/material';

import styles from './custom-menu.module.scss';
import { setSettingMenu } from '../../global/store/actions/commonActions';

const CustomMenu = (props) => {
  const { list, icon, text } = props;
  const dispatch = useDispatch();
  const { settingOpen } = useSelector((state) => state.commonReducer);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSettingMenu(dispatch, true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSettingMenu(dispatch, false);
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
