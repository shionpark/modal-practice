import { useCallback, useMemo } from 'react';

import { AccountItem, Button, OptionItem } from '@components/common';
import { Alerts, Dialog } from '@components/modals';
import { useToggle } from '@hooks/modals';

function App() {
  const onConfirmMessage = useCallback(
    (message: string) => confirm(message),
    []
  );

  const onDeleteConfirm = useCallback(
    () => onConfirmMessage('삭제'),
    [onConfirmMessage]
  );
  const onSelectConfirm = useCallback(
    () => onConfirmMessage('선택'),
    [onConfirmMessage]
  );
  const onAgreeConfirm = useCallback(
    () => onConfirmMessage('동의'),
    [onConfirmMessage]
  );

  const [isAlertsOpen, , openAlerts, closeAlerts] = useToggle(false);

  const alertsActions = useMemo(
    () => [
      {
        label: '취소',
        onClick: closeAlerts,
      },
      {
        label: '삭제',
        onClick: onDeleteConfirm,
      },
    ],
    [closeAlerts, onDeleteConfirm]
  );

  const [isOptionsOpen, , openOptions, closeOptions] = useToggle(false);

  const optionsActions = useMemo(
    () => [
      {
        label: '취소',
        onClick: closeOptions,
      },
      {
        label: '선택',
        onClick: onSelectConfirm,
      },
    ],
    [closeOptions, onSelectConfirm]
  );

  const options = useMemo(
    () => [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
      { id: 'option3', label: 'Option 3' },
    ],
    []
  );

  const [
    isLocationAgreementOpen,
    ,
    openLocationAgreement,
    closeLocationAgreement,
  ] = useToggle(false);

  const locationAgreementActions = useMemo(
    () => [
      {
        label: '취소',
        onClick: closeLocationAgreement,
      },
      {
        label: '동의',
        onClick: onAgreeConfirm,
      },
    ],
    [closeLocationAgreement, onAgreeConfirm]
  );

  const [isAccountListOpen, , openAccountList, closeAccountList] =
    useToggle(false);

  const accountList = useMemo(
    () => (
      <div className="flex flex-col gap-2">
        <AccountItem email="username@gmail.com" />
        <AccountItem email="username2@gmail.com" />
      </div>
    ),
    []
  );

  return (
    <div className="flex min-h-screen items-center justify-center gap-6 bg-gray-100">
      <Button onClick={openAlerts}>삭제</Button>
      <Button onClick={openOptions}>제목 선택</Button>
      <Button onClick={openLocationAgreement}>위치 정보 동의</Button>
      <Button onClick={openAccountList}>계정 선택</Button>

      <Alerts
        isModalOpen={isAlertsOpen}
        closeModal={closeAlerts}
        message="초안을 삭제하시겠습니까?"
        actions={alertsActions}
      />

      <Dialog
        title="메뉴 선택"
        isModalOpen={isOptionsOpen}
        closeModal={closeOptions}
        actions={optionsActions}
      >
        <ul className="flex max-h-[10rem] w-[12rem] flex-col overflow-y-auto">
          {options.map(({ id, label }) => (
            <OptionItem key={id} id={id} label={label} />
          ))}
        </ul>
      </Dialog>

      <Dialog
        title="위치 정보 동의"
        isModalOpen={isLocationAgreementOpen}
        closeModal={closeLocationAgreement}
        actions={locationAgreementActions}
      >
        <p>Google에서 앱의 위치 파악을 지원하도록 동의하시겠습니까?</p>
      </Dialog>

      <Dialog
        title="계정 목록"
        isModalOpen={isAccountListOpen}
        closeModal={closeAccountList}
      >
        {accountList}
      </Dialog>
    </div>
  );
}

export default App;
