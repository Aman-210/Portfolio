
import { Box,  Button,  styled, Typography } from "@mui/material";
import photo from './photo.png';
const Section = styled(Box)(({theme})=>({
    backgroundColor:'#f5df4e' ,
     width:"100%",
     height:'100vh',
     display:'flex',
     flexDirection:'column',
    
     alignItem: 'center',
     boxSizing: 'border-box',

   
     [theme.breakpoints.up('sm')]:{
     
       },





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
  
   
     
     
      [theme.breakpoints.down('md')]:{
        backgroundColor:'#fff' ,
        width:'25vh',
        height:'25vh',
        borderRadius:'50vh',
        marginTop:'8rem',
        
        marginRight:'25vh',
        
      },
    
 
    [theme.breakpoints.down('sm')]:{
     width:'30vh',
     height:'30vh',
     marginTop:'5rem',
     marginRight:'14vh',
    },

}))
const Img = styled('img')(({theme})=>({
    width:'54vh' ,
    height:'54vh' ,
    padding:'2.8vh',
    borderRadius:'30vh',
   
  [theme.breakpoints.down('md')]:{
    width:'18vh' ,
    height:'18vh' ,
    padding:'1.2vh',
    },
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
    [theme.breakpoints.down('md')]:{
        marginTop:'5vh',
        marginLeft:'3.3rem',
        display:'block',
       
    },
    [theme.breakpoints.down('sm')]:{
        marginTop:'5vh',
        marginLeft:'3.3rem',
        display:'block',
       
    },

}))
const UpperHeading = styled(Typography)(({theme})=>({
   fontSize:'5vh',
   
   [theme.breakpoints.down('md')]:{
    fontSize:'4vh',
    marginLeft:'4rem',
    marginTop:'2rem'
   }   ,
   [theme.breakpoints.down('sm')]:{
    fontSize:'2.5vh',
    marginLeft:'3rem',
    marginTop:'2rem'
   }   
 
}))
const MiddleHeading = styled(Typography)(({theme})=>({
   fontSize:'10vh',
   fontWeight:'bold',
   
   [theme.breakpoints.down('md')]:{
    fontSize:'6.5vh',
    marginLeft:'-0.9rem',
    
   },
   [theme.breakpoints.down('sm')]:{
    fontSize:'4.5vh',
    marginLeft:'-0.9rem',
    
   },
}))
const LowerHeading = styled(Typography)(({theme})=>({
   fontSize:'5vh',
   
   [theme.breakpoints.down('md')]:{
    fontSize:'4vh',
    marginLeft:'3rem',
    marginTop:'.5rem'
   },
   [theme.breakpoints.down('sm')]:{
    fontSize:'3vh',
    marginLeft:'1rem',
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
   [theme.breakpoints.down('md')]:{
        marginLeft:'6rem'
   },
   [theme.breakpoints.down('sm')]:{
        marginLeft:'0rem'
   }
   
}))



const Header2 = ()=>{
   
      
    return(
    <Section id="home" >
     
     <Image>
        <Img src={photo} alt="image" />
        
      
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
      <Buttons href="#project">View My Work</Buttons>
      <a href="./Resume.pdf" download='Resume.pdf' ><Buttons  style={{position:'relative', left:'2vh'}}>Download CV</Buttons></a>
     </Detail>
     
    </Section>
    )
}
export default Header2;