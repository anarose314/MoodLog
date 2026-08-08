import { useDateState } from '@/entities/diary/model/DiaryContext';
import Button from '@/shared/ui/Button';
import Header from '@/shared/ui/Header';

export default function MonthHeader() {
  const { pivotDate, setPivotDate } = useDateState();
  const title = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  const handleDecreaseMonth = () => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };
  const handleIncreaseMonth = () => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <Header
      title={title}
      leftChild={<Button onClick={handleDecreaseMonth}>&lt;</Button>}
      rightChild={<Button onClick={handleIncreaseMonth}>&gt;</Button>}
    />
  );
}
