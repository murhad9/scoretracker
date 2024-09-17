import React from "react";
import TextField from "@mui/material/TextField";
import { PlayerTextFieldProps } from "../../interface";

const PlayerTextField: React.FC<PlayerTextFieldProps> = ({
  name,
  updateName,
  reverseOrder: reversedOrder,
}) => {
  return (
    <TextField
      value={name}
      onChange={updateName}
      size="small"
      placeholder="Enter player name"
      slotProps={{
        input: {
          inputProps: {
            style: {
              fontFamily: '"Micro 5", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(2rem, 2vw, 5rem)",
              fontStyle: "normal",
              color: "white",
              textAlign: reversedOrder ? "right" : "left",
            },
          },
        },
      }}
      sx={{
        "& fieldset": {
          border: "none",
        },
      }}
    />
  );
};

export default PlayerTextField;
