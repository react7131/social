import { useState } from 'react';
import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material'
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import AddPost from './components/Add';

function App() {

  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent='space-between'>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed  />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
