# Puppeteer_mhtml_downloader
Puppeteer を使用して mhtml のダウンロードを試みる  

mhtmlto とは  

```
対象 Web ページの HTML ファイルや CSS ファイル、画像ファイルをまとめてダウンロードします。
この形式を選択した場合、 MHTML 形式のファイルとしてダウンロードが行われます。ファイルの拡張子は .mhtml です。 MHTML 形式とは HTML ファイルと画像や CSS ファイルなど Web ページを構成する複数のファイルをを MIME のマルチパートの仕組みを使ってまとめたものです。
Google Chrome は MHTML 形式のファイルに対応しているので、ダウンロードした MHTML ファイルをブラウザで開いてみると、元となっている Web ページと同じように表示することができます。
ダウンロードした MHTML ファイルをテキストエディタで開いてみると、 HTML ファイル、 CSS ファイル、画像ファイル、がそれぞれパートに分かれて記述されています。
```

参考:
 
- https://qiita.com/orange634nty/items/8971bfa9349125ba0a78
   - kibelaが想定されている
- save page as mhtml
   - https://github.com/puppeteer/puppeteer/issues/3575
