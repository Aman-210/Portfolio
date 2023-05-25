import { useState, useEffect } from "react";
import { Box,  Button,  styled, Typography } from "@mui/material";

const Section = styled(Box)(({theme})=>({
    backgroundColor:'#f5df4e' ,
     width:"100%",
     height:'100vh',
     display:'flex',
     flexDirection:'column',
    
     alignItem: 'center',
     boxSizing: 'border-box',
     [theme.breakpoints.down('sm')]:{
      width:"100%",
      height:'105vh',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
       },

}))
const Image = styled(Box)(({theme})=>({
    backgroundColor:'#fff' ,
    width:'60vh',
    height:'60vh',
   
    borderRadius:'30vh',
    marginTop:'8rem',
    marginLeft:'auto',
    marginRight:'15vh',
    [theme.breakpoints.down('sm')]:{
     width:'30vh',
     height:'30vh',
     marginTop:'5rem',
    //  marginRight:'18vh',
    },

}))
const Img = styled('img')(({theme})=>({
    width:'54vh' ,
    height:'54vh' ,
    padding:'2.8vh',
    borderRadius:'30vh',
  [theme.breakpoints.down('sm')]:{
    width:'28vh' ,
    height:'28vh' ,
    padding:'1.2vh',
    },
    

}))
const Detail = styled(Box)(({theme})=>({
   color:'#343a40',
    marginLeft:'8rem',
    marginTop:'-45vh',
    [theme.breakpoints.down('sm')]:{
        marginTop:'5vh',
        marginLeft:'3.3rem',
        display:'block',
       
    },

}))
const UpperHeading = styled(Typography)(({theme})=>({
   fontSize:'5vh',
   
   [theme.breakpoints.down('sm')]:{
    fontSize:'2.5vh',
    marginLeft:'3rem',
    marginTop:'2rem'
   }   
 
}))
const MiddleHeading = styled(Typography)(({theme})=>({
   fontSize:'10vh',
   fontWeight:'bold',
   
   [theme.breakpoints.down('sm')]:{
    fontSize:'4.5vh',
    marginLeft:'.1rem',
    
   }
}))
const LowerHeading = styled(Typography)(({theme})=>({
   fontSize:'5vh',
   
   [theme.breakpoints.down('sm')]:{
    fontSize:'3vh',
    marginLeft:'2rem',
    marginTop:'.5rem'
   }
}))
const Buttons = styled(Button)(({theme})=>({
   marginTop:'4vh',
    background:'#343a40',
   color:'#fff',
   padding:'2vh',
   ":hover":{
    background:'rgba(0, 0, 0, 0.5)'
   },
   [theme.breakpoints.down('sm')]:{
        
   }
   
}))



const Header2 = ()=>{
    
      
    return(
    <Section >
     
     <Image>
        <Img src="/photo.png" style={{}} alt="" />
      
    </Image>
     <Detail>
      <UpperHeading>
        HI, I'M A FREELANCER
      </UpperHeading>
      <MiddleHeading>
        React.Js Developer
      </MiddleHeading>
      <LowerHeading>
        based in Kota, Rajasthan
      </LowerHeading>
      <Buttons>View My Work</Buttons>
      <Buttons style={{position:'relative', left:'2vh'}}>Download CV</Buttons>
     </Detail>
     
    </Section>
    )
}
export default Header2;