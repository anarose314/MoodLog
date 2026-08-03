import { useDiaryActions } from '@/entities/diary/model/DiaryContext';
import Button from '@/shared/ui/Button';

export default function UpdateDiaryButton() {
  const { onUpdate } = useDiaryActions();

  return (
    <Button
      onClick={() =>
        onUpdate({
          id: 1,
          createdDate: new Date().getTime(),
          emotionId: 3,
          content: '수정된 일기 내용',
        })
      }
    >
      ID 1번 일기 수정
    </Button>
  );
}
