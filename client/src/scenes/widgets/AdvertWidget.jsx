import { Typography, useTheme, Box } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import logo from '../../assets/sitelogo2.png';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import {
  Search,
  Message,
  Notifications,
} from "@mui/icons-material";



const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>

        <Typography style={{ text:"center"}} color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>


      <img
        width="100%"
        height="auto"
        alt="advert"
        src={logo}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      text="5rem"
      font="bold"
      >
        <Box 
        display="flex"
        justifyContent="center"
      alignItems="center"
        >
        <AddHomeOutlinedIcon sx={{ fontSize: "25px", margin:"0 2rem" }} />
        <Typography color={medium} m="0.5rem 0"> Home  </Typography>
        </Box>
        <Box 
        display="flex"
        justifyContent="center"
      alignItems="center"
        >
        <Search sx={{ fontSize: "25px", margin:"0 2rem" }} />
        <Typography color={medium} m="0.5rem 0"> Search  </Typography>
        </Box>
        <Box 
        display="flex"
        justifyContent="center"
      alignItems="center"
        >
        <Message sx={{ fontSize: "25px", margin:"0 2rem" }} />
        <Typography color={medium} m="0.5rem 0"> Message  </Typography>
        </Box>
        <Box 
        display="flex"
        // justifyContent="center"
      alignItems="center"
        >
        <Notifications sx={{ fontSize: "25px", margin:"0 2rem" }} />
        <Typography color={medium} m="0.5rem 0"> Notifications  </Typography>
        </Box>
        

      {/* <Typography style={{textAliign:"center", margin:"auto"}} color={medium} m="0.5rem 0"><AddHomeOutlinedIcon sx={{ fontSize: "25px" }} /> Home  </Typography>
      <Typography color={medium} m="0.5rem 0">   </Typography>
      <Typography color={medium} m="0.5rem 0"> Home  </Typography>
      <Typography color={medium} m="0.5rem 0"> Home  </Typography>
      <Typography color={medium} m="0.5rem 0"> Home  </Typography>
      <Typography color={medium} m="0.5rem 0"> Home  </Typography> */}
      </Box>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
