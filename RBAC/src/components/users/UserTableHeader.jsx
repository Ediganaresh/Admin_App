import React from 'react';

const UserTableHeader = () => (
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left font-semibold">Name</th>
      <th className="px-4 py-2 text-left font-semibold">Email</th>
      <th className="px-4 py-2 text-left font-semibold">Role</th>
      <th className="px-4 py-2 text-left font-semibold">Status</th>
      <th className="px-4 py-2 text-left font-semibold">Actions</th>
    </tr>
  </thead>
);

export default UserTableHeader;
