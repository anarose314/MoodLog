import Button from '@/shared/ui/Button';
import Header from '@/shared/ui/Header';

export default function NewHeader() {
  return (
    <Header title="새 일기 쓰기" leftChild={<Button>&lt; 뒤로 가기</Button>} />
  );
}
