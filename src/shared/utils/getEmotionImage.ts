import { EMOTION_IMAGES, type EmotionId } from '../constants/emotion';

export function getEmotionImage(emotionId: EmotionId) {
  return EMOTION_IMAGES[emotionId];
}
