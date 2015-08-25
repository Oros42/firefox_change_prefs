# firefox_change_prefs
Change parameters in firefox for better privacy.  
  
When you open firefox, by default, it's connect to :   
```
nb DNS request : domain   
1 : www.mozilla.org.   
1 : snippets.cdn.mozilla.net.   
1 : location.services.mozilla.com.   
3 : ff.search.yahoo.com.   
1 : ocsp.digicert.com.   
1 : geo.mozilla.org.   
3 : search.yahoo.com.   
1 : self-repair.mozilla.org.   
1 : ciscobinary.openh264.org.   
1 : clients1.google.com.   
1 : search.services.mozilla.com.   
1 : safebrowsing.google.com.   
1 : aus4.mozilla.org.   
53 : safebrowsing-cache.google.com.
```
   
See -> https://www.ecirtam.net/links/?40QYwg (French)  
   
So how to fix it ?   
1- Read https://raw.githubusercontent.com/Oros42/firefox_change_prefs/master/user.js  
2- Put user.js in your firefox profile's folder (/home/user/.mozilla/firefox/xxxxxxx.default/).  
  
This script remove all google, pocket and mozilla URL who can track you.  
  
Old way in ./old/  
