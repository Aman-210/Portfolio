import { useState } from 'react';
import {
  Box, AppBar, Toolbar, Typography, Tabs, Tab, Drawer,
  IconButton, Grid, ListItemButton
} from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ListIcon from '@mui/icons-material/List';
import ClearIcon from '@mui/icons-material/Clear';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About me', href: '#About' },
    { label: 'My Work', href: '#project' },
    { label: 'What I Do', href: '#whatIDo' },
    { label: 'Contact me', href: '#contact' },
  ];

  const drawerContent = (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.95)',
        color: '#f5df4e',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 4,
      }}
    >
      <IconButton onClick={toggleDrawer} sx={{ alignSelf: 'flex-end', mr: 2 }}>
        <ClearIcon sx={{ color: '#f5df4e', fontSize: '2rem' }} />
      </IconButton>

      {navLinks.map((item, idx) => (
        <ListItemButton
          key={idx}
          href={item.href}
          sx={{
            textAlign: 'center',
            color: '#f5df4e',
            fontSize: '20px',
            py: 2,
            width: '100%',
            justifyContent: 'center'
          }}
        >
          {item.label}
        </ListItemButton>
      ))}

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <LinkedInIcon onClick={() => window.open('https://linkedin.com', '_blank')} />
        <GitHubIcon onClick={() => window.open('https://github.com', '_blank')} />
        <InstagramIcon onClick={() => window.open('https://instagram.com', '_blank')} />
        <MailOutlineIcon onClick={() => window.location.href = 'mailto:your.email@example.com'} />
      </Box>
    </Box>
  );

  return (
    <Box>
      {!open && (
        <AppBar
          sx={{
            backgroundColor: '#f5df4e',
            position: 'fixed',
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography
              component="a"
              href="#home"
              sx={{
                color: '#343a40',
                fontSize: { xs: '24px', sm: '30px' },
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              PORTFOLIO
            </Typography>

            <Tabs
              sx={{
                ml: { sm: 8, md: 20 },
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              {navLinks.map((label, idx) => (
                <Tab
                  key={idx}
                  label={label.label}
                  href={label.href}
                  sx={{ color: '#343a40', fontWeight: 'bold' }}
                />
              ))}
            </Tabs>

            <Box
              sx={{
                ml: 'auto',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                color: '#343a40',
              }}
            >
              <PhoneEnabledIcon />
              <Typography variant="body1" sx={{ ml: 1, fontWeight: 'bold' }}>
                (+91) 9352495750
              </Typography>
            </Box>

            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: { xs: 'block', sm: 'none' },
                ml: 'auto',
                color: '#343a40',
              }}
            >
              <ListIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            zIndex: (theme) => theme.zIndex.drawer + 2,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Header;
