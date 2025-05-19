import {
  Box,
  Button,
  Grid,
  styled,
  Typography,
  Container,
} from "@mui/material";
import { ReactTyped } from "react-typed";
// import resumePDF from '../../assets/files/Aman_Sharma_CV.pdf';
import { getImages } from "../imageHelper";

const Image = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  height: "auto",
  aspectRatio: "1/1",
  borderRadius: "50%",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    maxWidth: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "250px",
  },
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
}));

const Header2 = () => {
  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "#f5df4e",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 10, lg: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                color: "#343a40",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                  fontWeight: 400,
                  mb: 2,
                }}
              >
                HI, I'M A
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                <ReactTyped
                  strings={["Software Developer"]}
                  typeSpeed={80} // typing speed in ms
                  backSpeed={50} // backspacing speed in ms
                  backDelay={1500} // delay before backspacing starts
                  startDelay={500} // delay before typing starts
                  loop={true} // loop the typing effect
                />
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                  mb: 4,
                }}
              >
                based in Jaipur, Rajasthan
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  href="#project"
                  variant="contained"
                  sx={{
                    backgroundColor: "#343a40",
                    color: "#fff",
                    padding: { md: "12px 24px", xs: "12px 8px" },
                    "&:hover": {
                      backgroundColor: "rgba(52, 58, 64, 0.8)",
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  href="/Aman_Sharma_CV.pdf"
                  download="Aman_Sharma_Resume.pdf"
                  variant="contained"
                  
                  sx={{
                    backgroundColor: "#343a40",
                    color: "#fff",
                    padding: "12px 24px",
                    "&:hover": {
                      backgroundColor: "rgba(52, 58, 64, 0.8)",
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image>
              <Img src={getImages("photo.jpg")} alt="Profile" />
            </Image>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header2;
