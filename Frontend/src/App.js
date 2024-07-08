import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JobList from './components/jobList';
import CandidateList from './components/condidateList';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Data Parser Portal
        </Typography>
        <Button color="inherit" component={Link} to="/jobs">jobs</Button>
        <Button color="inherit" component={Link} to="/condidates">condidate</Button>
      </Toolbar>
    </AppBar>
    <Container>
      <Routes>
        <Route path="/jobs" element={<JobList />} />
        <Route path="/condidates" element={<CandidateList />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
