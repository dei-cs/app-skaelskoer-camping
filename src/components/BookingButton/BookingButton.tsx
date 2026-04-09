import Button from '@mui/material/Button'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { styled } from '@mui/material/styles';

export default function BookingButton() {

    return (
        <StyledBookingButton 
            startIcon={<CalendarMonthIcon />} 
            href="#booking"
            variant='contained'
            color='primary'
        >
            Booking
        </StyledBookingButton>
    );
};

// Styled Components:
const StyledBookingButton = styled(Button)({
    px: 3,
    py: 1.5,
    borderWidth: '4px',
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase'
});
