import { Box, styled, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
const Section = styled(Box)(({theme})=>({
    width:'100%',
    height:'20vh',
    background:'#111418',
    display:'flex',
    flexDirection:'column',
    alignItem: 'center',
    boxSizing: 'border-box',
}))


const Content  = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    color:'#fff',
    gap:'100vh',
    marginTop:'10vh',
    [theme.breakpoints.down('sm')]:{
       display:'block',
       marginTop:'3vh',
       gap:'0',
       
    }
}))
const Footer = ()=>{
 return(
 <Section>
   <Content>
    <Typography>
        Copyright © 2023 <span style={{color:'#f5df4e' , borderBottom:'1px solid #f5df4e' , fontWeight:'bold'}}>Aman.</span> All Rights Reserved.
    </Typography>
    <Typography sx={{display:'flex' , gap:'1vh'}}>
       Designed by <span style={{color:'#f5df4e' ,  fontWeight:'bold'}}>Aman Sharma</span> with
      <Typography><FavoriteIcon sx={{color:'red'}}/> </Typography> 
    </Typography>
   </Content>
 </Section>
 )
}
export default  Footer;