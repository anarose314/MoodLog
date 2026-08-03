import { useDiaryActions } from '@/entities/diary/model/DiaryContext';
import Button from '@/shared/ui/Button';

export default function DeleteDiaryButton() {
  const { onDelete } = useDiaryActions();

  return <Button onClick={() => onDelete(1)}>ID 1번 일기 삭제</Button>;
}
