## 1. ソースコードを手元にコピーする
### 方法1. git clone
gitが入っていない場合はインストールから

- Macの場合: https://dotstud.io/blog/setup-new-mac-app/#git
- Windowsの場合: http://qiita.com/taipon_rock/items/632c117220e57d555099

以下を実行
```
git clone git@github.com:dotstudio/wionode_handson.git
```
実行した場所にwionode_hanson-masterというディレクトリが作成されます。

任意のディレクトリ名をつけたい場合は以下
```
git clone git@github.com:dotstudio/wionode_handson.git <任意のディレクトリ名>
```

### 方法2. zipでダウンロード
ダウンロード後解凍、作業したいディレクトリにコピーする

## 2. パッケージのインストール
コピーしたディレクトリのapp.jsがある場所で以下を実行
```
npm i
```

## 3. プログラムを実行
tokenはWioアプリのView APIから確認する。`?access_token=`の後の文字列。
```
node app.js <自分のTOKEN>
```
