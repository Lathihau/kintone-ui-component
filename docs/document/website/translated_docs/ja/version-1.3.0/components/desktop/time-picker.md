---
id: version-1.3.0-time-picker
title: TimePicker
sidebar_label: TimePicker
original_id: time-picker
---

## Overview

TimePicker は入力エリアと時間選択用のリストを表示します。

<div class='sample-container'>
  <div id='sample-container__components'></div>
</div>
<script src="/js/samples/time-picker.js"></script>

---

## Specification

### Property

使用できるプロパティの一覧です。プロパティを指定して値を更新することができます。

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | コンポーネントの class 名 | |
| error | string | ""  | エラーに表示するテキスト | 未指定、あるいは空文字の場合、error は表示されない |
| id | string | ""  | コンポーネントの id 名 | |
| label | string | ""  | コンポーネントの説明ラベル | 未指定、あるいは空文字の場合、label は表示されない |
| value | string | ""  | 表示するテキスト | フォーマットは HH:MM<br>以下の時間も指定できる（内部的に HH:MM に変換される）:<li>5:30</li><li>05:3</li><li>5:3</li>時間や分が 1文字の場合、0 が先頭に補完される<br>不正なフォーマットや値を指定した場合、エラーを出力する |
| disabled | boolean | false | コンポーネントの選択可/不可設定 | |
| hour12 | boolean | false | 時刻表記の設定 (12時間表記/24時間表記) デフォルトは 24時間表記 | 指定できるオプション:<br>true: 12時間表記<br>false: 24時間表記 |
| requiredIcon | boolean | false | コンポーネントの必須アイコン表示/非表示設定 | |
| visible | boolean | true | コンポーネントの表示/非表示設定 | |

### Event

指定できるイベントの一覧です。

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | 値が変更された時のイベントハンドラ | 引数には Event の event オブジェクトをとる<br><br>event.detail で以下の値を受け取ることができる<br>event.detail.oldValue : 変更前の value の値<br>event.detail.value : 変更後の value の値 |

### Constructor

TimePicker(options)<br>
使用できるコンストラクタの一覧です。

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | コンポーネントのプロパティを含むオブジェクト |  |

---
## Sample Code

全てのパラメータを指定した場合のサンプルコードです。

```javascript
const space = kintone.app.record.getSpaceElement('space');
const timePicker = new Kuc.TimePicker({
  label: 'Time',
  requiredIcon: true,
  hour12: false,
  value: '11:30',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(timePicker);

timePicker.addEventListener('change', event => {
  console.log(event);
});
```
