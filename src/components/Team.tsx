import React, { useEffect, useState } from "react";
import { Box, Container, IconButton, ListItem, Stack } from "@mui/material";
import { TeamProps } from "../interface";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Team: React.FC<TeamProps> = ({
  name,
  players,
  reverseOrder,
  onPlayersUpdate,
}) => {
  const [playerScores, setPlayerScores] = useState(players);
  const POINTS = 10; // TODO: Make this value adjustable

  // Method to update player score
  const updateScore = (index: number, points: number) => {
    const updatedPlayers = playerScores.map((player, i) =>
      i === index ? { ...player, score: player.score + points } : player
    );
    setPlayerScores(updatedPlayers);
    onPlayersUpdate(updatedPlayers);
  };

  useEffect(() => {
    setPlayerScores(players);
  }, [players]);

  return (
    <Container
      maxWidth={false}
      sx={{
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <Stack direction="column">
        {playerScores.map((player, index) => (
          /* List of players with their scores */
          <ListItem key={index}>
            <Stack
              direction={"row"}
              fontSize={"clamp(2rem, 2.5vw, 5rem)"}
              width="100%"
              flexWrap="wrap"
              alignItems={"center"}
            >
              {reverseOrder ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      marginRight: "auto",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      aria-label="remove"
                      onClick={() => updateScore(index, -POINTS)}
                    >
                      <RemoveIcon sx={{ color: "#EA4141" }} />
                    </IconButton>
                    {player.score} pts
                    <IconButton
                      aria-label="add"
                      onClick={() => updateScore(index, POINTS)}
                    >
                      <AddIcon sx={{ color: "#56F35B" }} />
                    </IconButton>
                  </Box>
                  {player.name}
                </>
              ) : (
                <>
                  {player.name}
                  <Box
                    sx={{
                      display: "flex",
                      marginLeft: "auto",
                      alignItems: "center",
                    }}
                  >
                    <IconButton onClick={() => updateScore(index, -POINTS)}>
                      <RemoveIcon sx={{ color: "#EA4141" }} />
                    </IconButton>
                    {player.score} pts
                    <IconButton onClick={() => updateScore(index, POINTS)}>
                      <AddIcon sx={{ color: "#56F35B" }} />
                    </IconButton>
                  </Box>
                </>
              )}
            </Stack>
          </ListItem>
        ))}
      </Stack>
    </Container>
  );
};

export default Team;
