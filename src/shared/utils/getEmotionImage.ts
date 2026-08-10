import { emotion1, emotion2, emotion3, emotion4, emotion5 } from '@/assets';

export type EmotionId = 1 | 2 | 3 | 4 | 5;

const EMOTION_IMAGES: Record<EmotionId, string> = {
  1: emotion1,
  2: emotion2,
  3: emotion3,
  4: emotion4,
  5: emotion5,
};

export function getEmotionImage(emotionId: number) {
  return EMOTION_IMAGES[emotionId as EmotionId];
}
