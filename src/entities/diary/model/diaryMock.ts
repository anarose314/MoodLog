import type { Diary } from './types';

export const MOCK_DATA: Diary[] = [
  {
    id: 1,
    createdDate: new Date('2026-07-03').getTime(),
    emotionId: 5,
    content: '오랜만에 친구를 만나 맛있는 음식을 먹었다. 기분 좋은 하루!',
  },
  {
    id: 2,
    createdDate: new Date('2026-07-10').getTime(),
    emotionId: 2,
    content: '계획했던 일을 다 끝내지 못해서 조금 아쉬웠다.',
  },
  {
    id: 3,
    createdDate: new Date('2026-07-18').getTime(),
    emotionId: 4,
    content: '새로운 카페를 발견해서 여유로운 시간을 보냈다.',
  },
  {
    id: 4,
    createdDate: new Date('2026-07-28').getTime(),
    emotionId: 1,
    content: '몸이 조금 피곤해서 하루 종일 쉬었다.',
  },
  {
    id: 5,
    createdDate: new Date('2026-08-02').getTime(),
    emotionId: 3,
    content: '평범했지만 나름 만족스러운 하루였다.',
  },
  {
    id: 6,
    createdDate: new Date('2026-08-08').getTime(),
    emotionId: 5,
    content: '오랫동안 고민하던 문제를 해결해서 뿌듯했다.',
  },
  {
    id: 7,
    createdDate: new Date('2026-08-15').getTime(),
    emotionId: 2,
    content: '비가 많이 와서 외출 계획을 취소했다.',
  },
  {
    id: 8,
    createdDate: new Date('2026-08-24').getTime(),
    emotionId: 4,
    content: '운동을 시작했는데 생각보다 재미있었다.',
  },
  {
    id: 9,
    createdDate: new Date('2026-09-05').getTime(),
    emotionId: 3,
    content: '새로운 책을 읽기 시작했다. 기대된다.',
  },
  {
    id: 10,
    createdDate: new Date('2026-09-17').getTime(),
    emotionId: 5,
    content: '목표했던 일을 마무리해서 성취감을 느꼈다.',
  },
];
