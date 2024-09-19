import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PlayerTextField from "./PlayerTextField";
import { PlayerRowProps } from "../../interface";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const PlayerRow: React.FC<PlayerRowProps> = ({
  playerName,
  playerScore,
  index,
  updateScore,
  removePlayer,
  updateName,
  reverseOrder,
}) => {
  const POINTS = 10;
  const PLAYER_SCORE = (
    <Box
      sx={{
        display: "flex",
        marginRight: reverseOrder ? "auto" : 0,
        marginLeft: reverseOrder ? 0 : "auto",
        alignItems: "center",
      }}
    >
      <IconButton onClick={() => updateScore(-POINTS)}>
        <RemoveIcon sx={{ color: "#EA4141" }} />
      </IconButton>
      {playerScore} pts
      <IconButton onClick={() => updateScore(POINTS)}>
        <AddIcon sx={{ color: "#56F35B" }} />
      </IconButton>
    </Box>
  );

  const REMOVE_BUTTON = (
    <IconButton onClick={() => removePlayer(index)}>
      <RemoveCircleIcon sx={{ color: "#EA4141" }} />
    </IconButton>
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
          {REMOVE_BUTTON}
        </>
      ) : (
        <>
          {REMOVE_BUTTON}
          {PLAYER_TEXT_FIELD}
          {PLAYER_SCORE}
        </>
      )}
    </>
  );
};

export default PlayerRow;
