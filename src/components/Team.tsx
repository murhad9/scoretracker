import React from "react";
import { Box, Container, IconButton, ListItem, Stack } from "@mui/material";
import { TeamProps } from "../interface";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Team: React.FC<TeamProps> = ({ name, players }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
      }}
    >
      <h1>{name}</h1>
      <Stack direction="column">
        {players.map((player, index) => (
          /* List of players with their scores */
          <ListItem key={index}>
            <Stack
              direction={"row"}
              fontSize={"clamp(2rem, 2.5vw, 5rem)"}
              width="100%"
              flexWrap="wrap"
              whiteSpace={"nowrap"}
            >
              {player.name}
              <Box
                sx={{
                  display: "flex",
                  marginLeft: "auto",
                  alignItems: "center",
                }}
              >
                <IconButton aria-label="remove">
                  <RemoveIcon sx={{ color: "#EA4141" }} />
                </IconButton>
                {player.score}
                <IconButton aria-label="add">
                  <AddIcon sx={{ color: "#56F35B" }} />
                </IconButton>
              </Box>
            </Stack>
          </ListItem>
        ))}
      </Stack>
    </Container>
  );
};

export default Team;
