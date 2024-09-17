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
  const score = (
    <Box
      sx={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
      }}
    >
      <IconButton aria-label="remove" onClick={() => updateScore(-10)}>
        <RemoveIcon sx={{ color: "#EA4141" }} />
      </IconButton>
      {playerScore} pts
      <IconButton aria-label="add" onClick={() => updateScore(10)}>
        <AddIcon sx={{ color: "#56F35B" }} />
      </IconButton>
    </Box>
  );
  return (
    <>
      {reverseOrder ? (
        <>
          {score}
          <PlayerTextField
            name={playerName}
            updateName={updateName}
            reverseOrder={reverseOrder}
          />
        </>
      ) : (
        <>
          <PlayerTextField
            name={playerName}
            updateName={updateName}
            reverseOrder={reverseOrder}
          />
          {score}
        </>
      )}
    </>
  );
};

export default PlayerRow;
