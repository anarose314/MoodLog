import Button from '@/shared/ui/Button';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="border-b border-b-gray-300 py-5">
      <ul className="flex w-full items-center justify-between">
        <li>
          <Button>&lt;</Button>
        </li>
        <li>
          <p>{title}</p>
        </li>
        <li>
          <Button>&gt;</Button>
        </li>
      </ul>
    </header>
  );
}
