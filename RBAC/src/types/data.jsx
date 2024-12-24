// User Interface (converted to JS)
const User = {
    id: '',
    name: '',
    email: '',
    role: '',
    status: 'active', // or 'inactive'
    createdAt: '',
  };
  
  // Role Interface (converted to JS)
  const Role = {
    id: '',
    name: '',
    description: '',
    permissions: [], // Array of Permission objects
  };
  
  // Permission Interface (converted to JS)
  const Permission = {
    id: '',
    name: '',
    description: '',
    module: '',
  };
  
  // Action Types (converted to JS)
  const Actions = ['create', 'read', 'update', 'delete']; // Array of possible actions
  