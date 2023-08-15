import React from 'react'
import WidgetWrapper from "components/WidgetWrapper";
import {
    Box,
    Typography,
    useTheme
  } from "@mui/material";
  import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
  import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';

function FooterWidget() {
    const { palette } = useTheme();
  return (
<WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Contact Us
      </Typography>
      <Box>
      <Box 
        display="flex"
        // justifyContent="center"
      alignItems="center"
        >
        <EditOutlinedIcon sx={{ fontSize: "25px", margin:"1rem 2rem" }} />
        <Typography>Designed by godsped</Typography>
        
        </Box>
        <Typography>&copy; 2023 SocialBook. All rights reserved.</Typography>
        <Typography> DIC, Chandigarh, India</Typography>
        <Typography>+91 9996668881</Typography>
        <Box 
        display="flex"
        // justifyContent="center"
      alignItems="center"
        >
        <EmailOutlinedIcon sx={{ fontSize: "25px", margin:"1rem 2rem" }} />
        <Typography>satyam2001anand@gmail.com</Typography>
        
        </Box>
        <Box 
        display="flex"
        // justifyContent="center"
      alignItems="center"
        >
        <GitHubIcon sx={{ fontSize: "25px", margin:"1rem 2rem" }} />
        <Typography>
          <a href="https://github.com/godspeed-03/SocialBook_MERN" target="blank"> Github Code</a>
        </Typography>
        
        </Box>
        <Box 
        display="flex"
        // justifyContent="center"
      alignItems="center"
        >
        <WebAssetOutlinedIcon sx={{ fontSize: "25px", margin:"1rem 2rem" }} />
        <Typography>
          <a href="https://satyamio.netlify.app/" target="blank">Portfolio</a>
        </Typography>
        
        </Box>
<Box
display="flex"
flexDirection="column"
padding="2rem 0"
>
<a href="privacy.html">Privacy Policy</a>
                 <a href="terms.html">Terms of Service</a>
             <a href="sitemap.html">Sitemap</a>
</Box>
    </Box>
    </WidgetWrapper>

    
   
  )
}

export default FooterWidget