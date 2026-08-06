import { DiaryItem } from '@/features/diary-item';
import Button from '@/shared/ui/Button';

export default function DiaryList() {
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
        <li>
          <DiaryItem emotionId={1} />
        </li>
        <li>
          <DiaryItem emotionId={2} />
        </li>
        <li>
          <DiaryItem emotionId={3} />
        </li>
        <li>
          <DiaryItem emotionId={4} />
        </li>
        <li>
          <DiaryItem emotionId={5} />
        </li>
      </ul>
    </>
  );
}
