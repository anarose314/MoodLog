/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  type ReactNode,
  type Reducer,
  useContext,
  useReducer,
  useRef,
  useState,
} from 'react';
import { MOCK_DATA } from './diaryMock';
import type { Action, DateContextType, Diary, DiaryActions } from './types';

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

const DateContext = createContext<DateContextType | null>(null);
const DiaryStateContext = createContext<Diary[] | null>(null);
const DiaryActionsContext = createContext<DiaryActions | null>(null);

/**
 * 일기장 전역 상태를 제공하는 Provider 컴포넌트
 *
 * @example
 * <DiaryProvider>
 *   <Component />
 * </DiaryProvider>
 */
export function DiaryProvider({ children }: { children: ReactNode }) {
  const [pivotDate, setPivotDate] = useState(new Date());
  const [diaryList, diaryDispatch] = useReducer(diaryReducer, MOCK_DATA);
  const idRef = useRef(Math.max(...MOCK_DATA.map((item) => item.id), 0) + 1);

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

  return (
    <DateContext.Provider value={{ pivotDate, setPivotDate }}>
      <DiaryStateContext.Provider value={diaryList}>
        <DiaryActionsContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          {children}
        </DiaryActionsContext.Provider>
      </DiaryStateContext.Provider>
    </DateContext.Provider>
  );
}

export function useDateState() {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('DiaryProvider 안에서만 사용할 수 있습니다.');
  }
  return context;
}

export function useDiaryState() {
  const context = useContext(DiaryStateContext);
  if (!context) {
    throw new Error('DiaryProvider 안에서만 사용할 수 있습니다.');
  }
  return context;
}

export function useDiaryActions() {
  const context = useContext(DiaryActionsContext);
  if (!context) {
    throw new Error('DiaryProvider 안에서만 사용할 수 있습니다.');
  }
  return context;
}
