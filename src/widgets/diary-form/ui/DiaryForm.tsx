import Button from '@/shared/ui/Button';
import { cn } from '@/shared/utils/cn';
import EmotionRadio from './EmotionRadio';
import FormSection from './FormSection';

const FORM_STYLE = cn('rounded-md bg-gray-100 px-3 py-2');

export default function DiaryForm() {
  return (
    <form action="#" className="flex flex-col gap-6">
      <FormSection title="오늘의 날짜">
        <input type="date" className={FORM_STYLE} />
      </FormSection>
      <FormSection title="오늘의 감정">
        <ul className="grid grid-cols-5 gap-3">
          <EmotionRadio />
        </ul>
      </FormSection>
      <FormSection title="오늘의 일기">
        <textarea
          name="content"
          id="content"
          placeholder="오늘은 어땠나요?"
          className={cn(FORM_STYLE, 'min-h-50 w-full resize-none')}
        ></textarea>
      </FormSection>
      <div className="flex justify-between pt-3">
        <Button>취소하기</Button>
        <Button type="submit" variant="POSITIVE">
          작성 완료
        </Button>
      </div>
    </form>
  );
}
