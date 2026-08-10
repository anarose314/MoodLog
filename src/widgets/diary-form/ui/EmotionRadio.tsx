import { cva } from 'class-variance-authority';
import { EMOTION_LIST } from '@/shared/constants/emotion';
import { getEmotionImage } from '@/shared/utils/getEmotionImage';

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
      {EMOTION_LIST.map(({ id, text }) => (
        <li key={id}>
          <input
            type="radio"
            id={String(id)}
            name="emotion"
            value={id}
            className="peer hidden"
          />
          <label
            htmlFor={String(id)}
            className={emotionIdVariants({
              emotionId: id,
            })}
          >
            <img src={getEmotionImage(id)} alt={text} className="w-1/2" />
            <p>{text}</p>
          </label>
        </li>
      ))}
    </>
  );
}
