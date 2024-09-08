import { Stack, Button } from "@mui/material";

export default function HeaderSection() {
  const buttonText = "RESET";
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center">
      <h1> ScoreTracker</h1>
      <Button
        variant="contained"
        color="error"
        size="large"
        sx={{ fontWeight: "bold" }}
      >
        {buttonText}
      </Button>
    </Stack>
  );
}
