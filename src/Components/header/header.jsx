import { useState } from 'react';
import{Box , AppBar, Toolbar, styled, Typography, Tabs, Tab, Drawer, ListItem, ListItemButton} from '@mui/material'
// Icons

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import ListIcon from '@mui/icons-material/List';
import ClearIcon from '@mui/icons-material/Clear';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// Styling
const Navbar = styled(AppBar)(({theme})=>({
background:'#f5df4e',

}))
const Logo = styled(Typography)(({theme})=>({
 color:'#343a40',
 fontSize:'30px',
 fontWeight:'bold',
 cursor:'pointer'

}))
const Nav = styled(Tabs)(({theme})=>({

   marginLeft:'15rem',
   [theme.breakpoints.down('md')]:{
    marginLeft:'3rem',
   },
   [theme.breakpoints.down('sm')]:{
   display:'none'
   }
}))
const Li = styled(Tab)(({theme})=>({
   
color:'#343a40',
fontWeight:' bold',
[theme.breakpoints.down('sm')]:{
    display:'none'
}
}))
const Number = styled(Box)(({theme})=>({
   marginLeft:'auto' ,
   color:'#343a40',
   
   [theme.breakpoints.down('md')]:{
    display:'none'
   },
   [theme.breakpoints.down('sm')]:{
    display:'none'
   }

}))
const Menu = styled(Typography)(({theme})=>({
  
   display:'none',
   [theme.breakpoints.down('sm')]:{
    display:'block',
    marginLeft:'auto' ,
    color:'#343a40',
    
   }

}))



const Header = ()=>{
    const [open , setOpen] = useState(false)
    const handleOnClick =()=>{
        setOpen(true)
    
     }
     const HandleClose=()=>{
        setOpen(false)
     }

     const list =()=>{
        return(
            <Box sx={{ width: '400px', height:'100vh', background:' rgba(0, 0, 0, 0.75)' , color:'#fff', position:'fixed' }}  >
                
                <ClearIcon style={{fontSize:'30px' , marginLeft:'22.5rem' , }} onClick={HandleClose}/>
                
                <ListItem sx={{display:'block' ,  fontFamily:'sans-serif' ,fontSize:'20px' , marginTop:'5rem'}}>
                    <ListItemButton href='#home' sx={{display:'block' , padding:'10px', marginBottom:'10px' , textAlign:'center', color:'#f5df4e'}}>
                        Home
                    </ListItemButton>
                    <ListItemButton href='#About' sx={{display:'block' , padding:'10px', marginBottom:'10px' , textAlign:'center' , color:'#f5df4e'}}>
                        About me
                    </ListItemButton>
                    <ListItemButton href='#project' sx={{display:'block' , padding:'10px', marginBottom:'10px' , textAlign:'center',color:'#f5df4e'}}>
                        My Work
                    </ListItemButton>
                    <ListItemButton href='#what I do' sx={{display:'block' , padding:'10px', marginBottom:'10px' , textAlign:'center' , color:'#f5df4e'}}>
                        What I Do
                    </ListItemButton>
                    <ListItemButton href='#contact' sx={{display:'block' , padding:'10px', marginBottom:'10px' , textAlign:'center' ,color:'#f5df4e'}}>
                      Contact Me
                    </ListItemButton>
                </ListItem>
                <Box sx={{marginLeft:'17.5vh'}}>
                <LinkedInIcon sx={{ marginRight: '15px' }} />
                <GitHubIcon sx={{ marginRight: '15px' }} />
                <InstagramIcon sx={{ marginRight: '15px' }} />
                <MailOutlineIcon/>
                </Box>
            </Box>
        )
    }
    return(
        <Box>
         <Navbar >
         <Toolbar >
         <Logo href='#home'>
           PORTFOLIO
         </Logo>
         <Nav >
            <Li href='#home' label="Home"/>
            <Li href='#About' label="About me"/>
            <Li href='#project' label="My Work"/>
            <Li href='#what I do' label="What I Do"/>
            <Li href='#contact' label="Contact me"/>
         </Nav>
         
        <Number>
        
         <PhoneEnabledIcon  />
           <span style={{marginLeft:'1vh', position:'relative', bottom:'1vh', fontSize:'15px', fontWeight:'bold'  }}>(+91) 9352495750</span>
        
        </Number>
         
         <Menu onClick={()=>handleOnClick()}>
         <ListIcon sx={{fontSize:'2rem'}}/>
         </Menu>
         <Drawer anchor='top' sx={{}} open={open} setOpen={setOpen} onClose={()=>HandleClose()}>
          {list()}
         </Drawer>
         </Toolbar>

         </Navbar>
        </Box>
    )
}
export default Header;