import type { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
}

export default function Header({ leftChild, title, rightChild }: HeaderProps) {
  return (
    <header className="mb-5 border-b border-b-gray-300 py-5">
      <ul className="grid w-full grid-cols-3 items-center">
        <li className="justify-self-start">{leftChild}</li>
        <li className="justify-self-center">{title}</li>
        <li className="justify-self-end">{rightChild}</li>
      </ul>
    </header>
  );
}
