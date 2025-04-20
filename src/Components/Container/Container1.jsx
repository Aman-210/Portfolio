import { Box, Grid, Typography, styled } from "@mui/material";
import { ReactTyped } from "react-typed";

const Section = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "90vh",
  [theme.breakpoints.down("sm")]: {
    minHeight: "120vh",
  },
}));

const UpperHeadline = styled(Typography)({
  background: "#f5df4e",
});

const LowerHeadline = styled(Typography)(({ theme }) => ({
  marginTop: "2vh",
  fontSize: "40px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

const Intro = styled(Typography)(({ theme }) => ({
  marginTop: "2vh",
  fontSize: "30px",
  "& > span": {
    color: "black",
    fontSize: "40px",
    fontWeight: "bold",
    // borderBottom: "solid #f5df4e",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    textAlign: "center",
    "& > span": {
      fontSize: "35px",
    },
  },
}));

const Summary = styled(Typography)(({ theme }) => ({
  marginTop: "2vh",
  fontSize: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    textAlign: "center",
  },
}));

const Background = styled(Typography)(({ theme }) => ({
  width: "15vh",
  height: "15vh",
  borderRadius: "10vh",
  background: "#f5df4e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "80px",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  marginTop: "2vh",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
}));

const Container1 = () => {
  return (
    <Section id="About">
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ mt: 10 }}
      >
        <Grid item>
          <UpperHeadline>About me</UpperHeadline>
        </Grid>
        <Grid item>
          <LowerHeadline>Know me More</LowerHeadline>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4, px: 4 }} alignItems="center">
        <Grid item xs={12} md={8}>
          <Intro>
            Hi, I'm {" "} 
            <span>
            <ReactTyped 
          strings={["Aman Sharma"]}
          typeSpeed={80}  // typing speed in ms
          backSpeed={50}   // backspacing speed in ms
          backDelay={1500} // delay before backspacing starts
          startDelay={500} // delay before typing starts
          loop={true}      // loop the typing effect
        />
              
              </span>
          </Intro>
          <Summary>
            "I am a Software Developer with a passion for building scalable{" "}
            <br /> and high-performance applications. Skilled in full-cycle
            development,
            <br /> API integration, and state management, I have worked on
            real-time chat,
            <br />
            AI-powered features, Stripe payments, project management tools,
            <br /> and data visualization. With strong problem-solving and
            collaboration skills,
            <br /> I thrive on tackling challenges and delivering impactful
            solutions"
          </Summary>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "10vh", // Smaller width for mobile
                sm: "12vh",
                md: "13vh",
                lg: "15vh", // Full size from large screens and up
              },
              height: {
                xs: "10vh",
                sm: "12vh",
                md: "13vh",
                lg: "15vh",
              },
              borderRadius: "50%",
              background: "#f5df4e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: {
                xs: "40px",
                sm: "50px",
                md: "65px",
                lg: "80px",
              },
              fontWeight: "bold",
              mx: "auto", // centers horizontally
              my: 2,
            }}
          >
            1.5
          </Box>

          <Text>Years of Experience</Text>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ mt: 10, px: 0 }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={3}>
          <Typography sx={{ color: "#6c757d", textAlign: "center" }}>
            NAME:
          </Typography>
          <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
            AMAN SHARMA
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography sx={{ color: "#6c757d", textAlign: "center" }}>
            E-MAIL:
          </Typography>
          <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
            iamansharma1309@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography sx={{ color: "#6c757d", textAlign: "center" }}>
            DATE OF BIRTH
          </Typography>
          <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
            21 MAY 2001
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography sx={{ color: "#6c757d", textAlign: "center" }}>
            FROM:
          </Typography>
          <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
            KOTA, RAJASTHAN
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Container1;
