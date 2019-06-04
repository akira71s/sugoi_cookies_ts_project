module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {//"./src/ts/app.ts",
      'dist/iframe': './src/ts/iframe/app.ts',
      'dist/popup': './src/ts/popup/popup.ts',
      'dist/bg': './src/ts/bg/background.ts',
      'dist/contents': './src/ts/contents/content.ts',
      'dist/writers': './src/ts/contents/writers.ts'
    },// ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/src`,
      // 出力ファイル名
      filename: "[name].bundle.js"
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        }
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      extensions: [".ts"],
      // Webpackで利用するときの設定
      alias: {
        vue: "vue/dist/vue.js"
      }
    }
  };