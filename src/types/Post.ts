export interface Post {
  id: string;
  content: string;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  content: string;
}
