import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import { styled } from '@mui/material/styles';

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

const StyledPhoneButton = styled(Button)({
    color: '#fff',
    borderColor: 'rgba(255,255,255,0.8)',
    borderWidth: '2px',
    textTransform: 'none',
    px: 3,
    py: 1.5,
    fontSize: '20px',
    fontWeight: 600,
    '&:hover': {
        borderColor: '#fff',
        borderWidth: '2px',
        background: 'rgba(255,255,255,0.1)',
    },
});
