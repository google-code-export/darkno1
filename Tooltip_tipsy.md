![http://i49.servimg.com/u/f49/17/59/11/61/710.jpg](http://i49.servimg.com/u/f49/17/59/11/61/710.jpg)

Tạo Bbcode và cho vào mod thông báo chung

```

<script type="text/javascript">(function($) {function fixTitle($ele) {if ($ele.attr('title') || typeof($ele.attr('original-title')) != 'string') {$ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');}}function Tipsy(element, options) {this.$element = $(element);this.options = options;this.enabled = true;fixTitle(this.$element);}Tipsy.prototype = {show: function() {var title = this.getTitle();if (title && this.enabled) {var $tip = this.tip();$tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);$tip[0].className = 'tipsy';$tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);var pos = $.extend({}, this.$element.offset(), {width: this.$element[0].offsetWidth,height: this.$element[0].offsetHeight});var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;var gravity = (typeof this.options.gravity == 'function')? this.options.gravity.call(this.$element[0]): this.options.gravity;var tp;switch (gravity.charAt(0)) {case 'n':tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};break;case 's':tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};break;case 'e':tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};break;case 'w':tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};break;}if (gravity.length == 2) {if (gravity.charAt(1) == 'w') {tp.left = pos.left + pos.width / 2 - 15;} else {tp.left = pos.left + pos.width / 2 - actualWidth + 15;}}$tip.css(tp).addClass('tipsy-' + gravity);if (this.options.fade) {$tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});} else {$tip.css({visibility: 'visible', opacity: this.options.opacity});}}},hide: function() {if (this.options.fade) {this.tip().stop().fadeOut(function() { $(this).remove(); });} else {this.tip().remove();}},getTitle: function() {var title, $e = this.$element, o = this.options;fixTitle($e);var title, o = this.options;if (typeof o.title == 'string') {title = $e.attr(o.title == 'title' ? 'original-title' : o.title);} else if (typeof o.title == 'function') {title = o.title.call($e[0]);}title = ('' + title).replace(/(^\s*|\s*$)/, "");return title || o.fallback;},tip: function() {if (!this.$tip) {this.$tip = $('<div>

Unknown end tag for &lt;/div&gt;

').html('<div>

Unknown end tag for &lt;/div&gt;

<div/>

Unknown end tag for &lt;/div&gt;

');}return this.$tip;},validate: function() {if (!this.$element[0].parentNode) {this.hide();this.$element = null;this.options = null;}},enable: function() { this.enabled = true; },disable: function() { this.enabled = false; },toggleEnabled: function() { this.enabled = !this.enabled; }};$.fn.tipsy = function(options) {if (options === true) {return this.data('tipsy');} else if (typeof options == 'string') {return this.data('tipsy')[options]();}options = $.extend({}, $.fn.tipsy.defaults, options);function get(ele) {var tipsy = $.data(ele, 'tipsy');if (!tipsy) {tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));$.data(ele, 'tipsy', tipsy);}return tipsy;}function enter() {var tipsy = get(this);tipsy.hoverState = 'in';if (options.delayIn == 0) {tipsy.show();} else {setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);}};function leave() {var tipsy = get(this);tipsy.hoverState = 'out';if (options.delayOut == 0) {tipsy.hide();} else {setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);}};if (!options.live) this.each(function() { get(this); });if (options.trigger != 'manual') {var binder = options.live ? 'live' : 'bind',eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';this[binder](eventIn, enter)[binder](eventOut, leave);}return this;};$.fn.tipsy.defaults = {delayIn: 0,delayOut: 0,fade: false,fallback: '',gravity: 'n',html: false,live: false,offset: 0,opacity: 0.8,title: 'title',trigger: 'hover'};$.fn.tipsy.elementOptions = function(ele, options) {return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;};$.fn.tipsy.autoNS = function() {return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';};$.fn.tipsy.autoWE = function() {return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';};})(jQuery);$("document").ready(function() {$(".forabg .row").mouseenter(function() {var mensajes = $(this).find(".posts").text();var argumentos = $(this).find(".topics").text();$(this).find(".forumtitle").attr("title", mensajes + " • " + argumentos).tipsy({gravity: "w"});});});

Unknown end tag for &lt;/script&gt;



<style type="text/css">
.forabg dd.posts, .forabg dd.topics { visibility: hidden; }
.tipsy { padding: 5px; font-size: 10px; position: absolute; z-index: 999; }
.tipsy-inner { padding: 5px 8px 4px 8px; background-color: black; color: white; max-width: 200px; text-align: center; }
.tipsy-inner { border-radius: 3px; -moz-border-radius:3px; -webkit-border-radius:3px; }
.tipsy-arrow { position: absolute; background: url("http://i.imgur.com/eaY2Z.gif") no-repeat top left; width: 9px; height: 5px; }
.tipsy-w .tipsy-arrow { top: 50%; margin-top: -4px; left: 0; width: 5px; height: 9px; }

Unknown end tag for &lt;/style&gt;


```


Nhớ thanks nghen :x