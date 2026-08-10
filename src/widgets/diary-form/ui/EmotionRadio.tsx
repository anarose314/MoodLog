import { cva } from 'class-variance-authority';
import {
  type EmotionId,
  getEmotionImage,
} from '@/shared/utils/getEmotionImage';

const EMOTION_LIST = [
  {
    id: 1,
    text: '완전 좋음',
  },
  {
    id: 2,
    text: '좋음',
  },
  {
    id: 3,
    text: '그럭저럭',
  },
  {
    id: 4,
    text: '나쁨',
  },
  {
    id: 5,
    text: '끔찍함',
  },
];

const emotionIdVariants = cva(
  'flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-gray-100 py-5',
  {
    variants: {
      emotionId: {
        1: 'peer-checked:bg-emotion1 peer-checked:text-white',
        2: 'peer-checked:bg-emotion2 peer-checked:text-white',
        3: 'peer-checked:bg-emotion3 peer-checked:text-white',
        4: 'peer-checked:bg-emotion4 peer-checked:text-white',
        5: 'peer-checked:bg-emotion5 peer-checked:text-white',
      },
    },
    defaultVariants: {
      emotionId: 1,
    },
  }
);

export default function EmotionRadio() {
  return (
    <>
      {EMOTION_LIST.map((emotion) => (
        <li key={emotion.id}>
          <input
            type="radio"
            id={String(emotion.id)}
            name="emotion"
            value={emotion.id}
            className="peer hidden"
          />
          <label
            htmlFor={String(emotion.id)}
            className={emotionIdVariants({
              emotionId: emotion.id as EmotionId,
            })}
          >
            <img
              src={getEmotionImage(emotion.id)}
              alt={emotion.text}
              className="w-1/2"
            />
            <p>{emotion.text}</p>
          </label>
        </li>
      ))}
    </>
  );
}
