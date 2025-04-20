import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
  } from "@mui/material";
  
  // Icons
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  
  const Contact = () => {
    return (
      <Box
        id="contact"
        sx={{
          width: "100%",
          minHeight: "60vh",
          background: "#f5df4e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 8, sm: 10, md: 12 },
        //   px: { xs: 2, sm: 4, md: 10 },
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          px={4}
        >
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#343a40"
              gutterBottom
            >
              Let's get in touch
            </Typography>
            <Typography
              variant="body1"
              color="#343a40"
              sx={{ mb: 3 }}
            >
              I enjoy discussing new projects and design challenges.
              <br />
              Please share as much info as possible so we can get
              <br />
              the most out of our first catch-up.
            </Typography>
            <Typography variant="h6" color="#343a40">
              Living in:
            </Typography>
            <Typography variant="body1" color="#343a40" mb={2}>
              Kota, Rajasthan
            </Typography>
            <Typography variant="h6" color="#343a40">
              Call:
            </Typography>
            <Typography variant="body1" color="#343a40" mb={2}>
              (+91) 9352495750
            </Typography>
  
            {/* Social Icons */}
            <Box sx={{ mt: 2 }}>
              <a href="https://www.linkedin.com/in/aman-sharma-6443171b2/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon
                  sx={{
                    cursor: "pointer",
                    color: "#343a40",
                    mr: 2,
                    "&:hover": { color: "#3498db" },
                  }}
                />
              </a>
              <a href="https://github.com/Aman-210" target="_blank" rel="noopener noreferrer">
                <GitHubIcon
                  sx={{
                    cursor: "pointer",
                    color: "#343a40",
                    mr: 2,
                    "&:hover": { color: "#bb86fc" },
                  }}
                />
              </a>
              <a href="https://www.instagram.com/aman_sharma_21_05/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon
                  sx={{
                    cursor: "pointer",
                    color: "#343a40",
                    mr: 2,
                    "&:hover": { color: "#ff2d55" },
                  }}
                />
              </a>
              <a href="mailto:aman789bhutiya@gmail.com">
                <MailOutlineIcon
                  sx={{
                    cursor: "pointer",
                    color: "#343a40",
                    "&:hover": { color: "#ff2d55" },
                  }}
                />
              </a>
            </Box>
          </Grid>
  
          {/* Right Side - Form */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#343a40"
              gutterBottom
            >
              Estimate your next project
            </Typography>
  
            <Typography
              variant="subtitle1"
              color="#343a40"
              sx={{ mt: 3 }}
            >
              What is your name:
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              required
              sx={{ maxWidth: "50vh" }}
            />
  
            <Typography
              variant="subtitle1"
              color="#343a40"
              sx={{ mt: 4 }}
            >
              Your email address:
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              required
              sx={{ maxWidth: "50vh" }}
            />
  
            <Typography
              variant="subtitle1"
              color="#343a40"
              sx={{ mt: 4 }}
            >
              How can I help you:
            </Typography>
            <TextField
              fullWidth
              variant="standard"
              multiline
              rows={4}
              sx={{ maxWidth: "50vh", mt: 1 }}
            />
  
            <Button
              variant="contained"
              sx={{
                mt: 5,
                background: "#343a40",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "28px",
                textTransform: "none",
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.7)",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Contact;
  