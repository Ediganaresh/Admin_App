// Mock Users data
export const mockUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@vrvsecurity.com',
      role: 'admin',
      status: 'active',
      createdAt: '2024-03-15',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@vrvsecurity.com',
      role: 'manager',
      status: 'active',
      createdAt: '2024-03-14',
    },
  ];
  
  // Mock Permissions data
  export const mockPermissions = [
    {
      id: '1',
      name: 'View Users',
      description: 'Can view user list and details',
      module: 'Users',
    },
    {
      id: '2',
      name: 'Manage Users',
      description: 'Can create, edit, and delete users',
      module: 'Users',
    },
    {
      id: '3',
      name: 'View Roles',
      description: 'Can view role list and details',
      module: 'Roles',
    },
    {
      id: '4',
      name: 'Manage Roles',
      description: 'Can create, edit, and delete roles',
      module: 'Roles',
    },
  ];
  
  // Mock Roles data
  export const mockRoles = [
    {
      id: '1',
      name: 'Admin',
      description: 'Full system access',
      permissions: mockPermissions,
    },
    {
      id: '2',
      name: 'Manager',
      description: 'Limited management access',
      permissions: mockPermissions.slice(0, 2),
    },
  ];
  