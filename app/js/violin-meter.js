/**
 * @param {string} selector
 * @constructor
 */
const violinMeter = function(selector) {
    this.$root = document.querySelector(selector)
    this.$pointer = this.$root.querySelector('.meter-pointer')
    this.init()
  }
  
  violinMeter.prototype.init = function() {
    for (var i = 0; i <= 10; i += 1) {
      const $scale = document.createElement('div')
      $scale.className = 'meter-scale'
      $scale.style.transform = 'rotate(' + (i * 9 - 45) + 'deg)'
      if (i % 5 === 0) {
        $scale.classList.add('meter-scale-strong')
      }
      this.$root.appendChild($scale)
    }
  }
  
  /**
   * @param {number} deg
   */
  violinMeter.prototype.update = function(deg) {
    this.$pointer.style.transform = 'rotate(' + deg + 'deg)'
  }
  