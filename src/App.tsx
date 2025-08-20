import { Alerts } from './components/modals/Alerts';
import { ConfirmDialog } from './components/modals/ConfirmDialog';
import { SimpleDialog } from './components/modals/SimpleDialog';
import { ToggleMenus } from './components/modals/ToggleMenus';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100">
      <Alerts
        message="초안을 삭제하시겠습니까?"
        actions={[
          {
            label: '취소',
            onClick: () => confirm('취소'),
          },
          {
            label: '삭제',
            onClick: () => confirm('삭제'),
          },
        ]}
      />
      <ConfirmDialog
        title="Title"
        content={
          <ul className="flex max-h-[10rem] w-[12rem] flex-col overflow-y-auto">
            <li className="flex gap-2 py-2">
              <input type="checkbox" aria-label="option1" />
              <span>Option 1</span>
            </li>
            <li className="flex gap-2 py-2">
              <input type="checkbox" aria-label="option2" />
              <span>Option 2</span>
            </li>
            <li className="flex gap-2 py-2">
              <input type="checkbox" aria-label="option3" />
              <span>Option 3</span>
            </li>
          </ul>
        }
        actions={[
          {
            label: '취소',
            onClick: () => confirm('취소'),
          },
          {
            label: '동의',
            onClick: () => confirm('동의'),
          },
        ]}
      />
      <ConfirmDialog
        title="위치 정보 동의"
        content="Google에서 앱의 위치 파악을 지원하도록 동의하시겠습니까?"
        actions={[
          {
            label: '취소',
            onClick: () => confirm('취소'),
          },
          {
            label: '동의',
            onClick: () => confirm('동의'),
          },
        ]}
      />
      <SimpleDialog title="계정 설정">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-black p-5" />
          <span>username@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-black p-5" />
          <span>username@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-black p-5" />
          <span>username@gmail.com</span>
        </div>
      </SimpleDialog>
      <ToggleMenus
        menus={[
          {
            label: '모든 알림 보여주기',
            onClick: () => confirm('모든 알림 보여주기'),
          },
          {
            label: '민감한 알림 숨기기',
            onClick: () => confirm('민감한 알림 숨기기'),
          },
          {
            label: '모든 알림 숨기기',
            onClick: () => confirm('모든 알림 숨기기'),
          },
        ]}
      />
    </div>
  );
}

export default App;
