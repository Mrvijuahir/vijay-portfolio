"use client";

import { Box, styled } from "@mui/material";
import Image from "next/image";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingBottom: 50,
  "&>div": {
    position: "relative",
    width: "max-content",
    "& .about-me-user": {
      position: "absolute",
      bottom: "-45px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "& .about-me-sleep": {
      position: "absolute",
      top: "90px",
      left: "120px",
      filter: theme.palette.mode === "light" ? "invert(1)" : "none",
    },
    [theme.breakpoints.down("sm")]: {
      "& .about-me-bg": {
        width: 350,
        height: 250,
      },
      "& .about-me-sleep": {
        top: "40px",
        left: "90px",
      },
    },
  },
}));

export default function AboutMeImage() {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        order={{ md: 1 }}
        justifyContent={{ xs: "center", md: "flex-end" }}
      >
        <Box
          position="relative"
          height={{ xs: 380, md: 460, lg: 520 }}
          width={{ xs: 320, md: 380, lg: 440 }}
          margin={"auto"}
        >
          {/* Image */}
          <Box
            position="absolute"
            zIndex={10}
            height={{ xs: 360, md: 420, lg: 480 }}
            width={{ xs: 280, md: 340, lg: 400 }}
            border="8px solid"
            borderColor="grey.50"
            sx={{
              left: { xs: 20, md: "auto" },
              right: { md: 0 },
              top: { md: 0 },
            }}
          >
            <Image
              src="/images/vijay-fullpose.jpeg"
              alt="Fullpose of Vijay"
              layout="fill"
              style={{ objectFit: "cover", borderRadius: 0 }}
            />
          </Box>

          {/* Background Shape */}
          <Box
            position="absolute"
            height={{ xs: 360, md: 420, lg: 480 }}
            width={{ xs: 320, md: 340, lg: 400 }}
            border="8px solid transparent"
            bgcolor="grey.200"
            sx={{
              top: { xs: 20, md: "auto" },
              bottom: { md: 0 },
              left: { md: 0 },
            }}
          />
        </Box>
      </Box>
    </>
  );
}
