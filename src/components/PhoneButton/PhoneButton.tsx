import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import { styled, alpha } from '@mui/material/styles';

export default function PhoneButton() {

    return (
        <StyledPhoneButton
            startIcon={<PhoneIcon />}
            href="tel:56891234"
            variant='outlined'
        >
            56 89 12 34
        </StyledPhoneButton>
    );
};

const StyledPhoneButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    borderColor: alpha(theme.palette.primary.contrastText, 0.8),
    borderWidth: '2px',
    textTransform: 'none',
    px: 3,
    py: 1.5,
    fontSize: '20px',
    fontWeight: 600,
    '&:hover': {
        color: theme.palette.primary.dark,
        borderColor: theme.palette.primary.contrastText,
        borderWidth: '2px',
        background: alpha(theme.palette.primary.contrastText, 0.1),
    },
}));
