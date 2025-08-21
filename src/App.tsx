import {
  Alerts,
  ConfirmDialog,
  SimpleDialog,
  SimpleMenus,
} from '@components/modals';
import { Button } from '@components/Button';
import { useToggle } from '@hooks/useToggle';

function App() {
  const [isAlertsOpen, toggleAlerts, , closeAlerts] = useToggle(false);
  const [isTitleDialogOpen, toggleTitleDialog, , closeTitleDialog] =
    useToggle(false);
  const [isLocationDialogOpen, toggleLocationDialog, , closeLocationDialog] =
    useToggle(false);
  const [isSimpleDialogOpen, toggleSimpleDialog, , closeSimpleDialog] =
    useToggle(false);
  const [isSimpleMenusOpen, toggleSimpleMenus, , closeSimpleMenus] =
    useToggle(false);

  return (
    <div className="flex min-h-screen items-center justify-center gap-6 bg-gray-100">
      <Button onClick={toggleAlerts}>삭제</Button>
      <Button onClick={toggleTitleDialog}>제목 선택</Button>
      <Button onClick={toggleLocationDialog}>위치 정보 동의</Button>
      <Button onClick={toggleSimpleDialog}>계정 선택</Button>
      <Button onClick={toggleSimpleMenus}>알림 권한</Button>

      <Alerts
        isModalOpen={isAlertsOpen}
        closeModal={closeAlerts}
        message="초안을 삭제하시겠습니까?"
        actions={[
          {
            label: '취소',
            onClick: closeAlerts,
          },
          {
            label: '삭제',
            onClick: () => confirm('삭제'),
          },
        ]}
      />

      <ConfirmDialog
        title="Title"
        isModalOpen={isTitleDialogOpen}
        closeModal={closeTitleDialog}
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
            onClick: closeTitleDialog,
          },
          {
            label: '선택',
            onClick: () => confirm('선택'),
          },
        ]}
      />

      <ConfirmDialog
        title="위치 정보 동의"
        isModalOpen={isLocationDialogOpen}
        closeModal={closeLocationDialog}
        content="Google에서 앱의 위치 파악을 지원하도록 동의하시겠습니까?"
        actions={[
          {
            label: '취소',
            onClick: closeLocationDialog,
          },
          {
            label: '동의',
            onClick: () => confirm('동의'),
          },
        ]}
      />

      <SimpleDialog
        title="계정 목록"
        isModalOpen={isSimpleDialogOpen}
        closeModal={closeSimpleDialog}
      >
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

      <SimpleMenus
        isModalOpen={isSimpleMenusOpen}
        closeModal={closeSimpleMenus}
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
