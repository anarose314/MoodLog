import { type Reducer, useReducer, useRef } from 'react';
import { MOCK_DATA } from './diaryMock';
import type { Action, Diary } from './types';

const diaryReducer: Reducer<Diary[], Action> = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
};

export function DiaryProvider() {
  const [diaryList, diaryDispatch] = useReducer(diaryReducer, MOCK_DATA);
  const idRef = useRef(MOCK_DATA.length + 1);

  // 새로운 일기 추가
  const onCreate = (data: Omit<Diary, 'id'>) => {
    diaryDispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        ...data,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (data: Diary) => {
    diaryDispatch({
      type: 'UPDATE',
      data,
    });
  };

  // 기존 일기 삭제
  const onDelete = (id: number) => {
    diaryDispatch({
      type: 'DELETE',
      id,
    });
  };

  return <div></div>;
}
