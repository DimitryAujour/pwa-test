import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: 'Lexend, Arial, sans-serif',
        // You can also specify different weights or styles here
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    palette: {
        primary: {
            main: '#ff9800', // This is an orange shade similar to Material-UI's orange[500].
        },

    },
});
export default theme;