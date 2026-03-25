export interface Team {
  name: string;
  logo: string;
}

export interface Game {
  id: string;
  league: string;
  leagueLogo?: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: string;
  isLive: boolean;
  statLabel?: string;
}

export interface BriefingItem {
  id: string;
  title: string;
  type: 'report' | 'stat';
  value?: string;
  label?: string;
  icon?: string;
}
