// express 프레임워크 임포트
const express = require('express')
const app = express()
const PORT = 6600   // 포트 번호


// 경로 / 와 매핑
/**
 * 경로: /
 * 요청 HTTP 메소드: GET
 */
// 미들웨어 추가
app.use(express.static('./static'))


// 더미 데이터


app.get('/data', (req, res) => {
    const data = {
        id: '124125125',
        name: 'Chiho Won',
        myData: [1, 2, 3, ],
        timestamp: new Date(),
    }
    // data 객체를 json으로 서빙해줌
    // JSON: Javascript Object Notation
    res.json(data)
})


// 애플리케이션 시작!
app.listen(PORT, () => {
    console.log('애플리케이션이 시작됨.')
})
