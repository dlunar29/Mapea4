import ControlBase from './controlbase';
import Utils from '../utils/utils';
import Exception from '../exception/exception';
import Template from '../utils/template';
import GetFeatureInfoImpl from '../../../impl/js/controls/getfeatureinfo';

export default class GetFeatureInfo extends ControlBase {
  /**
   * @classdesc
   * Main constructor of the class. Creates a GetFeatureInfo
   * control to provides a popup with information about the place
   * where the user has clicked inside the map
   *
   * @constructor
   * @param {string} format - Format response
   * @param {object} options - Control options
   * @extends {M.Control}
   * @api stable
   */
  constructor(format, options) {
    // implementation of this control
    let impl = new GetFeatureInfoImpl(format, options);
    // calls the super constructor
    super(impl, GetFeatureInfo.NAME);

    if (Utils.isUndefined(GetFeatureInfoImpl)) {
      Exception('La implementación usada no puede crear controles GetFeatureInfo');
    }

    options = (options || {});
  }

  /**
   * This function creates the view to the specified map
   *
   * @public
   * @function
   * @param {M.Map} map - Facade map
   * @returns {Promise} HTML template
   * @api stable
   */
  createView(map) {
    return Template.compile(GetFeatureInfo.TEMPLATE, {
      'jsonp': true
    });
  }

  /**
   * This function returns the HTML button control.
   *
   * @public
   * @function
   * @param {HTMLElement} element - Template control
   * @returns {HTMLElement} HTML control button
   * @api stable
   * @export
   */
  getActivationButton(element) {
    return element.querySelector('button#m-getfeatureinfo-button');
  }

  /**
   * This function checks if an object is equals
   * to this control
   *
   * @public
   * @function
   * @param {*} obj - Object to compare
   * @returns {boolean} equals - Returns if they are equal or not
   * @api stable
   */
  equals(obj) {
    let equals = false;
    if (obj instanceof GetFeatureInfo) {
      equals = (this.name === obj.name);
    }
    return equals;

  }
  /**
   * Name to identify this control
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  GetFeatureInfo.NAME = 'getfeatureinfo';

  /**
   * Title for the popup
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  GetFeatureInfo.POPUP_TITLE = 'Información';

  /**
   * Template for this controls - button
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  GetFeatureInfo.TEMPLATE = 'getfeatureinfo.html';

  /**
   * Template for this controls - popup
   * @const
   * @type {string}
   * @public
   * @api stable
   */
  GetFeatureInfo.POPUP_TEMPLATE = 'getfeatureinfo_popup.html';
}
