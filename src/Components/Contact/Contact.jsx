import { Box  , styled, Typography , TextField , Button, } from "@mui/material"

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// styling
const Section = styled(Box)(({theme})=>({
    width:'100%',
    height:'100vh',
    background:'#f5df4e',
    display:'flex',
    flexDirection:'column',
   
    alignItem: 'center',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]:{
        marginTop:"",
        width:'100%',
        height:'170vh',
    }
}))
const Content = styled(Box)(({theme})=>({
   display:'flex',
   justifyContent:'center',
   gap:'40vh',
   marginTop:'20vh',
   color:'#343a40',

    [theme.breakpoints.down('md')]:{
      
       gap:'2vh' 
    },
    [theme.breakpoints.down('sm')]:{
       marginRight:'auto',
       display:'block',
       gap:'0' 
    }
}))
const Side1 = styled(Box)(({theme})=>({
    
    [theme.breakpoints.down('sm')]:{
        marginRight:'auto',
        '& > h1 ':{
         
        },
        
    }
}))
const Side2 = styled(Box)(({theme})=>({
   
    [theme.breakpoints.down('sm')]:{
        marginRight:'auto',
        
        }
    }))

        
   

const Buttons = styled(Button)(({theme})=>({
    marginTop:'16vh',
    width:'20vh',
     background:'#343a40',
    color:'#fff',
    padding:'2vh',
    ":hover":{
     background:'rgba(0, 0, 0, 0.5)'
    },
    [theme.breakpoints.down('sm')]:{
         borderRadius:'28px',

    }
    
 }))

const Contact = ()=>{
    return(
    <Section id="contact">
        <Content>
            <Side1>
                <Typography>
                  <h1>  Let's get in touch</h1>
                </Typography>
                <Typography>
                    <p>I enjoy discussing new projects and design challenges.<br/> Please share as much info, as possible so we can get <br/>the most out of our first catch-up.</p>
                </Typography>
                <Typography><h2>Living in:</h2></Typography>
                <Typography><p>Kota , Rajasthan</p></Typography>
                <Typography><h2>Call:</h2></Typography>
                <Typography><p>(+91)9352495750</p></Typography>
                <Typography >
                    <a href="https://www.linkedin.com/in/aman-sharma-6443171b2/">
                <LinkedInIcon   sx={{cursor:'pointer' , 
                             ":hover":{
                                color:'#3498db'
                               },
                            }} /></a>
                        <a href="https://github.com/Aman-210">  
                <GitHubIcon  href='' sx={{marginLeft:'2vh' , cursor:'pointer',
                               ":hover":{
                                color:'#bb86fc'
                               },
                             }} /></a>  
                             <a href="https://www.instagram.com/aman_sharma_21_05/">
                <InstagramIcon  href='' sx={{marginLeft:'2vh' , cursor:'pointer',
                             ":hover":{
                                color:'#ff2d55'
                               },
                           }} /></a>
                           <a href="">
                <MailOutlineIcon  href="mailto:aman789bhutiya@gmail.com" sx={{marginLeft:'2vh' , cursor:'pointer',
                                  ":hover":{
                                    color:'#ff2d55'
                                   },
                                }}/></a>
                </Typography>

            </Side1>
            <Side2>
            <Typography><h1>Estimate your next Project</h1></Typography>
            <Typography><h4>What is your Name:</h4></Typography>
            <TextField id="standard-basic"  variant="standard" sx={{ width:'50vh', }} />
            <Typography><h4>Your E-mail Address:</h4></Typography>
            <TextField id="standard-basic"  variant="standard" sx={{width:'50vh', }} />
            <Typography><h4>How Can I Help you:</h4></Typography>
            <TextField id="standard-basic"  variant="standard"  sx={{width:'50vh', marginTop:'5vh'}}/>
            <Buttons >Send  <ArrowForwardIcon/></Buttons>
            </Side2>
        </Content>
    </Section>
    )
}
export default Contact