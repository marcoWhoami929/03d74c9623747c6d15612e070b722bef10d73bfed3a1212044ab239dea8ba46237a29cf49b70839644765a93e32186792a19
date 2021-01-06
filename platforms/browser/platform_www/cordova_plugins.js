cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-cleartext/www/CordovaPluginsCleartext.js",
        "id": "cordova-plugin-cleartext.CordovaPluginsCleartext",
        "pluginId": "cordova-plugin-cleartext",
        "clobbers": [
            "cordova.plugins.CordovaPluginsCleartext"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-firebase-lib/www/firebase-browser.js",
        "id": "cordova-plugin-firebase-lib.FirebasePlugin",
        "pluginId": "cordova-plugin-firebase-lib",
        "clobbers": [
            "FirebasePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
        "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
        "pluginId": "cordova-plugin-firebase-messaging",
        "merges": [
            "cordova.plugins.firebase.messaging"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-androidx": "2.0.0",
    "cordova-plugin-androidx-adapter": "1.1.1",
    "cordova-plugin-cleartext": "1.0.0",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-firebase-lib": "5.1.1",
    "cordova-plugin-firebase-messaging": "4.0.1",
    "cordova-plugin-geolocation": "2.1.0",
    "cordova-plugin-inappbrowser": "3.1.0",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-support-android-plugin": "1.0.2",
    "cordova-support-google-services": "1.4.0"
}
// BOTTOM OF METADATA
});