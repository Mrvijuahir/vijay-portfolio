"use client";

import { styled, Typography, TypographyProps } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  "&>span": {
    color: theme.palette.primary.main,
  },
}));

interface PrimaryHeaderProps extends TypographyProps {
  highlightedText?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function PrimaryHeader({
  children,
  highlightedText,
  variant = "h2",
  ...props
}: PrimaryHeaderProps) {
  return (
    <StyledTypography variant={variant} {...props}>
      {children}&nbsp;<span>{highlightedText}</span>
    </StyledTypography>
  );
}
