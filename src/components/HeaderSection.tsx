import { Stack, Button } from "@mui/material";
import { HeaderSectionProps } from "../interface";

const HeaderSection: React.FC<HeaderSectionProps> = ({ onResetScores }) => {
  const BUTTON_TEXT = "RESET";
  const TITLE = "ScoreTracker";
  const RESET_CONFIRMATION_TEXT = "Are you sure you want to reset all scores?";
  const handleResetClick = () => {
    const isConfirmed = window.confirm(RESET_CONFIRMATION_TEXT);
    if (isConfirmed) {
      onResetScores();
    }
  };
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      marginTop="1rem"
    >
      <h1> {TITLE}</h1>
      <Button
        variant="contained"
        color="error"
        size="large"
        sx={{ fontWeight: "bold" }}
        onClick={handleResetClick}
      >
        {BUTTON_TEXT}
      </Button>
    </Stack>
  );
};

export default HeaderSection;
