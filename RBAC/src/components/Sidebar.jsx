import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const menuItems = [
  { icon: <PersonIcon />, label: 'Users', path: '/Users' },
  { icon: <SecurityIcon />, label: 'Roles', path: '/Roles' },
  { icon: <VpnKeyIcon />, label: 'Permissions', path: '/Permissions' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-[240px] flex-shrink-0 bg-blue-600 text-white h-screen">
      <div>
        <h1 className="text-xl font-bold">VRV Security</h1>
        <p className="text-sm text-blue-200">RABC Dashboard</p>
      </div>
      <ul>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={item.path}
              className={`flex items-center p-4 cursor-pointer ${
                isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
            >
              <Link
                to={item.path}
                className="flex items-center w-full text-white"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
