import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserList from './components/UserLists';
import RoleList from './components/RoleList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="flex min-h-screen">
        <Sidebar />
        <Box className="flex flex-col flex-grow">
          <Header />
          <Box component="main" className="flex-grow p-3 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/users" replace />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/roles" element={<RoleList />} />
              <Route path="/permissions" element={<RoleList />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
