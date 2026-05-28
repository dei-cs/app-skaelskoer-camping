import Button from '@mui/material/Button'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { styled } from '@mui/material/styles';

export default function BookingButton() {

    return (
        <a href="https://booking.camping.care/skalskor-camping" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <StyledBookingButton
                startIcon={<CalendarMonthIcon />}
                variant='contained'
                color='primary'
            >
                Booking
            </StyledBookingButton>
        </a>
    );
};

// Styled Components:
const StyledBookingButton = styled(Button)({
    px: 3,
    py: 1.5,
    borderWidth: '2px',
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase'
});
