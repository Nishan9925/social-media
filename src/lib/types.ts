export interface IUser {
  id: string;
  name: string;
  surname: string;
  login: string;
  password: string;
  isPrivate: boolean;
  cover: string;
  picture: string;
}

export type InputUser = Omit<IUser, "id" | "isPrivate" | "cover" | "picture">;
export type LoginedUser = Omit<
  IUser,
  "id" | "isPrivate" | "cover" | "picture" | "name" | "surname"
>;

export interface IResponse {
  status: string;
  message?: string;
  payload?: unknown;
  user?: IWideUser;
}

export interface IWideUser extends IUser {
  followers: IUser[];
  following: IUser[];
}
export interface IContextType {
  account: IWideUser;
  setAccount: (user: IWideUser) => void;
}
