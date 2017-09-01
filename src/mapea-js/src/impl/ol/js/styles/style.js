goog.provide('M.impl.Style');

goog.require('ol.render');

/**
 * @namespace M.impl.Style
 */

(function() {
  /**
   * Main constructor of the class.
   * @constructor
   * @api stable
   */
  M.impl.Style = (function(options = {}) {
    this.parseFacadeOptions_(options);
  });

  /**
   * This function apply style options facade to impl
   * @private
   * @function
   * @param {Object} options
   * @api stable
   */
  M.impl.Style.prototype.parseFacadeOptions_ = function(options = {}) {};

  /**
   * This function apply style to layer
   * @public
   * @function
   * @param {M.layer.Vector} layer - Layer
   * @api stable
   */
  M.impl.Style.prototype.applyToLayer = function(layer) {
    layer.getFeatures().forEach(this.applyToFeature, this);
  };

  /**
   * This function apply style to feature
   *
   * @public
   * @param {M.Feature} feature - Feature to apply style
   * @function
   * @api stable
   */

  M.impl.Style.prototype.applyToFeature = function(feature) {
    feature.getImpl().getOLFeature().setStyle(this.styles_);
  };

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  M.impl.Style.prototype.updateCanvas = function(canvas) {
    let canvasSize = this.getCanvasSize();
    let vectorContext = ol.render.toContext(canvas.getContext('2d'), {
      size: canvasSize
    });
    vectorContext.setStyle(this.styles_[0]);
    this.drawGeometryToCanvas(vectorContext);
  };

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  M.impl.Style.prototype.drawGeometryToCanvas = function(vectorContext) {};

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  M.impl.Style.prototype.getCanvasSize = function() {
    return [100, 100];
  };
})();
