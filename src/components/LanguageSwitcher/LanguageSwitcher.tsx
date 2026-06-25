import { useTranslation } from 'react-i18next'
import { styled, alpha } from '@mui/material/styles'
import { SUPPORTED_LANGUAGES } from '../../i18n'

interface LanguageSwitcherProps {
  variant?: 'dark' | 'light'
}

export default function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage ?? i18n.language

  return (
    <Group role="group" aria-label="Language" $variant={variant}>
      {SUPPORTED_LANGUAGES.map(({ code, label }, i) => (
        <span key={code} style={{ display: 'inline-flex', alignItems: 'center' }}>
          {i > 0 && <Sep $variant={variant}>/</Sep>}
          <LangButton
            type="button"
            $variant={variant}
            data-active={current === code}
            aria-pressed={current === code}
            onClick={() => i18n.changeLanguage(code)}
          >
            {label}
          </LangButton>
        </span>
      ))}
    </Group>
  )
}

const Group = styled('div', {
  shouldForwardProp: (prop) => prop !== '$variant',
})<{ $variant: 'dark' | 'light' }>({
  display: 'inline-flex',
  alignItems: 'center',
})

const Sep = styled('span', {
  shouldForwardProp: (prop) => prop !== '$variant',
})<{ $variant: 'dark' | 'light' }>(({ theme, $variant }) => ({
  fontSize: 11,
  margin: '0 2px',
  color:
    $variant === 'dark'
      ? alpha(theme.palette.primary.contrastText, 0.4)
      : alpha(theme.palette.brand.sand, 0.9),
}))

const LangButton = styled('button', {
  shouldForwardProp: (prop) => prop !== '$variant',
})<{ $variant: 'dark' | 'light' }>(({ theme, $variant }) => {
  const baseColor =
    $variant === 'dark'
      ? alpha(theme.palette.primary.contrastText, 0.75)
      : theme.palette.brand.earth
  const activeColor =
    $variant === 'dark' ? theme.palette.primary.contrastText : theme.palette.brand.fjord
  return {
    background: 'none',
    border: 'none',
    padding: '2px 4px',
    cursor: 'pointer',
    font: 'inherit',
    fontSize: $variant === 'dark' ? 12 : 14,
    fontWeight: 700,
    letterSpacing: '0.06em',
    color: baseColor,
    transition: 'color 0.2s',
    "&[data-active='true']": { color: activeColor },
    '&:hover': { color: activeColor },
  }
})
