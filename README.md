# DeepLink DEMO 웹서버

DeepLink 테스트를 위한 Node.js 기반 웹서버입니다. URL Scheme을 통해 모바일 애플리케이션을 실행하고, 더미 데이터를 전달하는 기능을 제공합니다.

## 🚀 주요 기능

-   **URL Scheme 테스트**: 웹에서 모바일 앱의 DeepLink 실행
-   **앱 설치 감지**: 앱이 설치되어 있지 않을 때 설치 안내 표시
-   **더미 데이터 전달**: 테스트용 인증 정보 및 데이터 전송
-   **실시간 결과 확인**: DeepLink 실행 결과 및 전달된 데이터 확인

## 📋 사전 요구사항

-   Node.js (v14 이상)
-   npm 또는 yarn

## 🛠️ 설치 및 실행

1. **의존성 설치**

    ```bash
    npm install
    ```

2. **서버 실행**

    ```bash
    npm start
    ```

3. **개발 모드 실행** (nodemon 사용)

    ```bash
    npm run dev
    ```

4. **브라우저에서 접속**
    ```
    http://localhost:3000
    ```

## 📱 사용 방법

### 1. 기본 DeepLink 테스트

-   URL Scheme 입력 (예: `myapp://`)
-   "앱 실행" 버튼 클릭
-   앱이 설치되어 있으면 실행, 없으면 설치 안내 표시

### 2. 더미 데이터 전달 테스트

-   URL Scheme 입력
-   더미 데이터 입력 (JSON 형식):
    ```json
    {
        "userId": "test123",
        "token": "dummy_token",
        "action": "login"
    }
    ```
-   "앱 실행" 버튼 클릭

### 3. 앱 설치 테스트

-   "앱 설치 테스트" 버튼 클릭
-   앱이 설치되어 있지 않을 때의 동작 확인

## 🔧 API 엔드포인트

### GET /api/deeplink

DeepLink 데이터를 생성하고 반환합니다.

**쿼리 파라미터:**

-   `scheme`: URL Scheme (기본값: "myapp")
-   `data`: 전달할 더미 데이터 (JSON 문자열)

**응답 예시:**

```json
{
    "success": true,
    "scheme": "myapp",
    "data": {
        "userId": "test_user_123",
        "token": "dummy_token_abc123",
        "timestamp": "2024-01-01T00:00:00.000Z",
        "platform": "web"
    },
    "message": "DeepLink 데이터가 준비되었습니다."
}
```

## 📁 프로젝트 구조

```
deeplink-demo/
├── package.json          # 프로젝트 설정 및 의존성
├── server.js             # Express 서버 메인 파일
├── public/               # 정적 파일 디렉토리
│   └── index.html        # DeepLink 테스트 페이지
└── README.md             # 프로젝트 문서
```

## 🎯 테스트 시나리오

### 시나리오 1: 기본 DeepLink 실행

1. URL Scheme에 `myapp://` 입력
2. "앱 실행" 버튼 클릭
3. 앱이 실행되거나 설치 안내 표시 확인

### 시나리오 2: 인증 데이터 전달

1. URL Scheme에 `myapp://` 입력
2. 더미 데이터에 인증 정보 입력:
    ```json
    {
        "userId": "user123",
        "token": "auth_token_xyz",
        "action": "auto_login"
    }
    ```
3. "앱 실행" 버튼 클릭
4. 앱에서 전달된 데이터 확인

### 시나리오 3: 앱 미설치 상황 테스트

1. "앱 설치 테스트" 버튼 클릭
2. 설치 안내 메시지 및 앱스토어 이동 버튼 확인

## 🔍 디버깅

### 브라우저 개발자 도구

-   **Console**: JavaScript 오류 및 로그 확인
-   **Network**: API 요청/응답 확인
-   **Application**: 로컬 스토리지 및 세션 확인

### 서버 로그

서버 실행 시 콘솔에서 다음 정보를 확인할 수 있습니다:

-   서버 시작 메시지
-   API 요청 로그
-   오류 메시지

## 🛡️ 보안 고려사항

-   실제 프로덕션 환경에서는 HTTPS 사용 권장
-   민감한 데이터 전달 시 암호화 고려
-   URL Scheme 검증 및 화이트리스트 적용

## 📞 지원

문제가 발생하거나 질문이 있으시면 이슈를 등록해 주세요.

## 📄 라이선스

MIT License
# deeplink-test
