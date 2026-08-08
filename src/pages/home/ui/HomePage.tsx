import { DiaryList } from '@/widgets/diary-list';
import { MonthHeader } from '@/widgets/month-header';

export default function HomePage() {
  return (
    <>
      <MonthHeader />
      <DiaryList />
    </>
  );
}
