export interface IUserMeta {
  email: string,
  name: string,
  team: string,
  role: string,
  phone?: string,
  skills?: string[]
}

export interface ITeamMate {
  id: number,
  name: string;
  email: string;
}