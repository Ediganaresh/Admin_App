import React from 'react';
import { IconButton, Chip, Box } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const UserTableRow = ({ user, onDelete }) => (
  <tr>
    <td className="px-4 py-2">{user.name}</td>
    <td className="px-4 py-2">{user.email}</td>
    <td className="px-4 py-2">
      <Chip
        label={user.role}
        color="primary"
        size="small"
        variant="outlined"
        className="text-blue-600 border-blue-600"
      />
    </td>
    <td className="px-4 py-2">
      <Chip
        label={user.status}
        color={user.status === 'active' ? 'success' : 'error'}
        size="small"
        className={user.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
      />
    </td>
    <td className="px-4 py-2">
      <Box className="flex gap-2">
        <IconButton size="small" color="primary">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton 
          size="small" 
          color="error" 
          onClick={() => onDelete(user.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </td>
  </tr>
);

export default UserTableRow;
