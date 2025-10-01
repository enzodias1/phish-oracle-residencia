/** Class HCMSNavigationCapture utilizada para captura da tecla Tab em elementos especÃ­ficos do DOM. */
class HCMSNavigationCapture {
  /**
   * Create HCMSNavigationCapture
   * @param gtmObject {{action: string, label: string, category: string}}
   * @param possibleLabels {Array.<string>}
   */
  constructor(gtmObject, possibleLabels) {
    this.gtmObject = gtmObject;
    this.possibleLabels = possibleLabels;
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  /**
   * Get if tab wasn't fired yet.
   * @return {boolean}.
   */
  tabNotFired() {
    return sessionStorage.getItem("tabFired") === null;
  }
  /**
   * Set 'tabFired' as true on user Session.
   * @return {void}.
   */
  setTabFired() {
    sessionStorage.setItem("tabFired", "true");
  }

  /**
   * Push event to GTM dataLayer.
   * @param eventName {string}
   * @param triggeredLabel {string}
   * @return {void}.
   */
  evPushDataLayer(eventName, triggeredLabel = null) {
    if (this.tabNotFired()) {
      this.setTabFired();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "event",
        eventAction: this.gtmObject.action,
        eventLabel: triggeredLabel
          ? `${this.gtmObject.label}:${triggeredLabel}`
          : this.gtmObject.label,
        eventCategory: window.location.pathname
          ? `${this.gtmObject.category}:${window.location.pathname}`
          : this.gtmObject.category,
      });
      document.removeEventListener(eventName, this.onKeyDown);
    }
  }
  /**
   * Listener of keyDown event.
   * @param event {HTMLElement Event}
   * @return {void}.
   */
  onKeyDown(event) {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }

    if (event.key === "Tab" && event.target) {
      if (this.possibleLabels.join(",").includes(event.target.innerHTML.toLowerCase())) {
        this.evPushDataLayer("keydown", event.target.innerHTML.toLowerCase().split(" ").join("-"));
      }
    }
  }
  /**
   * Start capturing user keyDownEvent.
   * @return {void}.
   */
  startCapturing() {
    this.tabNotFired() && document.addEventListener("keydown", this.onKeyDown);
  }
}