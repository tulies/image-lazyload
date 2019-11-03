# image-lazyload
图片延迟加载插件

   getRect () {
        this.rect = this.$el.getBoundingClientRect()
      },
      checkInView () {
        this.getRect()
        return inBrowser &&
                    (this.rect.top < window.innerHeight * lazyManager.options.preLoad && this.rect.bottom > 0) &&
                    (this.rect.left < window.innerWidth * lazyManager.options.preLoad && this.rect.right > 0)
      }, 
