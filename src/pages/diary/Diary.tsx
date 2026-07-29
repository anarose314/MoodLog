import { useParams } from 'react-router-dom';

export default function Diary() {
  const parmas = useParams();

  return (
    <>
      <div className="">{parmas.id}번 일기</div>
    </>
  );
}
