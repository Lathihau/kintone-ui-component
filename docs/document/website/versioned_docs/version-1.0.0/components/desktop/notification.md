---
id: version-1.0.0-notification
title: Notification
sidebar_label: Notification
original_id: notification
---

## Overview

The Notification component allows the user to display pop-up notifications.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-notification--documentinfo" title="notification info image" height="70px"></iframe>

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-notification--documentsuccess" title="notification success image" height="70px"></iframe>

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=desktop-notification--documenterror" title="notification error image" height="70px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| text | string | ""  | Text to be displayed | |
| type | string | "danger"  | Background color | Available options:<br>"danger" : Red (#e74c3c)<br>"info" : Blue (#3498db)<br>"success" : Green (#91c36c) |

### Constructor

Notification(options)<br>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties |  |

### Method

Here is a list of available methods:

#### open()
Show the Notification

##### Parameter
none

##### Return
none

#### close()
Hide the Notification

##### Parameter
none

##### Return
none

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const notification = new Kuc.Notification({
  text:  'Error occurred!',
  type: 'danger',
  className: 'options-class'
});
notification.open();
notification.close();
```
