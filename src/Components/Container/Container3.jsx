import { Box, styled , Typography , Divider ,  Button} from "@mui/material";

const Section= styled(Box)(({theme})=>({
    // background:'black',
    width:'100%',
    
    [theme.breakpoints.down('sm')]:{
        marginLeft:'0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
       
        flex:'block'
     }

}))
const UpperHeadline = styled(Typography)(({theme})=>({
    background:'#f5df4e',
    [theme.breakpoints.down('sm')]:{
        
     }

}))
const LowerHeadline = styled(Typography)(({theme})=>({
    marginTop:'2vh',
   fontSize:'40px',
   fontWeight:'bold',
   [theme.breakpoints.down('sm')]:{
    fontSize:'20px'
 }
}))
const Section2= styled(Box)(({theme})=>({
    display: "flex",
    marginLeft:'18vh',
    marginTop:'10vh',
    gap:'10vh',
    [theme.breakpoints.down('md')]:{
        marginLeft:'1vh',
       
     },
    [theme.breakpoints.down('sm')]:{
        marginLeft:'0vh',
        display:'block'
     }

}))
const Heading = styled(Typography)(({theme})=>({
    fontSize:'30px',
    fontWeight:'bold',
    [theme.breakpoints.down('md')]:{
      
     fontSize:'27px'
       
     },
    [theme.breakpoints.down('sm')]:{
      

        marginTop:'3vh'
     }
 }))
const Box1 = styled(Box)(({theme})=>({
    marginTop:'2vh',
    borderLeft:'2px solid #f5df4e',
    [theme.breakpoints.down('md')]:{
    marginLeft:'-0.2vh'
     }
}))
const Box2 = styled(Box)(({theme})=>({
  marginLeft:'2vh',
  [theme.breakpoints.down('sm')]:{
    marginLeft:'0',
    marginRight:'auto'
 }
}))
const Degree = styled(Typography)(({theme})=>({
    marginTop:'2vh',
   fontSize:'20px',
   fontWeight:'bold',
   [theme.breakpoints.down('sm')]:{
   
 }
}))
const College= styled(Typography)(({theme})=>({
    marginTop:'2vh',
   fontSize:'15px',
   fontWeight:'bold',
   [theme.breakpoints.down('sm')]:{
    
 }
}))
const Description = styled(Typography)(({theme})=>({
    marginTop:'2vh',
    [theme.breakpoints.down('sm')]:{
        
     }
}))
const Section3 = styled(Box)(({theme})=>({
    marginTop:'5vh',
    marginLeft:'17vh',
    [theme.breakpoints.down('md')]:{
        marginLeft:'2vh',
       
     },
    [theme.breakpoints.down('sm')]:{
        marginLeft:'0',
        marginRight:'auto'
     }
}))
const Skill = styled(Typography)(({theme})=>({
    fontSize:'30px',
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]:{
        marginLeft:'0vh'
     }
}))
const Section4 = styled(Box)(({theme})=>({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '50vh',
  [theme.breakpoints.down('md')]:{
    gap:'2vh'
  
 },
  [theme.breakpoints.down('sm')]:{
    
    display:'block'
 },
 
 
}))
const Skills = styled(Typography)(({theme})=>({
  fontSize:'15px',
  fontWeight:'bold',
  marginTop:'3vh',
  [theme.breakpoints.down('sm')]:{
  marginLeft:'0vh'
 }

}))
const Border1 = styled(Typography)(({theme})=>({
  background:'#f5df4e',
  height:'8px',
  borderRadius:'10px',
  marginTop:'3vh',
  width:'44vh',
  [theme.breakpoints.down('sm')]:{
    width:'29vh',
 }

}))
const Border2 = styled(Typography)(({theme})=>({
  background:'#f5df4e',
  height:'8px',
  borderRadius:'10px',
  marginTop:'3vh',
  width:'60vh',
  [theme.breakpoints.down('sm')]:{
    width:'45vh',
 }

}))
const Border3 = styled(Typography)(({theme})=>({
  background:'#f5df4e',
  height:'8px',
  borderRadius:'10px',
  marginTop:'3vh',
  width:'50vh',
  [theme.breakpoints.down('sm')]:{
    width:'35vh',
 }

}))
const Border4 = styled(Typography)(({theme})=>({
  background:'#f5df4e',
  height:'8px',
  borderRadius:'10px',
  marginTop:'3vh',
  width:'60vh',
  [theme.breakpoints.down('sm')]:{
    width:'45vh',
 }

}))
const Border5 = styled(Typography)(({theme})=>({
  background:'#f5df4e',
  height:'8px',
  borderRadius:'10px',
  marginTop:'3vh',
  width:'44vh',
  [theme.breakpoints.down('sm')]:{
    width:'29vh',
 }

}))
const Border6 = styled(Typography)(({theme})=>({
  background:'#f5df4e',
  height:'8px',
  borderRadius:'10px',
  marginTop:'3vh',
  width:'54vh',
  [theme.breakpoints.down('sm')]:{
    width:'39vh',
 }

}))
const Buttons = styled(Button)(({theme})=>({
    marginTop:'8vh',
     background:'#343a40',
    color:'#fff',
    padding:'2vh',
    display:'block',
    marginLeft:'45%',
    width:'20vh',
    ":hover":{
     background:'rgba(0, 0, 0, 0.5)'
    },
    [theme.breakpoints.down('sm')]:{
         marginLeft:'-5vh'
    }
    
 }))

