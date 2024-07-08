import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A different shade of blue
    },
    secondary: {
      main: '#ff9800', // A different secondary color
    },
    background: {
      default: '#f5f5f5', // Light grey background for the entire page
      paper: '#ffffff', // White background for paper elements
    },
    text: {
      primary: '#333333', // Dark grey text for primary content
      secondary: '#555555', // Lighter grey text for secondary content
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 300,
    },
  },
  spacing: 8, // Default spacing is 8
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
  },
});

export default theme;
