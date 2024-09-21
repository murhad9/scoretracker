import { Stack, Container } from "@mui/material";
import { TeamScoreProps } from "../../interface";

const TeamScore: React.FC<TeamScoreProps> = ({
  firstTeamScore,
  secondTeamScore,
}) => {
  const TITLE = "Score";
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        maxHeight: "200px",
      }}
    >
      <h1> {TITLE} </h1>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        marginTop={"-5rem"}
      >
        <h1> {firstTeamScore} pts </h1>
        <h1> {secondTeamScore} pts </h1>
      </Stack>
    </Container>
  );
};

export default TeamScore;
