import React from 'react';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
   <div className='bg-color border-b border-gray-300'>
    <div className='flex items-center justify-between p-4'>
      <h6 className='text-xl font-semibold text-gray-700'>DashBoard</h6>
      <div className='flex gap-4'>
       <IconButton>
        <NotificationsIcon/>
        </IconButton> 
        <IconButton>
          <SettingsIcon/>
        </IconButton>
        <Avatar sx={{bgcolor:'primary.main'}}>E</Avatar>
        <div>
        <p className='font-semibold text-sm'>AdminUser</p>
        <p className='text-xs text-gray-3400'>email@gmail.com</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;
