import { Button } from './Button';

export function Modal() {
  return (
    <div className="relative w-[500px] rounded-lg bg-white p-8 shadow-lg">
      <Button className="absolute top-4 right-4">X</Button>
      <h3>모달 제목</h3>
      <p>내용</p>
    </div>
  );
}
