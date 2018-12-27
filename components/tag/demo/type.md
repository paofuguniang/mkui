---
order: 4
title:
  zh-CN: 常见标签样式
  en-US: Type
---

## zh-CN

标签有三种常用样式。

通过设置 type 为 normal success warning 
生成不同样式的标签
如需设置其他颜色，也可以通过设置 type 为mk 再设置color

## en-US

Select your favourite topics.

````jsx
import { Tag } from 'antd';

ReactDOM.render(
  <div>
    <Tag type="normal">默认</Tag>
    <Tag type="success">mk-success</Tag>
    <Tag type="warning">mk-warning</Tag>
    <br />
    <Tag type="mk" color="blue">blue</Tag>
    <Tag type="mk" color="geekblue">geekblue</Tag>
    <Tag type="mk" color="purple">purple</Tag>
  </div>,
  mountNode);
````