import { checkInView } from './util'
const inBrowser = typeof window !== 'undefined'

export default class ImageLazyload {
  constructor (el, options) {
    if (!inBrowser) return
    this.el = el
    this.elements = document.querySelectorAll(this.el)
    // console.log(Array.from(this.elements))
    this.elements = Array.from(this.elements)
    // console.log(this.elements)
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
    this.settings = Object.assign(settings, options)
    // this.settings = {
    //   ...settings,
    //   ...options
    // }
    // 定义图片自定义处理事件
    this.appearEvent = new CustomEvent('appear')

    // 执行初始化
    this.init()
  }

  init () {
    // 1、绑定自定义事件 once要设定为true，只触发一次
    this.elements.forEach((el, key, parent) => {
      // 如果是图片，就先给图片设置默认展示图
      if (el.tagName === 'IMG') {
        // console.log(typeof el.src)
        if (el.src === '') {
          el.src = this.settings.placeholder
        }
      }

      el.addEventListener('appear', (e) => {
        // console.log('appear', e, el)
        const original = el.getAttribute('data-' + this.settings.data_attribute)
        const imgObj = document.createElement('img')
        imgObj.addEventListener('load', () => {
          el.style.display = 'none'
          if (el.tagName.toLowerCase() === 'img') {
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

          // 这个是回调
          if (this.settings.loaded) {
            this.settings.loaded.call(this, el)
          }
        })
        imgObj.src = original
      }, { once: true })
    })

    // 2、绑定加载功能
    if (this.settings.event.indexOf('scroll') === 0) {
      this.settings.container.addEventListener('scroll', (e) => {
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
  }

  update () {
    this.elements.forEach((img, key, parent) => {
      // console.log(value, key, parent)
      // 判断是不是在可见区域里
      // el.matches('')
      // if (this.settings.skip_invisible && !$this.is(':visible')) {
      //   return
      // }

      // 判断是否到达可加载区域内
      if (checkInView(img, this.settings.threshold)) {
        // console.log('在显示区域里', img)
        // 随后在对应的元素上触发该事件
        this.dispatchEvent(img, event)
      } else {
        // console.log('不在显示区域里', img)
      }
    })
  }

  dispatchEvent (img, event) {
    if (img.dispatchEvent) {
      img.dispatchEvent(this.appearEvent)
    } else {
      img.fireEvent(this.appearEvent)
    }
  }

  /*
  checkInView (img) {
    const rect = img.getBoundingClientRect()
    // console.log(rect)
    return (rect.top < (window.innerHeight + this.settings.threshold) && rect.bottom > 0) &&
      (rect.left < (window.innerWidth + this.settings.threshold) && rect.right > 0)
  }
  */
}
