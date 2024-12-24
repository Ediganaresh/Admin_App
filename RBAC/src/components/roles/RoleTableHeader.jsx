import React from 'react';

const RoleTableHeader = () => (
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left font-semibold">Name</th>
      <th className="px-4 py-2 text-left font-semibold">Description</th>
      <th className="px-4 py-2 text-left font-semibold">Permissions</th>
      <th className="px-4 py-2 text-left font-semibold">Actions</th>
    </tr>
  </thead>
);

export default RoleTableHeader;
