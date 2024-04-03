import { Box, Button, Link, Typography } from "@mui/material";

const footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ fontSize: 18 }}
        variant="h6"
        color={"HighlightText"}
      >
        Designed and developed by
        <Link href="https://github.com/Ahmed-Mohamed-Adel" target="_blank">
          <Button
            sx={{
              mx: 0.5,
              fontSize: 18,
              textTransform: "capitalize",
              color: "#ff7790",
            }}
            variant="text"
            color="primary"
          >
            Ahmed Adel
          </Button>
        </Link>
        &copy;{new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default footer;
