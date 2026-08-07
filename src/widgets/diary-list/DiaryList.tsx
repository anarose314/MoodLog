import type { Diary } from '@/entities/diary';
import {
  useDateState,
  useDiaryState,
} from '@/entities/diary/model/DiaryContext';
import { DiaryItem } from '@/features/diary-item';
import Button from '@/shared/ui/Button';

const getMonthlyData = (pivotDate: Date, data: Diary[]) => {
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

export default function DiaryList() {
  const { pivotDate } = useDateState();
  const data = useDiaryState();
  const filteredData = getMonthlyData(pivotDate, data);

  return (
    <>
      <div className="flex gap-3">
        <select
          name="sort"
          id="sort"
          aria-label="일기 정렬"
          className="cursor-pointer rounded-[5px] bg-gray-100 px-5 py-2.5"
        >
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
        <Button variant="POSITIVE" className="grow">
          새 일기 쓰기
        </Button>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li>
            <DiaryItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
