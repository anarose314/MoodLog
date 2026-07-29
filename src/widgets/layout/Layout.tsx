import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';

export default function Layout() {
  return (
    <main className="shadow-box mx-auto min-h-screen max-w-150 bg-white px-5">
      <Header title={'2026.07.29'} />
      <Outlet />
    </main>
  );
}
