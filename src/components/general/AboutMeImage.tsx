"use client";

import { Box } from "@mui/material";
import Image from "next/image";

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
              src="/images/vijay-fullpose.png"
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
