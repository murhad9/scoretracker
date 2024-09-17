import React, { useEffect, useState } from "react";
import {
  Container,
  ListItem,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TeamProps } from "../../interface";
import PlayerRow from "../Player/PlayerRow";

const Team: React.FC<TeamProps> = ({
  name,
  players,
  reverseOrder,
  onPlayersUpdate,
}) => {
  const [playerInfo, setPlayerInfo] = useState(players);

  const updateScore = (index: number, points: number) => {
    const updatedPlayers = playerInfo.map((player, i) =>
      i === index ? { ...player, score: player.score + points } : player
    );
    setPlayerInfo(updatedPlayers);
    onPlayersUpdate(updatedPlayers);
  };

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

  useEffect(() => {
    setPlayerInfo(players);
  }, [players]);

  // Adjust players display based on resolution and team
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const shouldReverseOrder = isMobile ? false : reverseOrder;

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
                updateScore={(points) => updateScore(index, points)}
                updateName={(e) => updateName(index, e.target.value)}
                reverseOrder={shouldReverseOrder}
              />
            </Stack>
          </ListItem>
        ))}
      </Stack>
    </Container>
  );
};

export default Team;
