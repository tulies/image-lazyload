/**
    * Merge two or more objects. Returns a new object.
    * @private
    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
    * @param {Object}   objects  The objects to merge together
    * @returns {Object}          Merged values of defaults and options
    */
const extend = function () {
  const extended = {}
  let deep = false
  let i = 0
  const length = arguments.length

  /* Check if a deep merge */
  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0]
    i++
  }

  /* Merge the object into the extended object */
  const merge = function (obj) {
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        /* If deep merge and property is an object, merge properties */
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop])
        } else {
          extended[prop] = obj[prop]
        }
      }
    }
  }

  /* Loop through each object and conduct a merge */
  for (; i < length; i++) {
    const obj = arguments[i]
    merge(obj)
  }

  return extended
}

const defaults = {
  src: 'data-src',
  srcset: 'data-srcset',
  // selector: '.lazyload',
  root: null,
  rootMargin: '0px',
  threshold: 0,
  placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2M8fPjwfwAH5ANKxO/wYQAAAABJRU5ErkJggg=='
}
export default class ImageLazyload {
  constructor (el, options) {
    if (typeof el === 'string') {
      this.images = document.querySelectorAll(el)
    } else {
      this.images = el
    }
    this.settings = extend(defaults, options || {})

    this.observer = null
    // 执行初始化
    this.init()
  }

  init () {
    /* Without observers load everything and bail out early. */
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
      // 设置默认图
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
