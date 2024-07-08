import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';
import CandidateItem from './CandidateItem';
import useStyles from './styles';
import Dashboard from './components/Dashboard';

const CandidateList = () => {
  const classes = useStyles();
  const [candidates, setCandidates] = useState([]);
  const [filter, setFilter] = useState({
    title: '',
    age: '',
    status: '',
    experience_duration: '',
    last_employer: '',
    last_position: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/candidates/', { params: filter })
      .then(response => setCandidates(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className={classes.container}>
      <Dashboard type="candidates" />
      <Typography variant="h3" className={classes.heading}>applicant Management</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.filterContainer}>
            <Typography variant="h6" className={classes.filterHeading}>Filter Candidates</Typography>
            <TextField
              label="Title"
              name="title"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleFilterChange}
              className={classes.textField}
            />
            <TextField
              label="Age"
              name="age"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleFilterChange}
              className={classes.textField}
            />
            <TextField
              label="Status"
              name="status"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleFilterChange}
              className={classes.textField}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {candidates.map((candidate) => (
              <Grid item xs={12} sm={6} md={4} key={candidate.id}>
                <Paper className={classes.paper}>
                  <CandidateItem candidate={candidate} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CandidateList;
