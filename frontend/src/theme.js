import { createMuiTheme } from '@material-ui/core/styles';

export const themeoss = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 64,
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 481,
            md: 768,
            lg: 1025,
            xl: 1281,
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily:['Source Sans Pro', 'sans-serif'],
        h1: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '3.125rem',
            fontWeight: 600,
            lineHeight: '3.75rem',
            '@media (min-width: 768px) and (max-width: 1024px)': {
                fontSize: '2.625rem',
                lineHeight: '3.1875rem',
            },
            '@media (max-width: 767px)': {
                fontSize: '1.875rem',
                lineHeight: '2.25rem',
            },
        },
        h2: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '2.625rem',
            fontWeight: 600,
            lineHeight: '3.1875rem',
            '@media (max-width: 767px)': {
                fontSize: '1.625rem',
                lineHeight: '1.9375rem',
            },
        },
        h3: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '1.625rem',
            fontWeight: 600,
            lineHeight: '1.9375rem',
            '@media (max-width: 767px)': {
                fontSize: '1.375rem',
                lineHeight: '1.6875rem',
            },
        },
        h4: {
            fontFamily: 'Overpass, sans-serif',
            fontSize: '1.375rem',
            fontWeight: 600,
            lineHeight: '1.6875rem',
        },
        h5: {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: '1.3125rem',
            '@media (max-width: 767px)': {
                fontSize: '1rem',
                lineHeight: '1.1875rem',
            },
        },
        body1: {
            fontSize: '1.25rem',
            fontWeight: 400,
            lineHeight: '1.625rem',
            '@media (min-width: 768px) and (max-width: 1024px)': {
                fontSize: '1.125rem',
                lineHeight: '1.5rem',
            },
            '@media (max-width: 767px)': {
                fontSize: '1rem',
                lineHeight: '1.375rem',
            },
        },
        body2: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.375rem',
        },
        button: {
            fontSize: "1.25rem",
            fontWeight: 700,
            color: '#fefefe',
            textTransform: 'none',
        },
    },
    palette: {
        primary: {
            main: '#b7b7b7',
            contrastText: "#fefefe",
        },
        secondary: {
            main: '#fff',
            "contrastText": "#fefefe",
        },
        background: {
            paper: "#fff",
            default: "#fff",
        },
        text: {
            primary: "#393939",
            secondary: "#8d8c8c",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
        divider: "#e1e1e1",
        action: {
            hover: "rgba(239, 108, 0, 0.2)",
            selected: "rgba(239, 108, 0, 0.2)",
            disabled: "#8d8c8c",
            disabledBackground: "#d7d7d7",
        }
    },
    'themeName': 'oss Test',
});