/*!
 * jQuery foundation toggle buttons
 * Original author: @benopeter
 * Further changes, comments: @benopeter, najlepsiwebdesigner@gmail.com, http://peterbeno.com
 * Licensed under the MIT license
 */
(function ($, window, document) {
   // defaults 
   var pluginName = 'foundationToggle',
      defaults = {
         animationFcn: function ($el) {
            return $el.slideToggle(this.animationOptions);
         },
         animationOptions: 'fast'
      },
      Plugin = function (element, options) {
         this.element = element;
         this.options = $.extend({}, defaults, options);
         this.init();
      };

   // custom show/hide functions
   Plugin.prototype.hideBtn = function ($el) {
      return this.options.animationFcn($el);
   };
   Plugin.prototype.showBtn = function ($el) {
      return this.options.animationFcn($el);
   };

   Plugin.prototype.init = function () {
      var that = this,
         $el = $(this.element),
         $btns = $el.find('a.button'),
         numberOfButtons = $btns.length,
         lastButton = $btns.last().index();
      $el.css({
         display: "inline-block",
         position: "relative"
      });
      $btns.each(function (i, v) {
         $(this)
            .css({
               position: "absolute",
               left: "0px",
               display: 'none',
               width: '100%'
            })
            .click(function () {
               if (i === lastButton) {
                  that.showBtn($(this).siblings().first());
                  that.hideBtn($(this));
               } else {
                  that.hideBtn($(this));
                  that.showBtn($(this).next());
               }
            });
      });
      $el.find('a.button').first().show();
   };

   // A really lightweight plugin wrapper around the constructor, 
   // preventing against multiple instantiations
   $.fn[pluginName] = function (options) {
      return this.each(function () {
         if (!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName,
               new Plugin(this, options));
         }
      });
   };
})(jQuery, window, document);