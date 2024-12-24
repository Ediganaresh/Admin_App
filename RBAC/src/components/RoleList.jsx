import React, { useState } from 'react';
import { Button, Paper, Table, TableContainer, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { mockRoles } from '../data/MockData';
import RoleTableRow from './roles/RoleTableRow';
import RoleTableHeader from './roles/RoleTableHeader';
import AddRoleModal from './roles/AddRoleModal';

const RoleList = () => {
  const [roles, setRoles] = useState(mockRoles);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddRole = (newRole) => {
    const role = {
      ...newRole,
      id: (roles.length + 1).toString(),
    };
    setRoles([...roles, role]);
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <>
      <Paper className="p-6 mb-6 border-b border-gray-300">
        <div className="flex justify-between items-center">
          <Typography variant="h5" component="h2" className="font-semibold">
            Roles
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className="bg-blue-600 text-white"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add Role
          </Button>
        </div>
      </Paper>
      <TableContainer className="mb-6">
        <Table className="min-w-full">
          <RoleTableHeader />
          <tbody>
            {roles.map((role) => (
              <RoleTableRow
                key={role.id}
                role={role}
                onDelete={handleDeleteRole}
              />
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <AddRoleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddRole}
      />
    </>
  );
};

export default RoleList;
