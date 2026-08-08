import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main className="shadow-box mx-auto min-h-screen max-w-150 bg-white px-5">
      <Outlet />
    </main>
  );
}
