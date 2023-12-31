import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import FooterWidget from "scenes/widgets/FooterWidget";
// import {motion} from 'framer-motion'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar userId={_id} />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
        {/* <motion.span 
      initial = {{left : '2rem'}}
      whileInView={{left :'-5rem'}}
      transition={{
        duration : 2,
        type : 'spring'
      }}
      >
          
        </motion.span> */}

          <AdvertWidget />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <UserWidget userId={_id} picturePath={picturePath} />
            <Box m="2rem 0" />

            <FriendListWidget userId={_id} />
            <Box m="2rem 0" />

            <FooterWidget />
          </Box>


        )}
      </Box>
    </Box>
  );
};

export default HomePage;
