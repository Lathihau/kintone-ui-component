---
id: version-1.0.0-dropdown
title: Dropdown
sidebar_label: Dropdown
original_id: dropdown
---

## Overview

The Dropdown component allows the user to select one out of several options.

<div class='sample-container'>
  <div id='sample-container__components'></div>
</div>
<script src="/js/samples/dropdown.js"></script>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name  | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or empty |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| value | string | ""  | Selected value | No option will be selected if the value is unspecified |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| items | Array\<Item\> | []  | List of options to display | Will result an error if the value of items is not an array |
| Item.label | string | null | Text label for each option | If `Item.label` is unspecified, the value of Item.value is displayed on the UI |
| Item.value | string | null | Value of each option | Will result an error if there is duplicated value in Item.value |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue : Value before the change<br>event.detail.value : Value after changing |

### Constructor

Dropdown(options)<br>
Here is a list of available constructors:

#### Parameter

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | {} | Object that includes component properties | |

---
## Sample Code

Here is a sample code when all parameters are specified:

```javascript
const space = kintone.app.record.getSpaceElement('space');
const dropdown = new Kuc.Dropdown({
  label: 'Fruit',
  requiredIcon: true,
  items: [
    {
      label: 'orange',
      value: 'Orange'
    },
    {
      label: 'apple',
      value: 'Apple'
    }
  ],
  value:  'Orange',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(dropdown);

dropdown.addEventListener('change', event => {
  console.log(event);
});
```
