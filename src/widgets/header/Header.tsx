import { useState } from 'react';
import Button from '@/shared/ui/Button';

export default function Header() {
  const [pivotDate, setPivotDate] = useState(new Date());
  const title = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

  const handleDecreaseMonth = () => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };
  const handleIncreaseMonth = () => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <header className="mb-5 border-b border-b-gray-300 py-5">
      <ul className="flex w-full items-center justify-between">
        <li>
          <Button onClick={handleDecreaseMonth}>&lt;</Button>
        </li>
        <li>
          <p>{title}</p>
        </li>
        <li>
          <Button onClick={handleIncreaseMonth}>&gt;</Button>
        </li>
      </ul>
    </header>
  );
}
