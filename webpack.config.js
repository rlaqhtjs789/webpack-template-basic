//import
const path = require('path');
const Htmlplugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//export
module.exports = {
    // pacel index.html >> pacel 진입점(html)
    // 파일을 읽어들이기 씨작하는 진입점 설정(webpack의 진입점은 js)
    entry: './js/main.js',


    // 결과물(번들)을 반환하는 설정
    output: {
        //pacel dist 처럼 기본폴더명을 설정할수잇음
        //__dirname ==> 파일명의 변수를 의미(언제든지선언가능)
        // path, filename을 구지 옵션설정하지 않아도 dist파일 자동생성해서 담아줌(생략해도 된다는 의미)
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        // clean : 파일을 자주 생성할시 생성때마다 알아서 잘지워줌(기존생성파일 자동 삭제)
        clean: true
    },

    module: {
        rules: [
            {         // 정규표현식 >> css확장자를 가진파일 분류  
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
    plugins: [
        new Htmlplugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}