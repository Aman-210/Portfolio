import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// const experiences = [
//   {
//     role: "Software Developer",
//     company: "Wedigtech",
//     duration: "May 2024 – Present",
//     project: "BlueSky Intel (AI & Blockchain Intelligence Platform)",
//     link: "https://www.blueskyintel.com/",
//     description:
//       "Independently handled the React-based portal of a multi-user platform connecting Business Users, Solution Providers, and Investors. Integrated OpenAI APIs, Socket.io-powered real-time chat, Kanban boards, and Stripe subscriptions with role-based access control.",
//     tech: ["React.js", "Redux Toolkit", "Socket.io", "OpenAI API", "Stripe", "Material UI", "Nest.js", "Laravel"]
//   },
//   {
//     role: "Software Developer",
//     company: "Wedigtech",
//     duration: "May 2024 – Present",
//     project: "BlueSkyIntel Admin Dashboard",
//     link: "https://www.blueskyintel.com/",
//     description:
//       "Developed internal tools for admin operations including user management, analytics, subscription tracking, and role-based dashboards using React and Nest.js.",
//     tech: ["React.js", "Nest.js", "Material UI", "Chart.js", "Redux"]
//   },
//   {
//     role: "Full-Stack Developer Intern",
//     company: "Wedigtech",
//     duration: "Feb 2024 – Apr 2024",
//     project: "Real Time Angel Fund (Backrr)",
//     link: "https://www.realtimeaf.com/",
//     description:
//       "Integrated advanced spreadsheet features using Fortune React Sheet: real-time data saving, column freezing, formula toggling, and Excel export. Improved responsive UI and authentication systems.",
//     tech: ["React.js", "Fortune Sheet", "Firebase Auth", "Material UI"]
//   },
// ];
const experiences = [
  {
    role: "Software Developer",
    company: "Wedigtech",
    duration: "Feb 2024 – Present",
    projects: [
      {
        title: "BlueSky Intel (AI & Blockchain Intelligence Platform)",
        link: "https://www.blueskyintel.com/",
        description:
          "Independently handled the React-based portal of a multi-user platform connecting Business Users, Solution Providers, and Investors. Integrated OpenAI APIs, Socket.io-powered real-time chat, Kanban boards, and Stripe subscriptions with role-based access control.",
        techStack: ["React.js", "Redux Toolkit", "Material-UI", "Socket.io", "OpenAI API", "Stripe", "Nest.js"],
      },
      {
        title: "WeTeams (Project & Resource  Management Tool)",
        link: "https://weteams.ai/",
        description:
        "Developed a smart project management platform with React.js, Redux Toolkit, and RTK Query. Refactored codebase and integrated Jira and Asana APIs to track employee hours, sprint progress, and resource allocation. Empowered managers with actionable reports and team performance insights.",
        techStack: ["React.js", "Redux Toolkit", "Material-UI"],
      },
      {
        title: "Real Time Angel Fund (Backrr)",
        link: "https://www.realtimeaf.com/",
        description:
          "Integrated advanced spreadsheet features using Fortune React Sheet: real-time data saving, column freezing, formula toggling, and Excel export. Improved responsive UI and authentication systems.",
        techStack: ["React.js", "Fortune Sheet", "Material-UI", "Auth.js",],
      }
    ]
  },
];



const education = [
  {
    degree: "Web Development",
    institution: "Odin School",
    duration: "Nov 2023 – Feb 2024",
    note: "Part-time program",
  },
  {
    degree: "Bachelor in Biology",
    institution: "University of Kota",
    duration: "2019 – 2022",
    note: "Completed with 70%",
  },
  {
    degree: "XII Class",
    institution: "Ideal Public Senior School",
    duration: "2018 – 2019",
    note: "Completed with 82%",
  },
  {
    degree: "X Class",
    institution: "Ideal Public Senior School",
    duration: "2016 – 2017",
    note: "Completed with 90.33%",
  },
];

const skills = [
  { label: "Web Design (65%)", width: "65%" },
  { label: "HTML/CSS (95%)", width: "95%" },
  { label: "JavaScript (70%)", width: "70%" },
  { label: "Material UI (95%)", width: "95%" },
  { label: "JQuery (65%)", width: "65%" },
  { label: "React.js (75%)", width: "75%" },
];

const Container3 = () => {
  return (
    <Box sx={{ width: "100%", py: 10, }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ background: "#f5df4e", display: "inline-block", px: 1 }}>
          Resume
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2 }}>
          A Summary of My Resume
        </Typography>
      </Box>
      
      {/* Experience Section */}
      <Grid container spacing={4}  sx={{ mt: 6 , px: {
      xs: 1,   // no horizontal padding on extra-small screens
      sm: 1,   // no horizontal padding on small screens
      md: 1,   // no horizontal padding on medium screens
      lg: 10,  // 10 units of horizontal padding on large and up
    },}}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            My Experience
          </Typography>
          {experiences.map((exp, index) => (
  <Box key={index} sx={{ borderLeft: "3px solid #f5df4e", pl: 2, mb: 4 }}>
    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
      {exp.role}
    </Typography>
    <Typography sx={{ fontWeight: "bold" }}>
      {exp.company} / {exp.duration}
    </Typography>

    {exp.projects.map((project, idx) => (
      <Box key={idx} sx={{ mt: 2 }}>
        <Box sx={{display:'flex'}}>
        <ChevronRightIcon sx={{ color: "#343a40", mr: 1 , }} />
        <Typography
          component="a"
          href={project.link}
          target="_blank"
          rel="noreferrer"
          sx={{ color: "#007bff", fontWeight: "bold" }}
        >
          {project.title}
        </Typography>
        </Box>
        <Typography sx={{ mt: 1 }}>{project.description}</Typography>

        {project.techStack && (
          <Box sx={{ mt: 1 }}>
            <Typography sx={{ fontWeight: "bold" }}>Tech Stack:</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 0.5 }}>
              {project.techStack.map((techItem, i) => (
                <Box
                  key={i}
                  sx={{
                    backgroundColor: "#343a40",
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                  }}
                >
                  {techItem}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    ))}

    {index !== experiences.length - 1 && <Divider sx={{ mt: 4 }} />}
  </Box>
))}

        </Grid>

        {/* Education Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            My Education
          </Typography>
          {education.map((edu, index) => (
            <Box key={index} sx={{ borderLeft: "3px solid #f5df4e", pl: 2, mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {edu.degree}
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>{edu.institution} / {edu.duration}</Typography>
              <Typography>{edu.note}</Typography>
              {index !== education.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Skills Section */}
      {/* Skills Section */}
<Box
  sx={{
    mt: { xs: 6, sm: 8, md: 10 },
    px: { xs: 2, sm: 10 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      mb: { xs: 3, sm: 4 },
      textAlign: "center",
    }}
  >
    My Skills
  </Typography>

  <Grid container spacing={4}>
    {skills.map((skill, i) => (
      <Grid item xs={12} sm={6} key={i}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.1rem" },
          }}
        >
          {skill.label}
        </Typography>
        <Box
          sx={{
            height: "8px",
            borderRadius: "10px",
            background: "#f5df4e",
            width: skill.width,
            mt: 1,
            maxWidth: "100%",
          }}
        />
      </Grid>
    ))}
  </Grid>
</Box>
      {/* Download Resume */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Button
          href="/Aman_Sharma_CV.pdf"
          download="Aman_Sharma_Resume.pdf"
          sx={{
            backgroundColor: "#343a40",
            color: "#fff",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default Container3;
