import Utils from '../util/Utils';

export default class EventListener {
  /**
   * TODO
   *
   * @private
   * @type {function}
   */

  constructor(listener, scope, once = false) {

    /**
     * TODO
     *
     * @private
     * @type {function}
     */
    this.listener_ = listener;

    /**
     * TODO
     *
     * @private
     * @type {Object}
     */
    this.scope_ = scope;

    /**
     * TODO
     */
    this.eventKey_ = Utils.generateRandom();

    /**
     * TODO
     */
    this.once_ = once;
  }

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  fire(args) {
    if (!Utils.isArray(args)) {
      args = [args];
    }
    this.listener_.apply(this.scope_, args);
  }

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  getEventKey() {
    return this.eventKey_;
  }

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  isOnce() {
    return this.once_;
  }

  /**
   * TODO
   *
   * @public
   * @function
   * @api stable
   */
  has(listener, scope) {
    let has = false;
    if (Utils.isFunction(listener)) {
      has = this.listener_ === listener && this.scope_ === scope;
    }
    else {
      has = this.eventKey_ === listener;
    }
    return has;
  }
}
