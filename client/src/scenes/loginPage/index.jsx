import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Typewriter from "typewriter-effect";
import Form from "./Form";
import logo from "assets/sitelogo2.png";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
        <Typewriter

options={{
  cursor: '',
  loop: 'true'
}}

onInit={(typewriter) => {

  typewriter
    .typeString(" Socialbook")
    .pauseFor(1000)
    .deleteAll()
    .typeString(" Socialbook")
    .pauseFor(1000)
    .deleteAll()
    .typeString(" Socialbook")
    .pauseFor(1000)
    .deleteAll()
    .typeString('')
    .start();
}}
/>
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"

        >
        <img src={logo} alt="Site logo" style={{
          borderRadius:"2rem",
          margin:"2rem"
        }} />
        </Box>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
        Welcome to SocialBook, the Social Media!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
