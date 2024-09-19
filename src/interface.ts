export interface PlayerProps {
  name: string;
  score: number;
}

export interface PlayerTextFieldProps {
  name: string;
  updateName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reverseOrder: boolean;
}

export interface PlayerRowProps {
  playerName: string;
  playerScore: number;
  index: number;
  updateScore: (points: number) => void;
  removePlayer: (index: number) => void;
  updateName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reverseOrder: boolean;
}

export interface TeamProps {
  name: string;
  players: PlayerProps[];
  reverseOrder: boolean;
  onPlayersUpdate: (updatedPlayers: PlayerProps[]) => void;
}

export interface TeamScoreProps {
  firstTeamScore: number;
  secondTeamScore: number;
}

export interface TeamsState {
  team1: PlayerProps[];
  team2: PlayerProps[];
}

export interface HeaderSectionProps {
  onResetScores: () => void;
}
