export interface Diary {
  id: number;
  createdDate: number;
  emotionId: number;
  content: string;
}

export type Action =
  | { type: 'CREATE'; data: Diary }
  | { type: 'UPDATE'; data: Diary }
  | { type: 'DELETE'; id: number };
