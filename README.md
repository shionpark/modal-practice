# Modal 

모달 UI와 기본적인 기능을 구현한 과제입니다.

## 기술 스택

| 카테고리 | 기술 |
| --- | --- | 
| 언어 | TypeScript |
| 라이브러리 | React
| 상태 관리 | useState |
| 스타일링 | Tailwind | 
| 테스트 | Vitest |
| 배포 | Vercel |

## 주요 기능

- **버튼 클릭 시 모달 열고 닫기**
- **외부 클릭으로 닫기**: 모달 바깥을 클릭하면 모달이 닫힘
- **키보드로 제어하기**: ESC 키로 닫기, Enter 키로 확인하기
- **확인/취소 결과 처리**: 사용자에게 무언가를 확인받는 모달에서 이후 결과 처리

## 폴더 구조

```bash
modal-practice/
├── public/                 # 정적 리소스
├── src
│   ├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   └── styles/             # 글로벌 스타일
├── eslint.config.js        # 코드 스타일 규칙
├── package.json            # 프로젝트 메타 정보 및 의존성
├── vite.config.ts          # 빌드 및 개발 서버 설정
├── tsconfig.json           # 경로 alias 및 컴파일 옵션
└── tailwind.config.ts      # Tailwind CSS 설정
```

## 실행 방법

```bash
# 설치
pnpm install
# 개발 서버 실행
pnpm dev
```