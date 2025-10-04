(function(context) {
  document.loadWidget = function(widget) {
    const renderFunctionName = widget.renderFunctionName;
    const instanceId = widget.instanceId;
    const formid = widget.formid;
    const locale = widget.locale;
    const triggerManually = widget.triggerManually;
    const onRenderFinish = widget.onRenderFinish;
    const bpid = widget.bpid;
    const emailOnly = widget.emailOnly;
    window.urxbpid = bpid;
    window.urxEnvironment = widget.environment;
    window.onUrxFormSubmit = widget.onUrxFormSubmit; // trigger after submit before redirect
    window.urxFormLoaded = widget.formLoaded; // trigger this when form loaded.
    window.urxFormRenderFinish = widget.onRenderFinish;
    window.urxControls = window.urxControls || {}
    window.urxControls[formid] = widget.controls || {}
    const preFillData = widget.preFillData;
    if(typeof widget.onUrxFormSubmitSuccess === 'function'){
      // Single form legacy
      if(typeof window.onUrxFormSubmitSuccess !=='function'){
        window.onUrxFormSubmitSuccess = widget.onUrxFormSubmitSuccess;
      }
      // For multiple
      window.onUrxFormSubmitSuccessMultiple =  window.onUrxFormSubmitSuccessMultiple || {};
      window.onUrxFormSubmitSuccessMultiple[instanceId] = widget.onUrxFormSubmitSuccess;
    }
    const userActionEvent = widget.userActionEvent || function (){}
    window.urxUserActionEvent = userActionEvent; // trigger this when form loaded.
    /** set config and callback in the object by instace key */
    window.urxConfig = window.urxConfig || {};
    window.urxConfig[instanceId] = {
      urxbpid: bpid,
      urxEnvironment: widget.environment,
      onUrxFormSubmit: widget.onUrxFormSubmit, // trigger after submit before redirec,
      urxFormLoaded: widget.formLoaded, // trigger this when form loaded,
      // urxFormRenderFinish: widget.onRenderFinish,
      urxControls: widget.controls || {},
      onUrxFormSubmitSuccess: widget.onUrxFormSubmitSuccess,
      userActionEvent: widget.userActionEvent || function () {},
      emailOnly,
    };
    const design = widget.design || {
      column: 1,
      theme: 'light',
      singleStep: false,
    };
    if (typeof document.addEventListener !== 'function') {
      return;
    }
    try {
      if (triggerManually){
        context[renderFunctionName](instanceId, formid, locale, design, onRenderFinish, bpid, preFillData);
      }else{
        document.addEventListener("DOMContentLoaded", () => {
          if (typeof context[renderFunctionName] !== 'function') {
            return;
          }
          context[renderFunctionName](instanceId, formid, locale, design, onRenderFinish, bpid, preFillData);
        });
      }

    }
    catch(err) {
      console.error(err.message());
    }
  };
  document.loadWidgets = function(widgets) {
    if (!Array.isArray(widgets)) {
      return;
    }
    widgets.forEach(document.loadWidget);
  };
})(window);
