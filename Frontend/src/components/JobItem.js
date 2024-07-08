import React from 'react';
import { Card, Typography, CardActions, Button } from '@mui/material';
import useStyles from './styles';

const JobItem = ({ job }) => {
  const classes = useStyles();

  return (
    <Card className={classes.jobCard}>
      <div className={classes.jobContent}>
        <Typography variant="h5" className={classes.jobTitle}>{job.title}</Typography>
        <Typography color="textSecondary" className={classes.jobEmployer}>{job.employer}</Typography>
        <Typography variant="body2" className={classes.jobLocation}>{job.location}</Typography>
        <Typography variant="body2" className={classes.jobExperience}>{job.experience}</Typography>
        <Typography variant="body2" className={classes.jobCompensation}>{job.compensation}</Typography>
      </div>
      <CardActions>
        <Button size="small" color="secondary" href={job.link} target="_blank">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default JobItem;
