import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
  heading: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  filterContainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
    borderRadius: theme.shape.borderRadius,
  },
  filterHeading: {
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  listContainer: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  jobCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  jobContent: {
    padding: theme.spacing(2),
  },
  jobTitle: {
    marginBottom: theme.spacing(1),
  },
  jobEmployer: {
    marginBottom: theme.spacing(1),
  },
  jobLocation: {
    marginBottom: theme.spacing(1),
  },
  jobExperience: {
    marginBottom: theme.spacing(1),
  },
  jobCompensation: {
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
