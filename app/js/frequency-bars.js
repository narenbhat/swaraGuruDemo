/**
 * the frequency histogram
 *
 * @param {string} selector
 * @constructor
 */
const FrequencyBars = function(selector) {
  this.$canvas = document.querySelector(selector)
  this.$canvas.width = document.body.clientWidth
  this.$canvas.height = document.body.clientHeight / 2
  this.canvasContext = this.$canvas.getContext('2d')
}

/**
 * @param {Uint8Array} data
 */
FrequencyBars.prototype.update = function(data) {
  const length = 64 // low frequency only
  const width = this.$canvas.width / length - 0.5
  this.canvasContext.clearRect(0, 0, this.$canvas.width, this.$canvas.height)
  var a = 0;
  for (var i = 0; i < length; i += 1) {
    if(a==0){
    this.canvasContext.fillStyle = '#07596e'
    a=1;
    }else{
      this.canvasContext.fillStyle = '#136e07'
      a=0;
    }
    this.canvasContext.fillRect(
      i * (width + 0.5),
      this.$canvas.height - data[i],
      width,
      data[i]
    )
  }
}
