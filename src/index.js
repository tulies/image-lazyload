import { extend } from './util'
const defaults = {
  src: 'data-src',
  srcset: 'data-srcset',
  // selector: '.lazyload',
  root: null,
  rootMargin: '0px',
  threshold: 0,
  placeholder: '' // 用于设置默认底图，也可以在页面标签元素的src或者background直接默认设置。
  // placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M8fPjwfwAH5ANKxO/wYQAAAABJRU5ErkJggg=='
}
export default class ImageLazyload {
  constructor (el, options) {
    if (typeof el === 'string') {
      this.images = document.querySelectorAll(el)
    } else {
      this.images = el
    }
    // 24.9 -17.8 = 7.1k 可以节省7.1k大小
    this.settings = extend(defaults, options || {})

    // this.settings = {
    //   ...defaults,
    //   ...(options || {})
    // }
    this.observer = null
    // 执行初始化
    this.init()
  }

  init () {
    /* Without observers load everything and bail out early. */
    // 如果不支持IntersectionObserver，可以自己加profill进行处理
    if (!window.IntersectionObserver) {
      this.loadImages()
      return
    }
    const observerConfig = {
      root: this.settings.root,
      rootMargin: this.settings.rootMargin,
      threshold: [this.settings.threshold]
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.observer.unobserve(entry.target)
          const src = entry.target.getAttribute(this.settings.src)
          const srcset = entry.target.getAttribute(this.settings.srcset)
          if (entry.target.tagName.toLowerCase() === 'img') {
            if (src) {
              entry.target.src = src
            }
            if (srcset) {
              entry.target.srcset = srcset
            }
          } else {
            entry.target.style.backgroundImage = 'url(' + src + ')'
          }
        }
      })
    }, observerConfig)

    this.images.forEach(image => {
      // 如果传递了placeholder，则去遍历设置下默认图
      if (this.settings.placeholder) {
        if (image.tagName.toLowerCase() === 'img') {
          image.src = this.settings.placeholder
        } else {
          image.style.backgroundImage = 'url(' + this.settings.placeholder + ')'
        }
      }
      this.observer.observe(image)
    })
  }

  loadAndDestroy () {
    if (!this.settings) { return }
    this.loadImages()
    this.destroy()
  }

  loadImages () {
    if (!this.settings) { return }

    this.images.forEach(image => {
      const src = image.getAttribute(this.settings.src)
      const srcset = image.getAttribute(this.settings.srcset)
      if (image.tagName.toLowerCase() === 'img') {
        if (src) {
          image.src = src
        }
        if (srcset) {
          image.srcset = srcset
        }
      } else {
        image.style.backgroundImage = "url('" + src + "')"
      }
    })
  }

  destroy () {
    if (!this.settings) { return }
    this.observer.disconnect()
    this.settings = null
  }
}
