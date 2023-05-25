
import { Box , Typography , styled} from "@mui/material";
// Icons
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import PaletteIcon from '@mui/icons-material/Palette';
const Section = styled(Box)(({theme})=>({
    width:'100%',

    background:'#f5f5f5',
    [theme.breakpoints.down('sm')]:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
        // height:'120vh'
    }
}))
const Headline = styled(Box)(({theme})=>({
    color:'#343a40',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]:{
        marginLeft:'-3vh'
    }

}))
const UpperHeadline = styled(Typography)(({theme})=>({
    background:'#f5df4e',
    marginTop:'5rem',
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
const Content1 = styled(Box)(({theme})=>({
   display:'flex',
   justifyContent:'center',
   padding:'15vh',
   gap:'20vh',
   [theme.breakpoints.down('sm')]:{
      
    display:'block',
    
    padding:'0'
   }
}))
const Content2 = styled(Box)(({theme})=>({
   display:'flex',
   justifyContent:'center',
   marginLeft:'10vh',
   gap:'10vh',
   [theme.breakpoints.down('sm')]:{
    display:'block',
    marginLeft:'0'
   }
   
   
}))
const Skill = styled(Typography)(({theme})=>({
   marginLeft:'13vh',
   fontSize:'25px',
   fontWeight:'bold',
   [theme.breakpoints.down('sm')]:{
       marginLeft:'0',
       marginTop:'26vh',
       marginLeft:'-15vh'
     
       

   }
}))
const Description = styled(Typography)(({theme})=>({
    color:'#343a40',
    fontFamily:'serif',
    [theme.breakpoints.down('sm')]:{
       marginLeft:'0'
    }
   
}))
const Img  = styled('img')(({theme})=>({
  
   marginLeft:'15vh',
   [theme.breakpoints.down('sm')]:{
       marginLeft:'0',
       marginTop:'4vh',
       display:'flex',
     
   }
   
}))
const Box1= styled(Box)(({theme})=>({
   
    [theme.breakpoints.down('sm')]:{
       
        display:'flex',
        flexWrap:"Wrap",
        flexDirection:'coloumn',
        justifyContent:'center',
        alignItems:'center',
      
    }
   
}))
const Box2= styled(Box)(({theme})=>({
   
    [theme.breakpoints.down('sm')]:{
       
        display:'flex',
        flexWrap:"Wrap",
        flexDirection:'coloumn',
        justifyContent:'center',
        alignItems:'center',
      
    }
   
}))
// const  = styled()(({theme})=>({
  
   
// }))
// const  = styled()(({theme})=>({
 
   
   
// }))

const Container2 =()=>{
return(
<Section>
       <Headline>
            <UpperHeadline>What Do I do</UpperHeadline>
            <LowerHeadline>How Can I Help Your Organisation</LowerHeadline>
        </Headline>
        <Content1>
            <Box1>
                <Img src="https://clipground.com/images/react-logo-png-7.png" style={{width:'100px' , height:'100px'}} alt="" />
                <Skill>React.Js</Skill>
                <Description>
                "I possess a deep understanding of React.js, leveraging its powerful component-based architecture and state management to develop seamless and interactive user interfaces."
                </Description>
                </Box1>
            <Box1>
            <Img src="https://img.favpng.com/19/13/13/web-development-responsive-web-design-computer-icons-png-favpng-yTAE7h1QX1YQ1iVZ3TR72LTDy.jpg" style={{width:'100px' , height:'100px'}} alt="" />
                <Skill>Web Design</Skill>
                <Description sx={{marginLeft:'10vh'}}>
                   
              "I have a strong background in web design, combining creativity and technical skills to deliver visually stunning and user-friendly interfaces."
                 
                </Description>
            </Box1>
            <Box1>
            
            <Img src="https://i0.wp.com/www.paoloprovinciali.com/wp-content/uploads/2017/08/Community-Manager.jpg?fit=840%2C840" style={{width:'100px' , height:'100px' , borderRadius:'20vh', }} alt="" />
                  <Skill >Web Development</Skill>              
                <Description sx={{marginLeft:'10vh'}}>
                    
                "I am a highly skilled web developer proficient in various web development technologies. My strong problem-solving skills  enable me to deliver exceptional results."
                </Description>
            </Box1>
        
        </Content1>
        <Content2>
         <Box2>
         <Img src="https://www.shareicon.net/data/512x512/2016/07/06/106573_software_512x512.png" style={{width:'100px' , height:'100px' , borderRadius:'20vh'}} alt="" />
        <Skill>JavaScript</Skill> 
          <Description>
            
        "I am a JavaScript expert with a deep understanding <br/>of the language and its ecosystem. Proficient in both front-end<br/> and back-end development, I have a proven track record <br/>of building dynamic and interactive web applications."
           
          </Description>
          </Box2>
         <Box2>
         <Img src="https://marmelab.com/react-admin/assets/techs/material-ui.png" style={{width:'100px' , height:'100px' , borderRadius:'20vh'}} alt="" />
        <Skill>MATERIAL UI</Skill> 
          <Description>
          
       "I am a proficient front-end developer with expertise in<br/> Material-UI, a popular React UI component library. With<br/> a deep understanding of Material Design principles, I create<br/> visually appealing and intuitive user interfaces using pre-built <br/>components and custom styles."
          </Description>
          </Box2>
        </Content2>
</Section>
)
}
export default Container2;