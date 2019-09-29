export default class ImageLazyload {
  constructor (el, options) {
    this.el = el
    this.elements = document.querySelectorAll(this.el)
    // console.log(Array.from(this.elements))
    this.elements = Array.from(this.elements)
    console.log(this.elements)
    const settings = {
      // 起始点
      threshold: 0,
      // failure_limit   : 0,
      event: 'scroll',
      // effect          : "show",
      container: window,
      data_attribute: 'src',
      skip_invisible: false,
      appear: null,
      loaded: null,
      placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
    }
    // Object.assign是第一层深拷贝，后面层浅拷贝
    // this.settings = Object.assign(settings, options)
    this.settings = {
      ...settings,
      ...options
    }
    // 定义图片自定义处理事件
    this.appearEvent = new CustomEvent('appear')

    // 执行初始化
    this.init()
  }

  init () {
    this.elements.forEach((el, key, parent) => {
      // console.log(value, key, parent)
      console.log(el.tagName)
      // 如果是图片，就先给图片设置默认展示图
      if (el.tagName === 'IMG') {
        console.log(typeof el.src)
        if (el.src === '') {
          el.src = this.settings.placeholder
        }
      }

      // 1、绑定自定义事件 once要设定为true，只触发一次
      el.addEventListener('appear', (e) => {
        // console.log('appear', e, el)
        const original = el.getAttribute('data-' + this.settings.data_attribute)
        const imgObj = document.createElement('img')
        imgObj.addEventListener('load', () => {
          el.style.display = 'none'
          if (el.tagName === 'IMG') {
            el.src = original
          } else if (el.style.backgroundImage.length < 6) {
            el.style.backgroundImage = 'url(' + original + ')'
          }
          // $el[settings.effect](settings.effect_speed);
          // $el.css("display", "");//clean display
          el.style.display = '' // clean display
          el.loaded = true
          // el.setAttribute('data-' + s.data_attribute + '-loaded', '1') // clean display
          /* Remove image from array so it is not looped next time. */
          // 这个地方感觉有性能瓶颈，值得优化下。
          this.elements = this.elements.filter(v => !v.loaded)
          console.log(this.elements.length, this.elements)

          // 这个是回调
          if (this.settings.loaded) {
            this.settings.loaded.call(this, el)
          }
        })
        imgObj.src = original
      }, { once: true })

      /* Force initial check if images should appear. */
    })

    // 2、绑定加载功能
    if (this.settings.event.indexOf('scroll') === 0) {
      this.settings.container.addEventListener('scroll', (e) => {
        // console.log(e)
        this.update()
      })
    }

    // 加载完成的执行
    window.addEventListener('load', () => {
      this.update()
    })

    // resize的时候执行
    window.addEventListener('resize', () => {
      this.update()
    })

    // window.onload = function () {
    //   // 走这个了
    //   console.log('走这个了')
    //   // this.update()
    // }
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
