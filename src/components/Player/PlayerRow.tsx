import React from "react";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PlayerTextField from "./PlayerTextField";
import { PlayerRowProps } from "../../interface";

const PlayerRow: React.FC<PlayerRowProps> = ({
  playerName,
  playerScore,
  updateScore,
  updateName,
  reverseOrder,
}) => {
  const POINTS = 10;
  const PLAYER_SCORE = (
    <Box
      sx={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
      }}
    >
      <IconButton aria-label="remove" onClick={() => updateScore(-POINTS)}>
        <RemoveIcon sx={{ color: "#EA4141" }} />
      </IconButton>
      {playerScore} pts
      <IconButton aria-label="add" onClick={() => updateScore(POINTS)}>
        <AddIcon sx={{ color: "#56F35B" }} />
      </IconButton>
    </Box>
  );

  const PLAYER_TEXT_FIELD = (
    <PlayerTextField
      name={playerName}
      updateName={updateName}
      reverseOrder={reverseOrder}
    />
  );

  return (
    <>
      {reverseOrder ? (
        <>
          {PLAYER_SCORE}
          {PLAYER_TEXT_FIELD}
        </>
      ) : (
        <>
          {PLAYER_TEXT_FIELD}
          {PLAYER_SCORE}
        </>
      )}
    </>
  );
};

export default PlayerRow;
