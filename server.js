const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 서빙을 위한 미들웨어
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// 메인 페이지 라우트
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// DeepLink 테스트를 위한 API 엔드포인트
app.get("/api/deeplink", (req, res) => {
    const { scheme, data } = req.query;

    // 더미 데이터 생성
    const dummyData = {
        userId: "test_user_123",
        token: "dummy_token_abc123",
        timestamp: new Date().toISOString(),
        platform: "web",
        ...(data && JSON.parse(data)),
    };

    res.json({
        success: true,
        scheme: scheme || "myapp",
        data: dummyData,
        message: "DeepLink 데이터가 준비되었습니다.",
    });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(
        `🚀 DeepLink DEMO 서버가 http://localhost:${PORT} 에서 실행 중입니다.`
    );
    console.log(`📱 DeepLink 테스트를 위해 브라우저에서 접속하세요.`);
});

module.exports = app;
