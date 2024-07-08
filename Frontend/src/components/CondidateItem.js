import React from 'react';
import { CardContent, Typography, Button, Box } from '@mui/material';
import useStyles from './styles';
import Dashboard from './components/Dashboard'; // Corrected import

const CandidateItem = ({ candidate }) => {
  const classes = useStyles();

  return (
    <CardContent className={classes.cardContent}>
      <Typography variant="h5" className={classes.cardTitle}>{candidate.title}</Typography>
      <Box className={classes.cardDetails}>
        <Typography variant="body2" color="textSecondary">{`Age: ${candidate.age}`}</Typography>
        <Typography variant="body2" color="textSecondary">{`Status: ${candidate.status}`}</Typography>
        <Typography variant="body2" color="textSecondary">{`Experience: ${candidate.experience_duration}`}</Typography>
        <Typography variant="body2" color="textSecondary">{`Last Employer: ${candidate.last_employer}`}</Typography>
        <Typography variant="body2" color="textSecondary">{`Last Position: ${candidate.last_position}`}</Typography>
      </Box>
      <Button size="small" color="primary" href={candidate.link} target="_blank">Learn More</Button>
    </CardContent>
  );
};

export default CandidateItem;
