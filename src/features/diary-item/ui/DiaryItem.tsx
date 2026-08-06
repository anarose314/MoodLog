import { cva } from 'class-variance-authority';
import Button from '@/shared/ui/Button';
import {
  type EmotionId,
  getEmotionImage,
} from '@/shared/utils/getEmotionImage';

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
  emotionId: EmotionId;
}

export default function DiaryItem({ emotionId }: DiaryItemProps) {
  const id = getEmotionImage(emotionId);

  return (
    <article className="flex justify-between gap-3 border-b py-3.75">
      {id && (
        <div className={emotionIdVariants({ emotionId })}>
          <img src={id} alt="" className="h-full" />
        </div>
      )}
      <div className="flex-1">
        <p className="typo-2xl-bold">{new Date().toLocaleDateString()}</p>
        <p className="typo-2lg-medium">일기 컨텐츠</p>
      </div>
      <div className="">
        <Button>수정하기</Button>
      </div>
    </article>
  );
}
