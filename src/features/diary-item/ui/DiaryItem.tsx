import { cva } from 'class-variance-authority';
import type { Diary } from '@/entities/diary';
import Button from '@/shared/ui/Button';
import { getEmotionImage } from '@/shared/utils/getEmotionImage';

const emotionIdVariants = cva(
  'flex h-20 min-w-30 cursor-pointer items-center justify-center overflow-hidden rounded-sm transition-opacity hover:opacity-80',
  {
    variants: {
      emotionId: {
        1: 'bg-emotion1',
        2: 'bg-emotion2',
        3: 'bg-emotion3',
        4: 'bg-emotion4',
        5: 'bg-emotion5',
      },
    },
    defaultVariants: {
      emotionId: 1,
    },
  }
);

interface DiaryItemProps {
  item: Diary;
}

export default function DiaryItem({ item }: DiaryItemProps) {
  const { emotionId, content, createdDate } = item;
  const id = getEmotionImage(emotionId);
  const date = new Date(createdDate).toLocaleDateString('ko-KR');

  return (
    <article className="flex justify-between gap-3 border-b py-3.75">
      {id && (
        <div className={emotionIdVariants({ emotionId })}>
          <img src={id} alt="" className="h-full" />
        </div>
      )}
      <div className="flex-1">
        <p className="typo-2xl-bold">{date}</p>
        <p className="typo-2lg-medium">{content}</p>
      </div>
      <div className="">
        <Button>수정하기</Button>
      </div>
    </article>
  );
}
