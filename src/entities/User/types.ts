export type UserFromBackend = {
  id: number;
  email: string;
  nickname: string;
  score: number;
};

export type LoggedType = UserFromBackend & {
  status: 'logged';
};

export type FetchingUserType = {
  id: null;
  status: 'fetching';
  score: null;
};

export type GuestType = {
  id: null;
  status: 'guest';
  score: null;
};

export type UserType = GuestType | FetchingUserType | LoggedType;
