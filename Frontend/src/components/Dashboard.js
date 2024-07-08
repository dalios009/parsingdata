import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Box, Paper } from '@mui/material';
import useStyles from './styles';

const Dashboard = ({ type }) => {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/${type}/`);
        setCount(response.data.length);
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };

    fetchCount();
  }, [type]);

  return (
    <Box className={classes.dashboard}>
      <Paper className={classes.dashboardPaper}>
        <Typography variant="h1" className={classes.dashboardCount}>
          {count}
        </Typography>
        <Typography variant="h6" className={classes.dashboardText}>
          {`We have ${count} ${type === 'jobs' ? 'jobs' : 'candidates'} available`}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;
