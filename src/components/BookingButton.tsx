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
    borderWidth: '2px',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    boxShadow: '0 4px 16px rgba(46,125,125,0.5)',
    '&:hover': {
        boxShadow: '0 6px 20px rgba(46,125,125,0.6)',
    }
});
