import Router from '@/app/routes/Router';
import { DiaryProvider } from '@/entities/diary/model/DiaryContext';

function App() {
  return (
    <DiaryProvider>
      <Router />
    </DiaryProvider>
  );
}

export default App;
