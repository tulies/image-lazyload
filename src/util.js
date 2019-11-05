export default class Util {
  checkInView (img) {
    const rect = img.getBoundingClientRect()
    // console.log(rect)
    return (rect.top < (window.innerHeight + this.settings.threshold) && rect.bottom > 0) &&
    (rect.left < (window.innerWidth + this.settings.threshold) && rect.right > 0)
  }
}
