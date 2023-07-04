import React from 'react'
import WidgetWrapper from "components/WidgetWrapper";
import {
    Box,
    Typography,
    useTheme
  } from "@mui/material";

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
        <Typography>&copy; 2023 socialBook. All rights reserved.</Typography>
        <Typography>## &&& India</Typography>
        <Typography>#########</Typography>
        <Typography>********@gmail.com</Typography>
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