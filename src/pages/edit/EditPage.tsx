import { useParams } from 'react-router-dom';

export default function EditPage() {
  const params = useParams();

  return (
    <>
      <div className="">{params.id}번 일기 편집</div>
    </>
  );
}
