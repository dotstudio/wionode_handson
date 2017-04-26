## ソースコードを手元にコピーする
### 方法1. git clone
gitが入っていない場合はインストールから
#### Macの場合
参考: https://dotstud.io/blog/setup-new-mac-app/#git

#### Windowsの場合
参考: http://qiita.com/taipon_rock/items/632c117220e57d555099

#### git cloneを実行
実行した場所にwionode_hanson-masterというディレクトリが作成されます
```
git clone git@github.com:dotstudio/wionode_handson.git
```

任意のディレクトリ名をつけたい場合は以下
```
git clone git@github.com:dotstudio/wionode_handson.git <任意のディレクトリ名>
```

### 方法2. zipでダウンロード
ダウンロード後解答、作業ディレクトリにコピーする

## パッケージのインストール
コピーしたディレクトリのapp.jsがある場所で以下を実行
```
npm i
```

## プログラムを実行

```
node app.js <自分のTOKEN>
```
