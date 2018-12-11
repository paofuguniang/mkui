---
order: 4
title:
  zh-CN: 标签尺寸
  en-US: Size
---

## zh-CN

标签有两种尺寸。

通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为大。

## en-US

Select your favourite topics.

````jsx
import { Tag } from 'antd';

ReactDOM.render(
  <div>
    <Tag type="normal">默认</Tag>
    <Tag type="normal" size="small">默认</Tag>
    <br />
    <Tag type="success" size="large">success</Tag>
    <Tag type="success" size="small">success</Tag>
    <br />
    <Tag type="warning" size="large">warning</Tag>
    <Tag type="warning" size="small">warning</Tag>
  </div>,
  mountNode);
````