import { Container, Divider, Stack } from "@mui/material";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import Team from "./components/Team/Team";
import { useState } from "react";
import { PlayerProps, TeamsState } from "./interface";
import TeamScore from "./components/Team/TeamScore";

export const DEFAULT_PLAYERS: PlayerProps[] = [
  { name: "Player 1", score: 0 },
  { name: "Player 2", score: 0 },
  { name: "Player 3", score: 0 },
  { name: "Player 4", score: 0 },
];

function App() {
  const [teams, setTeams] = useState<TeamsState>({
    team1: [...DEFAULT_PLAYERS],
    team2: [...DEFAULT_PLAYERS],
  });

  const handleUpdateTeam = (
    teamKey: keyof TeamsState,
    updatedPlayers: PlayerProps[]
  ) => {
    setTeams((prevTeams) => ({
      ...prevTeams,
      [teamKey]: updatedPlayers,
    }));
  };

  const calculateTeamScore = (players: PlayerProps[]) => {
    return players.reduce((total, player) => total + player.score, 0);
  };

  const resetAllScores = () => {
    setTeams((prevTeams) => ({
      team1: prevTeams.team1.map((player) => ({ ...player, score: 0 })),
      team2: prevTeams.team2.map((player) => ({ ...player, score: 0 })),
    }));
  };

  return (
    <Container maxWidth={false} sx={{ minHeight: "100vh", width: "80%" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Micro+5&display=swap"
        rel="stylesheet"
      ></link>
      <HeaderSection onResetScores={resetAllScores} />
      <Stack
        direction="row"
        justifyContent="space-between"
        divider={
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ background: "white" }}
          />
        }
      >
        <Team
          name="Team 1"
          players={teams.team1}
          reverseOrder={false}
          onPlayersUpdate={(updatedPlayers) =>
            handleUpdateTeam("team1", updatedPlayers)
          }
        />
        <Team
          name="Team 2"
          players={teams.team2}
          reverseOrder={true}
          onPlayersUpdate={(updatedPlayers) =>
            handleUpdateTeam("team2", updatedPlayers)
          }
        />
      </Stack>
      <TeamScore
        firstTeamScore={calculateTeamScore(teams.team1)}
        secondTeamScore={calculateTeamScore(teams.team2)}
      />
    </Container>
  );
}

export default App;
