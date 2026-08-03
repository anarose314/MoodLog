import { useDiaryActions } from '@/entities/diary/model/DiaryContext';
import Button from '@/shared/ui/Button';

export default function CreateDiaryButton() {
  const { onCreate } = useDiaryActions();

  return (
    <Button
      onClick={() =>
        onCreate({
          createdDate: new Date().getTime(),
          emotionId: 2,
          content: '새로운 일기',
        })
      }
    >
      일기 추가
    </Button>
  );
}
