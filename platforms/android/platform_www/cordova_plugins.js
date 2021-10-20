cordova.define("cordova/plugin_list", function (require, exports, module) {
  module.exports = [
    {
      id: "cordova-plugin-eghl.eGHL",
      file: "plugins/cordova-plugin-eghl/www/eGHL.js",
      pluginId: "cordova-plugin-eghl",
      clobbers: ["eGHL"],
    },
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.5",
    "cordova-plugin-eghl": "3.4.4",
  };
});
