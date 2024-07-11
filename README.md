# URL-Specific-JS-Executor
任意のページを開いたとき、指定したjavascriptを実行するGoogle Chrome拡張機能です

## 使用方法
- ファイルをダウンロードする
- 拡張機能を追加する
  - `chrome://extensions/`を開く
  - 右上の「デベロッパーモード」をONにする
  - 「パッケージ化されていない拡張機能を読み込む」をクリック
  - ダウンロードしたファイルを選択する

## 実行したいページを増やしたいとき
manifest.json の `content_scripts` を以下のように編集する。

```json
  "content_scripts": [
    {
      "matches": ["*://example1.com/*"],
      "js": ["javascript1.js"]
    }
    {
      "matches": ["*://example2.com/*"],
      "js": ["javascript2.js"]
    }
  ]
```
