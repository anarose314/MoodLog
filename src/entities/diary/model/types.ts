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

export interface DiaryActions {
  onCreate: (newDiaryData: Omit<Diary, 'id'>) => void;
  onUpdate: (editDiaryData: Diary) => void;
  onDelete: (removeId: number) => void;
}
