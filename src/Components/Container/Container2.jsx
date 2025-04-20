import { Box, Typography, Grid } from "@mui/material";

const skills = [
  {
    title: "React.Js",
    img: "https://clipground.com/images/react-logo-png-7.png",
    description:
      "I possess a deep understanding of React.js, leveraging its powerful component-based architecture and state management to develop seamless and interactive user interfaces.",
  },
  {
    title: "Web Design",
    img: "https://img.favpng.com/19/13/13/web-development-responsive-web-design-computer-icons-png-favpng-yTAE7h1QX1YQ1iVZ3TR72LTDy.jpg",
    description:
      "I have a strong background in web design, combining creativity and technical skills to deliver visually stunning and user-friendly interfaces.",
  },
  {
    title: "Web Development",
    img: "https://i0.wp.com/www.paoloprovinciali.com/wp-content/uploads/2017/08/Community-Manager.jpg?fit=840%2C840",
    description:
      "I am a highly skilled web developer proficient in various web development technologies. My strong problem-solving skills enable me to deliver exceptional results.",
  },
  {
    title: "JavaScript",
    img: "https://www.shareicon.net/data/512x512/2016/07/06/106573_software_512x512.png",
    description:
      "I am a JavaScript expert with a deep understanding of the language and its ecosystem. Proficient in both front-end and back-end development, I have a proven track record of building dynamic and interactive web applications.",
  },
  {
    title: "Material UI",
    img: "https://marmelab.com/react-admin/assets/techs/material-ui.png",
    description:
      "I am a proficient front-end developer with expertise in Material-UI, a popular React UI component library. With a deep understanding of Material Design principles, I create visually appealing and intuitive user interfaces using pre-built components and custom styles.",
  },
];

const Container2 = () => {
  return (
    <Box id="whatIDo" sx={{ width: "100%", background: "#f5f5f5", py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography sx={{ background: "#f5df4e", display: "inline-block", px: 1 }}>
          What Do I do
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2 }}>
          How Can I Help Your Organisation
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 2, sm: 4 } }}>
        {skills.map((skill, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
          >
            <Box
              component="img"
              src={skill.img}
              alt={skill.title}
              sx={{
                width: 100,
                height: 100,
                borderRadius: skill.title !== "React.Js" && "20vh",
                mb: 2,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {skill.title}
            </Typography>
            <Typography sx={{ fontFamily: "serif", color: "#343a40", fontSize: "0.95rem" }}>
              {skill.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Container2;
