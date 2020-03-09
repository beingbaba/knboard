export type Id = string;

export interface AuthorColors {
  soft: string;
  hard: string;
}

export interface Author {
  id: Id;
  name: string;
  avatarUrl: string;
  colors: AuthorColors;
}

export interface ITask {
  id: Id;
  content: string;
  author: Author;
}

export interface TasksByColumn {
  [key: string]: Id[];
}