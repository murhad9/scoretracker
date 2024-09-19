import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  IconButton,
  ListItem,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TeamProps } from "../../interface";
import PlayerRow from "../Player/PlayerRow";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Team: React.FC<TeamProps> = ({
  name,
  players,
  reverseOrder,
  onPlayersUpdate,
}) => {
  const [playerInfo, setPlayerInfo] = useState(players);

  // Method to update the score of a player
  const updateScore = (index: number, points: number) => {
    const updatedPlayers = playerInfo.map((player, i) =>
      i === index ? { ...player, score: player.score + points } : player
    );
    setPlayerInfo(updatedPlayers);
    onPlayersUpdate(updatedPlayers);
  };

  // Method to update the name of a player
  const updateName = (index: number, newName: string) => {
    const MAX_NAME_LENGTH = 15;
    const updatedPlayers = playerInfo.map((player, i) =>
      i === index
        ? { ...player, name: newName.slice(0, MAX_NAME_LENGTH) }
        : player
    );
    setPlayerInfo(updatedPlayers);
    onPlayersUpdate(updatedPlayers);
  };

  // Method to add a player
  const addPlayer = (newPlayer: { name: string; score: number }) => {
    setPlayerInfo([...playerInfo, newPlayer]);
    onPlayersUpdate([...playerInfo, newPlayer]);
  };

  // Method to remove a player
  const removePlayer = (index: number) => {
    const updatedPlayers = playerInfo.filter((_, i) => i !== index);
    setPlayerInfo(updatedPlayers);
    onPlayersUpdate(updatedPlayers);
  };

  useEffect(() => {
    setPlayerInfo(players);
  }, [players]);

  // Adjust players display based on resolution and team
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const shouldReverseOrder = isMobile ? false : reverseOrder;
  // <Button onClick={() => removePlayer(index)}> REMOVE </Button>

  return (
    <Container
      maxWidth={false}
      sx={{
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <Stack direction="column">
        {playerInfo.map((player, index) => (
          /* List of players with their scores */
          <ListItem key={index} disablePadding={true}>
            <Stack
              direction={{ xs: "column", sm: "row" }} // Adjust view to column when on smaller resolution
              fontSize={"clamp(2rem, 2.5vw, 5rem)"}
              width="100%"
              flexWrap="wrap"
            >
              <PlayerRow
                playerName={player.name}
                playerScore={player.score}
                index={index}
                updateScore={(points) => updateScore(index, points)}
                removePlayer={() => removePlayer(index)}
                updateName={(e) => updateName(index, e.target.value)}
                reverseOrder={shouldReverseOrder}
              />
            </Stack>
          </ListItem>
        ))}

        {/*  Button to add player if there are fewer than 4 players */}
        {playerInfo.length < 4 && (
          <Stack alignItems="center" mt={2}>
            <IconButton
              onClick={() => addPlayer({ name: "New Player", score: 0 })}
            >
              <AddCircleIcon sx={{ color: "#56F35B" }} />
            </IconButton>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Team;
