import { Box, Typography } from "@mui/material";
import PrimaryHeader from "./PrimaryHeader";
import AnimateWavingHand from "./AnimateWavingHand";
import { MapPin } from "lucide-react";
import StatusBadge from "./StatusBadge";
import SocialIcons from "./SocialIcons";
import { calculateExperience } from "@/lib/utils";

export default function HeroDetail() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} alignItems={"center"}>
        <PrimaryHeader variant="h1" highlightedText="Vijay">
          Hey there, I’m
        </PrimaryHeader>
        <AnimateWavingHand />
      </Box>
      <Typography variant="body1" align="left">
        I'm a Full Stack Developer with {calculateExperience()} years of
        experience working with React.js and Node.js. I enjoy building fast,
        responsive, and accessible web applications — and my passion for
        problem-solving keeps growing with every project
      </Typography>
      <Box my={4} display={"flex"} flexDirection={"column"} gap={1}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MapPin />
          <Typography variant="body1">Ahmedabad, Gujarat, India</Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <StatusBadge />
          <Typography variant="body1" align="left">
            Creating Scalable Web Solutions Beyond Boundaries.
          </Typography>
        </Box>
      </Box>
      <SocialIcons align="left" />
    </Box>
  );
}
