import React, { useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Paper, Table, TableContainer, Typography } from '@mui/material';
import { mockUsers } from '../data/MockData';
import UserTableRow from './users/UserTableRow';
import UserTableHeader from './users/UserTableHeader';
import AddUserModal from './users/AddUserModel';

const UserList = () => {
  const [users, setUsers] = useState(mockUsers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddUser = (newUser) => {
    const user = {
      ...newUser,
      id: (users.length + 1).toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, user]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <Paper className="p-6 border-b border-gray-300">
        <Box className="flex justify-between items-center">
          <Typography variant="h5" component="h2" className="text-xl font-bold">
            Users
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add User
          </Button>
        </Box>
      </Paper>
      <TableContainer>
        <Table className="min-w-full">
          <UserTableHeader />
          <tbody>
            {users.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onDelete={handleDeleteUser}
              />
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddUser}
      />
    </>
  );
};

export default UserList;
