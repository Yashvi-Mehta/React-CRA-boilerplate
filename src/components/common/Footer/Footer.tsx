import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      background: '#EDF2F4',
      color: 'secondary.darkGrey',
      borderTopColor: 'secondary.midGrey',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      height: '40px',
      left: 0,
      bottom: 0,
      px: '3rem',
      py: '0.25rem'
    }}
  >
    <footer>
      <Typography variant='bodySmallRegular'>&copy; 2022 XXXX</Typography>
    </footer>
  </Box>
);
export default Footer;
