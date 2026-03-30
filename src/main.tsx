import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d7d',
      light: '#3d9e9e',
      dark: '#1f5c5c',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
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
        }

        html {
          font-size: 18px;
          line-height: 145%;
          letter-spacing: 0.18px;
          color: #6b6375;
          background: #fff;
        }

        @media (max-width: 1024px) {
          html { font-size: 16px; }
        }

        #root {
          width: 100%;
          min-height: 100svh;
        }

        h1, h2 {
          font-family: system-ui, 'Segoe UI', Roboto, sans-serif;
          font-weight: 500;
          color: #08060d;
        }

        h1 {
          font-size: 56px;
          letter-spacing: -1.68px;
          margin: 32px 0;
        }

        h2 {
          font-size: 24px;
          line-height: 118%;
          letter-spacing: -0.24px;
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
