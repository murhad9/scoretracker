import { Stack, Button } from "@mui/material";

export default function HeaderSection() {
  const BUTTON_TEXT = "RESET";
  const TITLE = "ScoreTracker";
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center">
      <h1> {TITLE}</h1>
      <Button
        variant="contained"
        color="error"
        size="large"
        sx={{ fontWeight: "bold" }}
      >
        {BUTTON_TEXT}
      </Button>
    </Stack>
  );
}
