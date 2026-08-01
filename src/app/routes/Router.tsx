import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DiaryPage } from '@/pages/diary';
import { EditPage } from '@/pages/edit';
import { HomePage } from '@/pages/home';
import { NewPage } from '@/pages/new';
import { NotFoundPage } from '@/pages/not-found';
import { Layout } from '@/widgets/layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/diary/:id" element={<DiaryPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
