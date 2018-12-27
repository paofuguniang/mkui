---
order: 4
title:
  zh-CN: 幽灵标签
  en-US: Ghost Tag
---

## zh-CN

幽灵按钮将标签的内容反色，背景变为透明，常用在有色背景上。

## en-US

Select your favourite topics.

````jsx
import { Tag } from 'antd';

ReactDOM.render(
  <div>
    <Tag type="normal" size="small">默认</Tag>
    <Tag type="success" size="small">success</Tag>
    <Tag type="warning" size="small">warning</Tag>
    <br />
    <Tag type="normal" size="small" ghost>默认</Tag>
    <Tag type="success" size="small" ghost>success</Tag>
    <Tag type="warning" size="small" ghost>warning</Tag>
    <br />
    <Tag type="mk" color="blue">blue</Tag>
    <Tag type="mk" color="red"/*  */>red</Tag>
    <Tag type="mk" color="purple">purple</Tag>
    <br />
    <Tag type="mk" color="blue" ghost>blue</Tag>
    <Tag type="mk" color="red" ghost>red</Tag>
    <Tag type="mk" color="purple" ghost>purple</Tag>
  </div>,
  mountNode);
````