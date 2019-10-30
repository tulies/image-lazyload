/**
    * Merge two or more objects. Returns a new object.
    * @private
    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
    * @param {Object}   objects  The objects to merge together
    * @returns {Object}          Merged values of defaults and options
    */
export const extend = function () {
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