const Container3 = ()=>{
    return(
    <Section >
        <Headline>
            <UpperHeadline>Resume</UpperHeadline>
            <LowerHeadline>A Summary of my Resume</LowerHeadline>
        </Headline>
        <Section2>
        <Box>
            <Heading>
                My Projects
            </Heading>
            <Box1 >
                <Box2 >
               <Degree>E-Commerce</Degree>
               <College>Coffee Shop</College>
               <Description>
              "I have developed a dynamic e-commerce project using React.js and Material-UI.<br/> It features a user-friendly interface with functionalities like product browsing,<br/> cart management, and a visually appealing design. The project incorporates <br/>responsive design, product filtering, sorting functionality. It also includes user<br/> authentication, account management features for a secure and personalized experience."</Description>
               </Box2>
               <Divider variant="middle" sx={{marginTop:'2vh'}} />
                <Box2 >
               <Degree>PortFolio</Degree>
               <College>Personal Portfolio</College>
               <Description>  I have created an impressive portfolio website using React.js and Material-UI.<br/>  The responsive layout ensures compatibility across devices.<br/> The portfolio includes sections for background, experience, and projects, presented with<br/> captivating visuals and interactive elements. It features smooth navigation<br/> and a contact form for easy communication. The portfolio effectively represents my skills and capabilities.</Description>
               </Box2>
               
               
            </Box1>
            
        </Box>
        <Box>
            <Heading>
                My Education
            </Heading>
            <Box1 >
                <Box2 >
               <Degree>Bachelor in Biology</Degree>
               <College>University of Kota / 2019-2022</College>
               <Description>  Completed with 70%</Description>
               </Box2>
               <Divider variant="middle" sx={{marginTop:'2vh',}} />
                <Box2 >
               <Degree>XII<sup>th</sup> Class</Degree>
               <College>Ideal Public Senior School / 2018-2019</College>
               <Description>  Completed with 82%</Description>
               </Box2>
               <Divider variant="middle" sx={{marginTop:'2vh'}} />
                <Box2 >
               <Degree>X<sup>th</sup> Class</Degree>
               <College>Ideal Public Senior School / 2016-2017</College>
               <Description> Completed with 90.33%</Description>
               </Box2>
            </Box1>
            
        </Box>
        
        </Section2>
        <Section3>
            <Skill>My Skills</Skill>
           <Section4>
            <Box>
                <Skills>Web Design(65%)</Skills>
                <Border1></Border1>
                <Skills>HTML/CSS (95%)</Skills>
                <Border2 ></Border2>
                <Skills>JavaScript(70%)</Skills>
                <Border3 ></Border3>
            </Box>
            <Box >
                <Skills>Material UI (95%)</Skills>
                <Border4 ></Border4>
                <Skills>JQuery (65%)</Skills>
                <Border5 ></Border5>
                <Skills>React.JS(75%)</Skills>
                <Border6></Border6>
            </Box>
            </Section4>
        </Section3>
        
          <Buttons href="/Resume.pdf" download='Resume.pdf' >Download CV</Buttons>
        
    </Section>
    )
}
export default Container3;