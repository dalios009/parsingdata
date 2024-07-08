import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';
import JobItem from './components/JobItem';
import useStyles from './styles';
import Dashboard from './components/Dashboard';

const JobList = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState({
    title: '',
    employer: '',
    location: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/jobs/', { params: filter })
      .then(response => setJobs(response.data))
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
      <Dashboard type="jobs" />
      <Typography variant="h3" className={classes.heading}>vacancy Management</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.filterContainer}>
            <Typography variant="h6" className={classes.filterHeading}>Filter Jobs</Typography>
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
              label="Employer"
              name="employer"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleFilterChange}
              className={classes.textField}
            />
            <TextField
              label="Location"
              name="location"
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
            {jobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <Paper className={classes.paper}>
                  <JobItem job={job} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobList;
