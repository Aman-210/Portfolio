import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Tooltip,
} from "@mui/material";

const projects = [
  {
    title: "Contact-Management-App",
    img: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1745153994~exp=1745157594~hmac=180cbca232d32efe238ea8b93d255e195387db215d537b45b6b431c06b7f92e9&w=826",
    desc: "This is Redux+React+API integrated project. It includes a covid tracker so you can manage contacts accordingly. Also includes global covid reports via dashboard and maps.",
    live: "https://aman-210.github.io/Contact-Management-App/",
    code: "https://github.com/Aman-210/Contact-Management-App",
  },
  {
    title: "Pokedex-App",
    img: "https://www.mobygames.com/images/covers/l/329256-pokemon-duel-ipad-front-cover.jpg",
    desc: "A feature-rich React app with PokeAPI integration. Explore hundreds of Pokémon, view individual details, and manage favorites easily.",
    live: "https://aman-210.github.io/Assignment/",
    code: "https://github.com/Aman-210/Assignment",
  },
  {
    title: "Coffee.Shop",
    img: "https://images.pexels.com/photos/7262405/pexels-photo-7262405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A dynamic e-commerce project using React.js and Material-UI. Features product browsing, authentication, cart management, and clean UI.",
    live: "https://aman-210.github.io/Coffee-Shop/",
    code: "https://github.com/Aman-210/Coffee-Shop",
  },
  {
    title: "Expense Tracker",
    img: "https://www.investopedia.com/thmb/n_puoJ_uYi2Uf-mminThTUFocVw=/2409x1245/filters:fill(auto,1)/GettyImages-497058936-9b09e74b98a74f63a6d22664ba35f3ea.jpg",
    desc: "Built using React.js. Helped strengthen my logic and understanding of hooks, props, and reusable component patterns.",
    live: "https://aman-210.github.io/Expanse-tracker/",
    code: "https://github.com/Aman-210/Expanse-tracker",
  },
  {
    title: "Weather-App",
    img: "https://images.pexels.com/photos/15683314/pexels-photo-15683314/free-photo-of-city-street-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "React.js + MUI weather project using OpenWeather API to fetch and display weather conditions of various cities in real-time.",
    live: "https://aman-210.github.io/Weather-app/",
    code: "https://github.com/Aman-210/Weather-app",
  },
];

const Container4 = () => {
  return (
    <Box
      id="project"
      sx={{
        width: "100%",
        py: { xs: 6, sm: 8, md: 12 },
        // px: { xs: 2, sm: 4, md: 10 },
        backgroundColor: "#757575",
      }}
    >
      {/* Headline */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 4, sm: 6 },
        }}
      >
        <Typography
          sx={{
            background: "#f5df4e",
            display: "inline-block",
            px: 2,
            py: 1,
            fontWeight: 600,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Portfolio
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", sm: "2.5rem" },
            mt: 2,
          }}
        >
          Some of my personal work
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                background: "#f5df4e",
                maxHeight: 400,
                mx: "auto",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.img}
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#343a40"
                  >
                    {project.title}
                  </Typography>
                  <Tooltip
                    title={project.desc}
                    arrow
                    placement="top"
                    enterTouchDelay={0}
                  >
                    <Typography
                      variant="body2"
                      color="#343a40"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "4.8em", // ~3 lines
                        lineHeight: "1.6em",
                        cursor: "default",
                      }}
                    >
                      {project.desc}
                    </Typography>
                  </Tooltip>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ background: "#343a40" }}>
                <Button
                  size="small"
                  sx={{ color: "#fff" }}
                  href={project.live}
                  target="_blank"
                >
                  Live Preview
                </Button>
                <Button
                  size="small"
                  sx={{ color: "#fff" }}
                  href={project.code}
                  target="_blank"
                >
                  Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Container4;
