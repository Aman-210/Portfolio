import { Box, styled, Typography } from "@mui/material"


const Section= styled(Box)(({theme})=>({
 width:'100%',
 height:'90vh',
 [theme.breakpoints.down('sm')]:{
  
    height:'120vh',
    width:'100%',
}
}))

const Headline = styled(Box)(({theme})=>({
    color:'#343a40',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop:'10vh',
    [theme.breakpoints.down('sm')]:{
        marginLeft:'-3vh'
    }

}))
const UpperHeadline = styled(Typography)(({theme})=>({
    background:'#f5df4e'

}))
const LowerHeadline = styled(Typography)(({theme})=>({
    marginTop:'2vh',
   fontSize:'40px',
   fontWeight:'bold',
   [theme.breakpoints.down('sm')]:{
    fontSize:'30px'
   }

}))
const About = styled(Box)(({theme})=>({
    color:'#343a40',
    marginLeft:'5rem',
    marginTop:'3rem',
    [theme.breakpoints.down('sm')]:{
        marginLeft:'0'

    }

}))
const Intro = styled(Typography)(({theme})=>({
    marginTop:'2vh',
    
    fontSize:'30px',
    '& > span ':{
        color:'black' , fontSize:'40px', fontWeight:'bold', borderBottom:' solid #f5df4e' ,
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'20px',
        textAlign:'center',
        '& > span ':{
            color:'black' , fontSize:'35px', fontWeight:'bold', borderBottom:' solid #f5df4e' ,
        },
    }

}))
const Summary = styled(Typography)(({theme})=>({
    marginTop:'2vh',
   fontSize:'20px',
   [theme.breakpoints.down('sm')]:{
        fontSize:'15px'
   }
  
}))
const Experience = styled(Box)(({theme})=>({
   marginLeft:'70rem',
   marginTop:'-13rem',
   [theme.breakpoints.down('sm')]:{
       marginLeft:'0',
       display:'block',
       textAlign:'center',
       marginTop:'5vh',
       
       
   }
  
}))
const Background = styled(Typography)(({theme})=>({
   width:'15vh',
   height:'15vh',
   borderRadius:'10vh',
   background:'#f5df4e',
   [theme.breakpoints.down('sm')]:{
    display:'block',
    marginLeft:'auto',
    marginRight:'auto'
    
   }



  
}))
const Text = styled(Typography)(({theme})=>({
   marginTop:'2vh',
   marginLeft:'-6vh',
  fontSize:'20px',
  fontWeight:'bold',
  [theme.breakpoints.down('sm')]:{
       
  }
}))
const Detail = styled(Box)(({theme})=>({
  marginTop:'25vh',
  display:'flex',
  justifyContent:'center',
  gap:'21.3rem',
  [theme.breakpoints.down('sm')]:{
    display:'block',
    marginTop:'10vh',
    
   
  }


}))
const SubDetail = styled(Box)(({theme})=>({
  marginTop:'2vh',
  display:'flex',
  justifyContent:'center',
  gap:'14.9rem',
  [theme.breakpoints.down('sm')]:{
    gap:'0',
    display:'block',
   
    marginLeft:'20vh',
    marginTop:'-13vh',
   
    fontSize:'10px'


    
  }
  
}))

const Container1 = ()=>{
 return(
    <Section>
        <Headline>
            <UpperHeadline>About me</UpperHeadline>
            <LowerHeadline>Know me More</LowerHeadline>
        </Headline>
        <About>
            <Intro>
                Hi, I'm <span >Aman Sharma</span>
            </Intro>
            <Summary>
                "I'm a designer & developer with a passion for web design. I enjoy developing simple, clean<br/> and slick websites that provide real value to the end user.As a skilled and passionate<br/> React.js developer, I bring a wealth of expertise and experience in building dynamic<br/> and responsive web applications. With a strong foundation in JavaScript and a deep <br/>understanding of the React.js library, I excel at crafting intuitive user interfaces<br/> that enhance the user experience."
            </Summary>
            <Experience>
                <Background>
                    <Typography sx={{  marginLeft:'-1vh ',fontSize:'80px', fontWeight:'bold'}}>1.5</Typography>
                </Background>
                <Text>
                Years of Experience
                </Text>
            </Experience>

        </About>
        <Detail>
            <Typography sx={{color:'#6c757d', }}>NAME:</Typography>
            <Typography sx={{color:'#6c757d', }}>E-MAIL:</Typography>
            <Typography sx={{color:'#6c757d', }}>DATE OF BIRTH</Typography>
            <Typography sx={{color:'#6c757d', }}>FROM:</Typography>
        </Detail>
        <SubDetail>
            <Typography sx={{fontWeight:'bold' ,}}>AMAN SHARMA</Typography>
            <Typography sx={{fontWeight:'bold' ,}}>aman789bhutiya@gamil.com</Typography>
            <Typography sx={{fontWeight:'bold' ,}}>21 MAY 2001</Typography>
            <Typography sx={{fontWeight:'bold' ,}}>KOTA, RAJASTHAN</Typography>
            
        </SubDetail>
    </Section>
 )
}
export default Container1;