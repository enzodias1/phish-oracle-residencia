
  var liveshopSdkOptions = null;

  (function (i, s, o, g, r, a, m) {
				var p = new Promise(function (rs) {
					return rs();
				});
  a = s.createElement(o);
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  a.onload = function () {
					return p.then(function () {
						return ss(liveshopSdkOptions);
					});
				};
  m.parentNode.insertBefore(a, m);
			})(
  window,
  document,
  'script',
  'https://assets.streamshop.com.br/sdk/liveshop-web-sdk.min.js'
  );
