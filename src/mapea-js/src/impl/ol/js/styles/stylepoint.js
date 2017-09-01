goog.provide('M.impl.style.Point');

goog.require('M.impl.style.Simple');

/**
 * TODO
 * @private
 * @type {M.style.Point}
 */

(function() {
  /**
   * Main constructor of the class.
   * @constructor
   * @implements {
     M.impl.style.Simple
   }   * @api stable
   */
  M.impl.style.Point = (function(options) {
    goog.base(this, options);
  });
  goog.inherits(M.impl.style.Point, M.impl.style.Simple);

  /**
   * This function se options to ol style
   *
   * @private
   * @param {object} options - options to style
   * @function
   * @api stable
   */
  M.impl.style.Point.prototype.parseFacadeOptions_ = function(options) {
    let stroke = options.stroke;
    let radius = options.radius;
    let fill = options.fill;
    let label = options.label;
    let icon = options.icon;
    let snaptopixel = options.snaptopixel;
    this.style_ = new ol.style.Style();
    this.styleIcon_ = new ol.style.Style();
    if (!M.utils.isNullOrEmpty(stroke)) {
      stroke = new ol.style.Stroke({
        color: stroke.color,
        width: stroke.width,
        lineDash: stroke.linedash,
        lineDashOffset: stroke.linedashoffset,
        lineCap: stroke.linecap,
        lineJoin: stroke.linejoin,
        miterLimit: stroke.miterlimit
      });
    }
    else {
      stroke = null;
    }

    if (!M.utils.isNullOrEmpty(fill)) {
      fill = new ol.style.Fill({
        color: chroma(fill.color).alpha(fill.opacity).css()
      });
    }
    else {
      fill = null;
    }

    if (!M.utils.isNullOrEmpty(label)) {
      let labelText = new ol.style.Text({
        font: label.font,
        rotateWithView: label.rotate,
        scale: label.scale,
        offsetX: label.offset[0],
        offsetY: label.offset[1],
        fill: new ol.style.Fill({
          color: label.color
        }),
        textAlign: label.align,
        textBaseline: (label.baseline || "").toLowerCase(),
        text: label.text,
        rotation: label.rotation
      });
      if (!M.utils.isNullOrEmpty(label.stroke)) {
        labelText.setStroke(new ol.style.Stroke({
          color: label.stroke.color,
          width: label.stroke.width,
          lineCap: label.stroke.linecap,
          lineJoin: label.stroke.linejoin,
          lineDash: label.stroke.linedash,
          lineDashOffset: label.stroke.linedashoffset,
          miterLimit: label.stroke.miterlimit,
        }));
      }
      label = labelText;
    }
    else {
      label = null;
    }

    if (!M.utils.isNullOrEmpty(stroke) || !M.utils.isNullOrEmpty(radius) || !M.utils.isNullOrEmpty(fill)) {
      this.style_ = new ol.style.Style({
        stroke: stroke,
        fill: fill,
        image: new ol.style.Circle({
          stroke: stroke,
          fill: fill,
          radius: radius,
          snapToPixel: snaptopixel
        }),
        text: label
      });
    }

    if (!M.utils.isNullOrEmpty(icon)) {
      if (!M.utils.isNullOrEmpty(icon.src)) {
        this.styleIcon_ = new ol.style.Style({
          image: new ol.style.Icon({
            anchor: icon.anchor,
            anchorXUnits: icon.anchorxunits,
            anchorYUnits: icon.anchoryunits,
            src: icon.src,
            opacity: icon.opacity,
            scale: icon.scale,
            rotation: icon.rotation,
            rotateWithView: icon.rotate,
            snapToPixel: icon.snaptopixel,
            offsetOrigin: icon.offsetorigin,
            offset: icon.offset,
            crossOrigin: icon.crossorigin,
            anchorOrigin: icon.anchororigin,
            size: icon.size,
          })
        });
      }
      else {
        this.styleIcon_ = new ol.style.Style({
          image: new ol.style.FontSymbol({
            form: icon.form.toLowerCase(),
            gradient: icon.gradient,
            glyph: icon.class,
            fontSize: icon.fontsize,
            radius: icon.radius,
            rotation: icon.rotation,
            rotateWithView: icon.rotate,
            offsetY: icon.offset[0],
            offsetX: icon.offset[1],
            color: icon.color,
            fill: new ol.style.Fill({
              color: icon.fill
            }),
            stroke: new ol.style.Stroke({
              color: icon.gradientcolor,
              width: 1
            }),
            anchor: icon.anchor,
            anchorXUnits: icon.anchorxunits,
            anchorYUnits: icon.anchoryunits,
            src: icon.src,
            opacity: icon.opacity,
            scale: icon.scale,
            snapToPixel: icon.snaptopixel,
            offsetOrigin: icon.offsetorigin,
            offset: icon.offset,
            crossOrigin: icon.crossorigin,
            anchorOrigin: icon.anchororigin,
            size: icon.size
          })
        });
      }
    }
    this.styles_ = [this.style_, this.styleIcon_];
  };

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  M.impl.style.Point.prototype.drawGeometryToCanvas = function(vectorContext) {
    vectorContext.drawGeometry(new ol.geom.Point([50, 50]));
  };

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  M.impl.style.Point.prototype.getCanvasSize = function() {
    return [200, 100];
  };
})();
