class ImageLazyLoad {
  constructor (el, options) {
    this.el = el
    this.elements = document.querySelectorAll(this.el)
    const settings = {
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
    console.log(settings)
    // console.log(456)

    // Object.assign是第一层深拷贝，后面层浅拷贝
    // this.settings = Object.assign(settings, options)
    this.settings = {
      ...settings,
      ...options
    }
    // this.loadStart.apply(this)
  }
}

export default ImageLazyLoad
