export interface PlayerProps {
  id: number;
  name: string;
  score: number;
}

export interface TeamProps {
  name: string;
  players: PlayerProps[];
  reverseOrder: Boolean;
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
