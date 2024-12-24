import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  IconButton,
  Typography
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { mockPermissions } from '../../data/MockData';

const AddRoleModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name,
      description,
      permissions: selectedPermissions,
    });
    setName('');
    setDescription('');
    setSelectedPermissions([]);
    onClose();
  };

  const togglePermission = (permission) => {
    setSelectedPermissions((prev) =>
      prev.some((p) => p.id === permission.id)
        ? prev.filter((p) => p.id !== permission.id)
        : [...prev, permission]
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box className="flex justify-between items-center">
          Add New Role
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box className="flex flex-col gap-4">
            <TextField
              label="Role Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              fullWidth
              multiline
              rows={3}
              className="mb-4"
            />
            <Box>
              <Typography variant="subtitle1" className="mb-2">
                Permissions
              </Typography>
              <FormControl component="fieldset" fullWidth>
                <FormGroup>
                  <Box className="grid grid-cols-2 gap-4">
                    {mockPermissions.map((permission) => (
                      <Box
                        key={permission.id}
                        className="p-4 border border-gray-300 rounded-lg hover:bg-gray-100"
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedPermissions.some((p) => p.id === permission.id)}
                              onChange={() => togglePermission(permission)}
                            />
                          }
                          label={
                            <Box>
                              <Typography variant="body1">{permission.name}</Typography>
                              <Typography variant="caption" className="text-gray-500">
                                {permission.description}
                              </Typography>
                            </Box>
                          }
                        />
                      </Box>
                    ))}
                  </Box>
                </FormGroup>
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} className="text-gray-500">
            Cancel
          </Button>
          <Button type="submit" variant="contained" className="bg-blue-600 text-white hover:bg-blue-700">
            Save Role
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddRoleModal;
