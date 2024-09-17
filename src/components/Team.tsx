import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import { TeamProps } from "../interface";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Team: React.FC<TeamProps> = ({
  name,
  players,
  reverseOrder,
  onPlayersUpdate,
}) => {
  const [playersInfo, setPlayerInfo] = useState(players);
  const POINTS = 10; // TODO: Make this value adjustable

  // Method to update player score
  const updateScore = (index: number, points: number) => {
    const updatedPlayers = playersInfo.map((player, i) =>
      i === index ? { ...player, score: player.score + points } : player
    );
    setPlayerInfo(updatedPlayers);
    onPlayersUpdate(updatedPlayers);
  };

  // Method to update player score
  const updateName = (index: number, newName: string) => {
    const MAX_NAME_LENGTH = 15;
    const updatedPlayers = playersInfo.map((player, i) =>
      i === index
        ? { ...player, name: newName.slice(0, MAX_NAME_LENGTH) }
        : player
    );
    setPlayerInfo(updatedPlayers);
    onPlayersUpdate(updatedPlayers);
  };

  useEffect(() => {
    setPlayerInfo(players);
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
        {playersInfo.map((player, index) => (
          /* List of players with their scores */
          <ListItem key={index} disablePadding={true}>
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
                  <TextField
                    value={player.name}
                    onChange={(e) => updateName(index, e.target.value)}
                    size="small"
                    slotProps={{
                      input: {
                        inputProps: {
                          style: {
                            fontFamily: '"Micro 5", sans-serif',
                            fontWeight: 400,
                            fontSize: "clamp(2rem, 2vw, 5rem)",
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "right",
                          },
                        },
                      },
                    }}
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                  ></TextField>
                </>
              ) : (
                <>
                  <TextField
                    value={player.name}
                    onChange={(e) => updateName(index, e.target.value)}
                    size="small"
                    slotProps={{
                      input: {
                        inputProps: {
                          style: {
                            fontFamily: '"Micro 5", sans-serif',
                            fontWeight: 400,
                            fontSize: "clamp(2rem, 2vw, 5rem)",
                            fontStyle: "normal",
                            color: "white",
                          },
                        },
                      },
                    }}
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                    }}
                  ></TextField>
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
