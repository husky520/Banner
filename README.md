# 轮播图插件

## 使用方法:
1. 在页面中添加 HTML 代码部分, 可根据需要在 `.banner-body` 中的 `<li></li>` 标签中添加自己的内容;
2. 为了页面的响应式设计, 请在 `<head></head>` 标签内最前面添加 `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">` ;
3. 引入CSS样式表: `<link rel="stylesheet" href="css/banner.css">` ;
4. 引入jQuery文件: `<script src="js/jquery-1.11.3-min.js"></script>` ;
5. 引入JavaScript文件: `<script src="js/banner.js"></script>` ;
6. 修改Banner背景图片.

## 响应式设计
|设备宽度| 786px以下 | 786px ~ 992px | 992px ~ 1200px | 1200px以上 |
|:-:|:-:|:-:|:-:|:-:|
|轮播图高度| 350px | 350px | 415px | 500px |

## 特色
1.键盘控制
支持键盘方向键 <kbd>←</kbd> 和 <kbd>→</kbd> 控制轮播图;
2.切换速度可调
`js\banner.js`文件中，`banner`对象的`speed`属性即为轮播图切换的时间间隔;
