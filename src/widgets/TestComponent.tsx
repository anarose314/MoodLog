import { useState } from '../../node_modules/react';

export const BadComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        style={{ backgroundColor: 'blue', padding: '10px', marginTop: '5px' }}
      >
        <div>
          <div>
            <p>과도한 중첩 구조입니다.</p>

            <img
              src="/dummy-icon.png"
              alt="그냥 예쁘라고 넣은 장식용 별 모양 아이콘입니다"
            />

            <button aria-label="닫기 버튼" onClick={() => setIsOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
