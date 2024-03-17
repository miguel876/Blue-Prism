export type LogPropType = {
  id: number;
  log: string;
  date: string;
};

export type DetailPropType = {
  id: number;
  logs: LogPropType[];
};

export type FilterTypes = 'asc' | 'desc' | null;
