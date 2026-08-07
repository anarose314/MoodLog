import { type ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMonthlyData } from '@/entities/diary';
import {
  useDateState,
  useDiaryState,
} from '@/entities/diary/model/DiaryContext';
import { DiaryItem } from '@/features/diary-item';
import Button from '@/shared/ui/Button';

export default function DiaryList() {
  const [sort, setSort] = useState('latest');

  const { pivotDate } = useDateState();
  const data = useDiaryState();
  const filteredData = getMonthlyData(pivotDate, data);
  const sortedData = filteredData.toSorted((a, b) => {
    const aCreatedDate = Number(a.createdDate);
    const bCreatedDate = Number(b.createdDate);

    if (sort === 'latest') {
      return bCreatedDate - aCreatedDate;
    } else {
      return aCreatedDate - bCreatedDate;
    }
  });

  const nav = useNavigate();

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  return (
    <>
      <div className="flex gap-3">
        <select
          name="sort"
          id="sort"
          aria-label="일기 정렬"
          className="cursor-pointer rounded-[5px] bg-gray-100 px-5 py-2.5"
          onChange={handleSortChange}
        >
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>
        <Button variant="POSITIVE" className="grow" onClick={() => nav('new')}>
          새 일기 쓰기
        </Button>
      </div>
      <ul>
        {sortedData.map((item) => (
          <li key={item.id}>
            <DiaryItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
