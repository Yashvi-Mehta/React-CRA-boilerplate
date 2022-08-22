import { Box, Typography, AppBar, Avatar, Toolbar } from '@mui/material';

import logo from '../../../assets/images/sample-logo.jpg';
import user from '../../../assets/images/user.png';

export default function Header() {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'white', top: 0 }}>
      <Toolbar
        variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '56px',
        }}
      >
        <a className='navbar-brand' href='/'>
          <img src={logo} alt='sample logo' width='50px' height='auto' />
        </a>
        <div>
          <Box sx={{ display: 'flex' }}>
            <Avatar alt='User profile' src={user} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              ml='1rem'
            >
              <Typography variant='bodySmallSemibold' sx={{ color: '#34373F' }}>
                Some name
              </Typography>
            </Box>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}
