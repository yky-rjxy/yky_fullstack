# 人生总要切一次阿里页面

1. 有标注图
  来自于设计师  标注好尺寸
  在设计的时， 用的大小是750px,
2. html结构的快速输入方式 emmet
  使用css 选择器的语法
  .tb_header>h2>img
  - div 标签不用写
  - > 是什么意思？ 子元素

3. 大厂css考点之布局方案
  同学， 请问下你能说下有哪些比较高级的display用法吗？
  display 显示 inline行内元素 a span /block 块级元素 做容器 div ul li h2  独占一行
  行内元素不能设置宽与高
  块级元素可以设置但是独自一行

  在父元素上使用display: table，在其子元素上使用display: table-cell
  可以让多个子元素在一行内显示， 如同表格里的单元格一样，我在阿里双11的demo里学到的。