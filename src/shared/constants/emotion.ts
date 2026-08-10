import { emotion1, emotion2, emotion3, emotion4, emotion5 } from '@/assets';

export type EmotionId = 1 | 2 | 3 | 4 | 5;

// 감정 기본 메타데이터
export const EMOTION_LIST = [
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
] as const;

// 이미지 매핑
export const EMOTION_IMAGES: Record<EmotionId, string> = {
  1: emotion1,
  2: emotion2,
  3: emotion3,
  4: emotion4,
  5: emotion5,
};
