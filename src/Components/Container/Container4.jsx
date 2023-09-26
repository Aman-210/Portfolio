import { Box, styled  , Typography ,Card, CardContent, CardMedia, Button , CardActionArea, CardActions} from "@mui/material"


const Section = styled(Box)(({theme})=>({
    width:'100%',
    height:'135vh',
    background:'#757575',
    [theme.breakpoints.down('md')]:{
       
       height:'100vh'
    },
    [theme.breakpoints.down('sm')]:{
       
        width:'100%',
        height:'315vh',
    }
}))
const Headline = styled(Box)(({theme})=>({
    color:'#343a40',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]:{
        marginLeft:'-5vh',
        
    }

}))
const UpperHeadline = styled(Typography)(({theme})=>({
    background:'#f5df4e',
    marginTop:'2rem',
    [theme.breakpoints.down('sm')]:{
       
    }
}))
const LowerHeadline = styled(Typography)(({theme})=>({
    color:'#fff',
    marginTop:'2vh',
   fontSize:'40px',
   fontWeight:'bold',
   [theme.breakpoints.down('sm')]:{
    fontSize:'20px'
   }
}))
const Project = styled(Box)(({theme})=>({
    marginTop:'5vh',
    display:'flex',
   marginLeft:"10vh",
    gap:'17vh',

   [theme.breakpoints.down('md')]:{
    gap:'8vh',
    
   
   },
   [theme.breakpoints.down('sm')]:{
   display:'block',
   marginTop:'1vh',
   marginLeft:'0vh'
   }
}))
const Project4_5 = styled(Box)(({theme})=>({
    display:"flex",
   marginLeft:"40vh",
   gap:"20vh",
   marginTop:"3vh",

   [theme.breakpoints.down('md')]:{
    marginTop:'4vh'
   },
   [theme.breakpoints.down('sm')]:{
   display:'block',
   marginLeft:'0.1vh',
   }
}))
const Cards = styled(Card)(({theme})=>({
   

   [theme.breakpoints.down('sm')]:{
   marginLeft:'3.5vh',
   marginTop:'2vh',
   
   }
}))

const Container4 =()=>{

    return(
   <Section id="project">
      <Headline>
            <UpperHeadline>Portfolio</UpperHeadline>
            <LowerHeadline>Some of my recent work</LowerHeadline>
        </Headline>
        <Project>
            {/* Project 1 */}
        <Cards sx={{ width: 345 , background:'#f5df4e' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://knownpost.com/wp-content/uploads/2022/05/updateapps-header-750x400-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'#343a40'}>
          Contact-Management-App
          </Typography>
          <Typography variant="body2" color={'#343a40'}>
          This is Redux+React+API integrated project.There is covid traker also present in it so you can manage your contacts accordingly. Also you can check the reports of covid world-wide through dashboard and Maps
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{background:'#343a40'}}>
        <Button size="small" sx={{color:'#fff'}}   href="https://aman-210.github.io/Contact-Management-App/">
          Live Preview
         
        </Button>
        <Button size="small" sx={{color:'#fff' , }} href="https://github.com/Aman-210/Contact-Management-App">
         Code
        </Button>
      </CardActions>
    </Cards>
    {/* Project2 */}
        <Cards sx={{ maxWidth: 345 ,background:'#f5df4e'  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://www.mobygames.com/images/covers/l/329256-pokemon-duel-ipad-front-cover.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'#343a40'}  >
            Pokedex-App
          </Typography>
          <Typography variant="body2" color={'#343a40'}>
          A feature-rich React app with a PokeAPI integration, offering a vast collection of hundreds of Pokémon. Explore individual Pokémon details, add them to your favorites, and easily remove them. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{background:'#343a40'}}>
      <Button size="small" sx={{color:'#fff'}} href="https://aman-210.github.io/Assignment/">
          Live Preview
        </Button>
        <Button size="small" sx={{color:'#fff' , }} href="https://github.com/Aman-210/Assignment">
         Code 
        </Button>
      </CardActions>
    </Cards>
    {/* Project3 */}
    <Cards sx={{ width: 345 , background:'#f5df4e' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://images.pexels.com/photos/7262405/pexels-photo-7262405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ttps://thumbs.dreamstime.com/b/coffee-shop-logo-hang-red-brick-wall-144981783.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'#343a40'}>
          Coffee.Shop
          </Typography>
          <Typography variant="body2" color={'#343a40'}>
          a dynamic e-commerce project using React.js and Material-UI.It features a user-friendly interface with functionalities like product browsing,account authentication, cart management, and a visually appealing design.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{background:'#343a40'}}>
        <Button size="small" sx={{color:'#fff'}}   href="https://coffee-shop-aman-210.netlify.app/">
          Live Preview
         
        </Button>
        <Button size="small" sx={{color:'#fff' , }} href="https://github.com/Aman-210/Coffee-Shop">
         Code
        </Button>
      </CardActions>
    </Cards>
        </Project>
        <Project4_5>
            {/* Project4 */}
            <Cards sx={{ maxWidth: 345 ,background:'#f5df4e'  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://www.investopedia.com/thmb/n_puoJ_uYi2Uf-mminThTUFocVw=/2409x1245/filters:fill(auto,1)/GettyImages-497058936-9b09e74b98a74f63a6d22664ba35f3ea.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'#343a40'}  >
            Expanse Tracker
          </Typography>
          <Typography variant="body2" color={'#343a40'}>
            build this app with the react.js .By creating this my logic skill enhanced so much and by the end of it I learned how to play with hooks and props . This project help me a lot in order to understand React.js and its use.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{background:'#343a40'}}>
      <Button size="small" sx={{color:'#fff'}} href="https://aman-210.github.io/Expanse-tracker/">
          Live Preview
        </Button>
        <Button size="small" sx={{color:'#fff' , }} href="https://github.com/Aman-210/Expanse-tracker">
         Code
        </Button>
      </CardActions>
    </Cards>
            {/* Project3 */}
            <Cards sx={{ width: 345 , background:'#f5df4e' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://images.pexels.com/photos/15683314/pexels-photo-15683314/free-photo-of-city-street-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'#343a40'}>
          Weather-App
          </Typography>
          <Typography variant="body2" color={'#343a40'}>
          This is an  API based  project build with  React.js and Material-UI that allows users to view  weather conditions of differnt places . It integrates with Open-Weather API to fetch weather data from different locations.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{background:'#343a40'}}>
        <Button size="small" sx={{color:'#fff'}}   href="https://aman-210.github.io/Weather-app/">
          Live Preview
         
        </Button>
        <Button size="small" sx={{color:'#fff' , }} href="https://github.com/Aman-210/Weather-app">
         Code
        </Button>
      </CardActions>
    </Cards>
        </Project4_5>
   </Section>
    )
}
export default Container4;