export default class ImageLazyload {
  constructor (el, options) {
    this.el = el
    this.elements = document.querySelectorAll(this.el)
    console.log(this.elements)
    const settings = {
      // 起始点
      threshold: 0,
      // failure_limit   : 0,
      event: 'scroll',
      // effect          : "show",
      container: window,
      data_attribute: 'original',
      skip_invisible: false,
      appear: null,
      load: null,
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
    }
    // Object.assign是第一层深拷贝，后面层浅拷贝
    // this.settings = Object.assign(settings, options)
    this.settings = {
      ...settings,
      ...options
    }

    this.appearEvent = new CustomEvent('appear', {
      detail: {
        a: 1
      }
    })

    this.init()
  }

  init () {
    console.log(this.elements)

    window.addEventListener('appear', e => {
      console.log(e)
      console.log(e.detail.a) // 1
    })

    // 1、先初始化所有图片的加载事件  once要设定为true，只触发一次
    this.elements.forEach((el, key, parent) => {
      // console.log(value, key, parent)
      el.addEventListener('appear', (e) => {
        console.log('appear', e, el)
      }, { once: true })
    })

    // 2、绑定加载功能
    if (this.settings.event.indexOf('scroll') === 0) {
      this.settings.container.addEventListener('scroll', (e) => {
        // console.log(e)
        this.update()
      })
    }
  }

  update () {
    // 遍历img元素，判断是否在可见区域里，如果在，则调用当前图片的加载

    this.elements.forEach((el, key, parent) => {
      // console.log(value, key, parent)
      console.log('update')
      // 随后在对应的元素上触发该事件
      this.dispatchEvent(el, event)
    })
  }

  dispatchEvent (el, event) {
    if (el.dispatchEvent) {
      el.dispatchEvent(this.appearEvent)
    } else {
      el.fireEvent(this.appearEvent)
    }
  }
}
