import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { mockRoles } from '../../data/MockData';

const AddUserModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name,
      email,
      role,
      status,
    });
    setName('');
    setEmail('');
    setRole('');
    setStatus('active');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box className="flex justify-between items-center">
          Add New User
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box className="flex flex-col gap-4">
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <FormControl fullWidth required>
              <InputLabel>Role</InputLabel>
              <Select
                value={role}
                label="Role"
                onChange={(e) => setRole(e.target.value)}
              >
                {mockRoles.map((role) => (
                  <MenuItem key={role.id} value={role.name.toLowerCase()}>
                    {role.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth required>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                label="Status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Save User</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddUserModal;
