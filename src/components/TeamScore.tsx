import { Stack, Container } from "@mui/material";
import { TeamScoreProps } from "../interface";

const TeamScore: React.FC<TeamScoreProps> = ({
  firstTeamScore,
  secondTeamScore,
}) => {
  const TITLE = "Score";
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <h1> {TITLE} </h1>
      <Stack
        direction={"row"}
        marginTop={"-5rem"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <h1> {firstTeamScore} pts </h1>
        <h1> {secondTeamScore} pts </h1>
      </Stack>
    </Container>
  );
};

export default TeamScore;
