import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {
  <BrowserRouter>
    <Box sx={{ background: '#000'}}>
        Navbar
        <Routes>
          <Route path="/" exact element={<feed />} />
        </Routes>
    </Box>
  </BrowserRouter>
}

export default App
