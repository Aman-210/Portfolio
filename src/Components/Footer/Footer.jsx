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
       marginTop:'7vh',
       marginLeft:'3vh',
       gap:'0',
       
    }
}))
const Lower  = styled(Typography)(({theme})=>({
   
    [theme.breakpoints.down('sm')]:{
       marginTop:'5vh',
       marginLeft:'5vh'
       
    }
}))
const Upper  = styled(Typography)(({theme})=>({
   
    [theme.breakpoints.down('sm')]:{
      
       
    }
}))
const Footer = ()=>{
 return(
 <Section>
   <Content>
    <Lower sx={{display:'flex' , gap:'1vh'}}>
       Designed by <span style={{color:'#f5df4e' ,  fontWeight:'bold'}}>Aman Sharma</span> with
      <Typography><FavoriteIcon sx={{color:'red'}}/> </Typography> 
    </Lower>
    <Upper>
        Copyright © 2023 <span style={{color:'#f5df4e' , borderBottom:'1px solid #f5df4e' , fontWeight:'bold'}}>Aman.</span> All Rights Reserved.
    </Upper>
   </Content>
 </Section>
 )
}
export default  Footer;