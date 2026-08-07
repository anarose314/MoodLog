import type { Diary } from '../model/types';

export const getMonthlyData = (pivotDate: Date, data: Diary[]) => {
  const startDate = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
    0
  ).getTime();

  const endDate = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => startDate <= item.createdDate && endDate >= item.createdDate
  );
};
