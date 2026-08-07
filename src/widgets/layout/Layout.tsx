import { Outlet } from 'react-router-dom';
import { DiaryProvider } from '@/entities/diary/model/DiaryContext';
import { Header } from '@/widgets/header';

export default function Layout() {
  return (
    <main className="shadow-box mx-auto min-h-screen max-w-150 bg-white px-5">
      <DiaryProvider>
        <Header />
        <Outlet />
      </DiaryProvider>
    </main>
  );
}
