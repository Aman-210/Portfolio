import { Box, Typography, Grid } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        minHeight: "20vh",
        backgroundColor: "#111418",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 4, sm: 6 },
        boxSizing: "border-box",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          color: "#fff",
          textAlign: { xs: "left", sm: "center" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "flex-start", sm: "center" },
            alignItems: "center",
            gap: 1,
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="body1">
            Designed by{" "}
            <Box component="span" sx={{ color: "#f5df4e", fontWeight: "bold" }}>
              Aman Sharma
            </Box>{" "}
            with
          </Typography>
          <FavoriteIcon sx={{ color: "red", fontSize: 20 }} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "center" },
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            © 2023{" "}
            <Box
              component="span"
              sx={{
                color: "#f5df4e",
                borderBottom: "1px solid #f5df4e",
                fontWeight: "bold",
              }}
            >
              Aman.
            </Box>{" "}
            All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
