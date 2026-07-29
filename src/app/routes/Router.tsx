import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Diary } from '@/pages/diary';
import { Home } from '@/pages/home';
import { New } from '@/pages/new';
import { NotFound } from '@/pages/not-found';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
