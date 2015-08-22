/* put user.js in /home/user/.mozilla/firefox/xxxxxxx.default/
 *
 * http://kb.mozillazine.org/User.js_file
 * 
 * Important: Once an entry for a preference setting exists in the user.js file,
 * any change you make to that setting in the options and preference dialogs
 * or via about:config will be lost when you restart your Mozilla application
 * because the user.js entry will override it. 
 */

user_pref("accessibility.blockautorefresh",true);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.download.panel.shown", true); // ask me where to save files
user_pref("browser.newtab.url","about:blank");

// kick pocket
user_pref("browser.pocket.api","");
user_pref("browser.pocket.enabled",false);
user_pref("browser.pocket.enabledLocales","");
user_pref("browser.pocket.oAuthConsumerKey","");
user_pref("browser.pocket.site","");
user_pref("browser.pocket.useLocaleList",false);

// I remove all URL because I don't want to
// connecte my PC to Google
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.gethashURL", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.malware.reportURL", "");
user_pref("browser.safebrowsing.reportErrorURL", "");
user_pref("browser.safebrowsing.reportGenericURL", "");
user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
user_pref("browser.safebrowsing.reportMalwareURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.reportURL", "");
user_pref("browser.safebrowsing.updateURL", "");
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.trackingprotection.updateURL", "");

user_pref("browser.search.defaultenginename", "DuckDuckGo");

user_pref("browser.search.geoip.url", "");
user_pref("geo.enabled",false);
user_pref("geo.wifi.uri", "");

user_pref("browser.search.openintab",true);
user_pref("browser.search.showOneOffButtons",false);
user_pref("browser.search.suggest.enabled",false);
user_pref("browser.startup.page", 0);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.urlbar.trimURLs",false); // I want to see http://
user_pref("datareporting.healthreport.service.enabled",false);
user_pref("datareporting.healthreport.uploadEnabled",false);
user_pref("dom.event.clipboardevents.enable",false);

// user-agent
user_pref("general.appname.override", "");
user_pref("general.appversion.override", "");
user_pref("general.oscpu.override", "");
user_pref("general.platform.override", "");
user_pref("general.useragent.override", "Mozilla/5.0 ()");
user_pref("general.useragent.vendor", "");

user_pref("general.warnOnAboutConfig",false);
user_pref("loop.enabled",true);
user_pref("media.directshow.enabled",false);
user_pref("media.eme.enabled",false);
user_pref("media.gmp-eme-adobe.enabled",false);
user_pref("media.peerconnection.enabled",false);
user_pref("media.windows-media-foundation.enabled",false);
user_pref("network.dns.disablePrefetch",true);
user_pref("network.http.sendRefererHeader",0);
user_pref("network.http.speculative-parallel-limit",0);
user_pref("network.proxy.socks_remote_dns",true);
user_pref("plugins.click_to_play",true);
user_pref("privacy.trackingprotection.enabled",true);
user_pref("security.ssl3.dhe_rsa_aes_128_sha",false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha",false);
user_pref("security.tls.version.max",3);
user_pref("security.tls.version.min",2); // but some fucking web site use tls < 2 T_T
user_pref("services.sync.prefs.sync.browser.safebrowsing.enabled",false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled",false);
user_pref("toolkit.telemetry.enabled",false);
