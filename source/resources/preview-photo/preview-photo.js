// JavaScript Document
(function ($, window) {
  var div = document.createElement('div');
  var tempHtml = '<div id="{{id}}" class="previewbox"><div class="preview-header">{{header}}</div><div class="preview-content"></div></div>';
  var itemTempHtml = '<div class="content-item"><div class="content-item-scroller">{{imageContainer}}</div></div>';
  var imageContainerHtml1 = '<iframe frameborder="0" scrolling="auto" style="{{style}}" src="{{src}}"></iframe>';
  var imageContainerHtml2 = '<div class="image-container" style="{{style}}"><img src="{{src}}" style="{{style}}" alt="" /></div>';
  var pcLeftHtml = '<div class="toggle-left">&lt;</div>';
  var pcRightHtml = '<div class="toggle-right">&gt;</div>';
  var PreviewPhoto = function (opt) {
    this.options = $.extend({
      id: "__HTY__PHOTO__" + Date.now(),
      header: '<span class="preview-indicator"></span>',
      index: 0,
      maxIndex: 0,
      screenWidth: 0,
      minMoveDistance: 0,
      actualMoveDistance: 0,
      startClickX: 0,
      startClickY: 0,
      startX: 0,
      startY: 0,
      slideStyle: 'translate3d(0, 0, 0)',
      scaleCells: [],
      imageContainerType: 1
    }, opt || {});
    this.init();
    this.initEvent();
  };
  PreviewPhoto.prototype = {
    init: function () {
      if ($('#' + this.options.id)) {
        $('#' + this.options.id).remove();
      }
      var el = document.getElementById(this.options.id);
      if (!el) {
        div.innerHTML = tempHtml.replace(/\{\{id\}\}/g, this.options.id).replace('{{header}}', this.options.header);
        document.body.appendChild(div.firstElementChild);
        el = document.getElementById(this.options.id);
      }
      this.element = el;
      this.scroller = this.element.querySelector('.preview-content');
      this.indicator = this.element.querySelector('.preview-indicator');
      this.generateImages();
    },
    initEvent: function () {
      var self = this;
      $('.preview-content').on('click', function () {
        self.element.style.display = "none";
      });
      $('.preview-content').on('click', '.toggle-left', function (event) {
        if (self.options.index > 0) {
          self.openImage(self.options.index - 1)
        }
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        };
      });
      $('.preview-content').on('click', '.toggle-right', function (event) {
        if (self.options.index < self.options.maxIndex) {
          self.openImage(self.options.index + 1)
        }
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        };
      });
      $('body img[data-preview-src]').each(function (index) {
        $(this).on('click', function () {
          self.openImage(index);
        });
      });
      $('.preview-content').on('touchstart touchmove touchend', function (event) {
        var touch1 = event.originalEvent.targetTouches[0];
        if (event.type == 'touchstart') {
          var _touch = event.originalEvent.targetTouches[0];
          self.options.startClickX = _touch.pageX;
          self.options.startClickY = _touch.pageY;
        } else if (event.type == 'touchmove') {
          var direction = self.getSlideDirection(event);
          if (direction == 3 || direction == 4) {
            self.options.actualMoveDistance = event.originalEvent.targetTouches[0].pageX - self.options.startClickX;
            var moveX = self.options.actualMoveDistance * (1) + self.options.screenWidth * self.options.index * (-1);
            $(this).css('transform', "translate3d(" + moveX + "px, 0, 0)");
          }
        } else if (event.type == 'touchend') {
          var direction = self.getSlideDirection(event);
          if (direction == 3 || direction == 4) {
            if (self.options.actualMoveDistance < 0) {
              if (Math.abs(self.options.actualMoveDistance) >= self.options.minMoveDistance) {
                if (self.options.index !== (self.options.maxIndex - 1)) {
                  var moveX = (self.options.index + 1) * self.options.screenWidth * (-1);
                  if (self.options.index < (self.options.maxIndex - 1)) {
                    self.options.index += 1;
                  } else {
                    self.options.index = 0;
                    moveX = 0;
                  }
                  self.options.slideStyle = "translate3d(" + moveX + "px, 0, 0)";
                }
              }
            } else {
              if (self.options.actualMoveDistance >= self.options.minMoveDistance) {
                var moveX = (self.options.index - 1) * self.options.screenWidth * (-1);
                if (self.options.index > 0) {
                  self.options.index -= 1;
                } else {
                  self.options.index = 0;
                  moveX = 0;
                }
                self.options.slideStyle = "translate3d(" + moveX + "px, 0, 0)";
              }
            }
            self.indicator.innerHTML = (self.options.index + 1) + '/' + self.options.maxIndex;
            $(this).css("webkitTransitionDuration", '0.5s');
            $(this).css('transform', self.options.slideStyle);
            $(this).find('img').css("webkitTransitionDuration", '0.5s');
            $(this).find('img').css('transform', 'scale(1)');
          }
        }
      });
    },
    generateImages: function () {
      this.scroller.innerHTML = ''
      var imgs = document.querySelectorAll("img[data-preview-src]");
      if (imgs.length) {
        var sWidth = $(window).width(),
          sHeight = $(window).height();
        this.options = $.extend(this.options, {
          maxIndex: imgs.length,
          screenWidth: sWidth,
          minMoveDistance: Math.floor(this.options.screenWidth / 6),
        });
        this.loadImage(0, imgs, sWidth, sHeight);
      }
      this.element.style.display = "none";
    },
    loadImage: function (i, imgs, sWidth, sHeight) {
      var that = this;
      count = imgs.length;
      if (count > 0) {
        var src = $(imgs[i]).attr('src');
        var mapload = $(imgs[i]).attr('data-preview-src');
        if (!mapload) {
          mapload = src;
        }
        var img = new Image();
        img.src = mapload;
        img.onload = function () {
          var _style = (that.options.imageContainerType == 2 ? "" : "width: " + (img.width + 5) + "px; height: " + (img.height + 5) + "px;") + (sWidth > img.width ? " max-width: 100%;" + (sWidth > 800 ? "" : " max-height: " + sHeight * 0.6 + "px;") : "max-width: " + sWidth * 0.72 + "px; max-height: " + sHeight * 0.72 + "px;");
          var _imageContainerHtml = "";
          if (that.options.imageContainerType == 2) {
            if (i > 0) {
              _imageContainerHtml += pcLeftHtml;
            }
            if (i < (count - 1)) {
              _imageContainerHtml += pcRightHtml;
            }
            _imageContainerHtml += imageContainerHtml2;
          } else {
            _imageContainerHtml = imageContainerHtml1;
          }
          _imageContainerHtml = _imageContainerHtml.replace(/{{style}}/g, _style).replace('{{src}}', mapload);
          that.scroller.innerHTML += itemTempHtml.replace('{{imageContainer}}', _imageContainerHtml);
          that.loadImage(i + 1, imgs, sWidth, sHeight);
        };
      }
    },
    openImage: function (index) {
      var el = $('#' + this.options.id).find(".content-item"),
        count = el.length;
      if (count > index) {
        this.options.index = index;
        this.indicator.innerHTML = (index ? index + 1 : 1) + '/' + this.options.maxIndex;
        this.options.slideStyle = "translate3d(" + (index * this.options.screenWidth * (-1)) + "px, 0, 0)";
        this.scroller.style.transform = this.options.slideStyle;
        this.element.style.display = "";
      }
    },
    getAngle: function (angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    },
    getDirection: function (startx, starty, endx, endy) {
      var angx = endx - startx;
      var angy = endy - starty;
      var result = 0;
      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }
      var angle = this.getAngle(angx, angy);
      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }
      return result;
    },
    getSlideDirection: function (event) {
      if (event && event.originalEvent) {
        var startx = this.options.startClickX;
        var starty = this.options.startClickY;
        var endx = event.originalEvent.changedTouches[0].pageX;
        var endy = event.originalEvent.changedTouches[0].pageY;
        return this.getDirection(startx, starty, endx, endy);
      } else {
        return 0;
      }
    }
  }
  window.PreviewPhoto = function (opt) {
    return new PreviewPhoto(opt);
  };
})(jQuery, window);
