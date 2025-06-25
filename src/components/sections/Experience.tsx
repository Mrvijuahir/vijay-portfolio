import { Box } from "@mui/material";
import SectionLayout from "../layouts/SectionLayout";
import PrimaryHeader from "../general/PrimaryHeader";
import SecondaryText from "../general/SecondaryText";
import { EXPERIENCES } from "@/lib/data";
import ExperienceDetail from "../general/ExperienceDetail";
import { ExperienceDetailTypes } from "@/lib/types";

export default function Experience() {
  return (
    <SectionLayout id="experience" diffBg>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PrimaryHeader highlightedText="Experience">Work</PrimaryHeader>
        <br />
        <SecondaryText>
          An overview of my most recent professional experience:
        </SecondaryText>
        <Box display={"flex"} flexDirection={"column"} gap={4} mt={4}>
          {EXPERIENCES.map(
            (experience: ExperienceDetailTypes, index: number) => (
              <ExperienceDetail {...experience} key={index} />
            )
          )}
        </Box>
      </Box>
    </SectionLayout>
  );
}
