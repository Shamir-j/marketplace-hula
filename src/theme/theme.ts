'use client';

import { createTheme } from '@mui/material/styles';

// Define color palette
const colors = {
    primary: {
        main: '#ff9900', // Hula orange
        dark: '#e88300',
        light: '#ffad33',
        contrastText: '#fff',
    },
    secondary: {
        main: '#232f3e', // Dark blue/gray
        dark: '#131921',
        light: '#37475a',
        contrastText: '#fff',
    },
    background: {
        default: '#f5f5f5',
        paper: '#ffffff',
    },
    text: {
        primary: '#232f3e',
        secondary: '#555555',
        disabled: '#999999',
    },
    error: {
        main: '#f44336',
        light: '#ffebee',
        dark: '#c62828',
    },
    warning: {
        main: '#ff9800',
        light: '#fff3e0',
        dark: '#e65100',
    },
    info: {
        main: '#2196f3',
        light: '#e3f2fd',
        dark: '#1565c0',
    },
    success: {
        main: '#4caf50',
        light: '#e8f5e9',
        dark: '#2e7d32',
    },
    grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
    },
};

// Create the theme
const theme = createTheme({
    palette: colors,
    typography: {
        fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: colors.text.primary,
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: colors.text.primary,
            '@media (max-width:600px)': {
                fontSize: '1.75rem',
            },
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: colors.text.primary,
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: colors.text.primary,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: colors.text.primary,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: colors.text.primary,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 600,
            color: colors.secondary.light,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: colors.secondary.light,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
            color: colors.text.secondary,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: colors.text.secondary,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 4,
                    fontWeight: 500,
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    '&:last-child': {
                        paddingBottom: 16,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: colors.grey[300],
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    paddingTop: 8,
                    paddingBottom: 8,
                },
            },
        },
    },
    spacing: 8, // Base spacing unit (1 = 8px)
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shape: {
        borderRadius: 4,
    },
});

// Define common styles for reuse across components
export const commonStyles = {
    // Legal pages styles
    legalPage: {
        container: {
            backgroundColor: 'background.default',
            minHeight: '100vh',
            py: 4,
        },
        header: {
            mb: 4,
            textAlign: 'center' as const,
        },
        section: {
            mb: 4,
        },
        heading: {
            fontWeight: 'bold',
            mb: 2,
            color: 'text.primary',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
        },
        subsectionHeading: {
            fontWeight: 600,
            mb: 1.5,
            color: 'secondary.light',
            fontSize: '1rem',
        },
    },

    // Alert/Notice cards
    alerts: {
        warning: {
            backgroundColor: 'warning.light',
            border: '1px solid',
            borderColor: 'warning.main',
        },
        info: {
            backgroundColor: 'info.light',
            border: '1px solid',
            borderColor: 'info.main',
        },
        error: {
            backgroundColor: 'error.light',
            border: '1px solid',
            borderColor: 'error.main',
        },
        success: {
            backgroundColor: 'success.light',
            border: '1px solid',
            borderColor: 'success.main',
        },
    },

    // Content boxes
    contentBox: {
        backgroundColor: '#fff',
        p: 2,
        borderRadius: 1,
        mb: 3,
    },

    // Footer styles
    footer: {
        backToTop: {
            padding: '15px',
            backgroundColor: 'secondary.light',
            textAlign: 'center' as const,
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#5a6c7d',
            },
        },
        main: {
            backgroundColor: 'secondary.main',
            color: 'white',
            pt: 6,
            pb: 6,
            px: { xs: 2, md: '15%' },
        },
        copyright: {
            backgroundColor: 'secondary.dark',
            color: 'white',
            py: 2,
            textAlign: 'center' as const,
        },
    },
};

export default theme;
