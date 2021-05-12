import React, { useCallback, useState } from 'react';
import CompHeader from '../../Component/Header/header';
import { useHistory } from 'react-router';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const homeChange = useCallback(() => {
    console.log(history);
    history.push('/home');
  }, [history]);

  return (
    <CompHeader
      anchorEl={anchorEl}
      handleMenu={handleMenu}
      handleClose={handleClose}
      open={open}
      homeChange={homeChange}
    />
  );
};

export default Header;
