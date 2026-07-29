// 1. 절대 경로(@/...)가 아닌 불필요한 상대 경로 사용
import { useState } from '../../node_modules/react';

export const BadComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 2. 시맨틱 태그(main, section 등) 대신 무의미한 div 남용
    <div>
      {/* 3. Tailwind CSS v4를 놔두고 인라인 스타일 남용 */}
      <div
        style={{ backgroundColor: 'blue', padding: '10px', marginTop: '5px' }}
      >
        <div>
          <div>
            {/* 4. 불필요하게 깊은 뎁스(Depth)의 과도한 중첩 */}
            <p>과도한 중첩 구조입니다.</p>

            {/* 5. 의미 없는 장식용 이미지인데 alt 속성을 비우지 않고 구구절절 작성함 */}
            <img
              src="/dummy-icon.png"
              alt="그냥 예쁘라고 넣은 장식용 별 모양 아이콘입니다"
            />

            {/* 6. 불필요한 ARIA 레이블 남용 */}
            <button aria-label="닫기 버튼" onClick={() => setIsOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
