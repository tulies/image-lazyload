
export function checkInView (img, threshold) {
  const rect = img.getBoundingClientRect()
  threshold = threshold || 0
  // console.log(rect)
  return (rect.top < (window.innerHeight + threshold) && rect.bottom > 0) &&
  (rect.left < (window.innerWidth + threshold) && rect.right > 0)
}
