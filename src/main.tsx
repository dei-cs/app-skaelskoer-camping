import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c5f6e',
      light: '#e8f3f5',
      dark: '#1d3f4a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b6f47',
      light: '#c4a882',
      dark: '#5e4a2e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f0e8',
      paper: '#ece4d4',
    },
  },
  typography: {
    fontFamily: "'Barlow', 'Segoe UI', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          color-scheme: light;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          --color-sand: #c8b090;
          --color-sand-light: #ece4d4;
          --color-fjord: #2c5f6e;
          --color-driftwood: #8b6f47;
        }

        html {
          font-size: 18px;
          line-height: 145%;
          letter-spacing: 0.18px;
          color: #3d3530;
          background: #f5f0e8;
        }

        @media (max-width: 1024px) {
          html { font-size: 16px; }
        }

        #root {
          width: 100%;
          min-height: 100svh;
        }

        h1, h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          color: #08060d;
        }

        h1 {
          font-size: 56px;
          letter-spacing: -0.5px;
          margin: 32px 0;
        }

        h2 {
          font-size: 24px;
          line-height: 118%;
          letter-spacing: 0px;
          margin: 0 0 8px;
        }

        p { margin: 0; }

        @media (max-width: 1024px) {
          h1 { font-size: 36px; margin: 20px 0; }
          h2 { font-size: 20px; }
        }

        code {
          font-family: ui-monospace, Consolas, monospace;
          display: inline-flex;
          border-radius: 4px;
          color: #08060d;
          font-size: 15px;
          line-height: 135%;
          padding: 4px 8px;
          background: #f4f3ec;
        }

        .MuiPaper-root {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          background-repeat: repeat;
        }

        /* Dark mode temporarily disabled — uncomment to re-enable
        @media (prefers-color-scheme: dark) {
          html {
            color: #9ca3af;
            background: #16171d;
          }
        }
        */
      `,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
