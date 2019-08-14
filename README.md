# outside-click-js

点击指定元素外可以触发事件，借鉴`v-click-outside`，因为其是`Vue`指令化的，不能用于非`Vue`下使用

## Install

```bash
$ npm install outside-click-js
#or
$ yarn add outside-click-js
```

## Use

1. `script`

```html
<body>
  <div>outside</div>
  <div id="click">click</div>

  <script src="/dist/outside-click-js.min.js"></script>
  <script>
    window.onload = function (params) {
      const div = document.querySelector('#click')
      const { clickOutside } = window.$outsideClick
      clickOutside({
        el: div,
        handler: () => {
          console.log('outsideClick')
        }
      })
    }
  </script>
</body>

```

2. `require` or `import`

```js
// require
const { clickOutside, removeClickOutside } = require('outside-click-js')
// or import
import { clickOutside, removeClickOutside } from 'outside-click-js'

const div = document.querySelector('#click')
clickOutside({
  el: div,
  handler: () => {
    console.log('outsideClick')
  }
})
// remove
removeClickOutside(div)
```

## Config

### `clickOutside(options)`

options:

1. `el`(必要)`elementDOM`: 绑定的元素
2. `handler`(必要)`Function`: 触发的outside事件的函数，两个参数：
    1. `e`: 当前触发事件的event
    2. `el`: 绑定outsideClick事件的元素
3. `events`(可选) `Array`: 要触发的事件，默认`[click]`或者移动端下`[click, touchstart]`
4. `middleware`(可选) `Function`: 中间拦截器，返回值为`true`时执行`handler`,否则`false`拦截，两个参数同handler

### `removeClickOutside(target)`

`target`(可选)`elementDOM`: 默认是清除全部绑定的事件，如果传入元素，则清除对应元素的事件

# License

[MIT License](./LICENSE)
