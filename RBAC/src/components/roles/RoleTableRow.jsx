import React from 'react';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Box, IconButton, Chip } from '@mui/material';

const RoleTableRow = ({ role, onDelete }) => (
  <tr>
    <td className="px-4 py-2">{role.name}</td>
    <td className="px-4 py-2">{role.description}</td>
    <td className="px-4 py-2">
      <Box className="flex flex-wrap gap-2">
        {role.permissions.map((permission) => (
          <Chip
            key={permission.id}
            label={permission.name}
            size="small"
            variant="outlined"
            color="primary"
            className="text-blue-600 border-blue-600"
          />
        ))}
      </Box>
    </td>
    <td className="px-4 py-2">
      <Box className="flex gap-2">
        <IconButton size="small" color="primary">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton 
          size="small" 
          color="error" 
          onClick={() => onDelete(role.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </td>
  </tr>
);

export default RoleTableRow;
