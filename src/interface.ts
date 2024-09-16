export interface PlayerProps {
  name: string;
  score: number;
}

export interface TeamProps {
  name: string;
  players: PlayerProps[];
}
