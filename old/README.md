# firefox_change_prefs
Change parameters in prefs.js

```
$ python change_pref.py -h
Usage: change_pref.py: [options]

Options:
  -h, --help            show this help message and exit
  -f FIREFOX, --firefox=FIREFOX
                        Path to ~/.mozilla/firefox/. Change all prefs.js
                        found.
  -p PREFS, --prefs=PREFS
                        Path to prefs.js
  -m MYPREFS, --myprefs=MYPREFS
                        Path to myprefs.json
```
  
To update all prefs.js in /home/user/.mozilla/firefox/xxxxxxx/prefs.js :  
```
$ python change_pref.py
```
  
Examples of use :
```
$ python change_pref.py -p /home/user/.mozilla/firefox/xxxxxxx.default/prefs.js
```
  
```
$ python change_pref.py -f /home/toto/.mozilla/firefox/
```
  
```
$ python change_pref.py -m ./myprefs2.json
```
  

You can set your own parameters in myprefs.json.  
Details of parameters :  
https://github.com/amq/firefox-debloat  
https://ecirtam.net/wiki/doku.php?id=wiki:firefox:about_config  
