module.exports = {
    // javascript의 기능을 한번에 제공, 명시따로 필요없음
    presets: ['@babel/preset-env'],
    // 비동기 함수사용시, 2차원 배열(배열안에 배열)로 명시
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}