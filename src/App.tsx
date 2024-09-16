import { Container, Divider, Stack } from "@mui/material";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import Team from "./components/Team";

const DEFAULT_TEAM = {
  players: [
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
    { name: "Player 3", score: 0 },
    { name: "Player 4", score: 0 },
  ],
};

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Micro+5&display=swap"
        rel="stylesheet"
      ></link>
      <header className="App-header">
        <HeaderSection />
      </header>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          divider={
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ background: "white", fontWeight: "bold" }}
            />
          }
        >
          <Team
            name="Team 1"
            players={DEFAULT_TEAM.players}
            reverseOrder={false}
          />
          <Team
            name="Team 2"
            players={DEFAULT_TEAM.players}
            reverseOrder={true}
          />
        </Stack>
      </Container>
    </div>
  );
}

export default App;
