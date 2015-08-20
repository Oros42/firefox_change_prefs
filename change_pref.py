#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
from json import loads
from shutil import copy
from optparse import OptionParser
from sys import exit
from time import time

parser = OptionParser(usage="%prog: [options]")
parser.add_option("-f", "--firefox", dest="firefox", default='{}/.mozilla/firefox/'.format(os.environ['HOME']), help="Path to ~/.mozilla/firefox/. Change all prefs.js found.")
parser.add_option("-p", "--prefs", dest="prefs", default='', help="Path to prefs.js")
parser.add_option("-m", "--myprefs", dest="myprefs", default='myprefs.json', help="Path to myprefs.json")
(options, args) = parser.parse_args()

myprefs_file_name=options.myprefs
if options.prefs != '':
	prefs_file_names=options.prefs
	if not os.path.isfile(prefs_file_names):
		exit("File {} not found !".format(prefs_file_names))
else:
	if os.path.isdir(options.firefox):
		prefs_file_names=[]
		firefox=options.firefox
		if firefox[-1:] != '/':
			firefox+='/'
		for f in os.listdir(firefox):
			if os.path.isdir(firefox+f) and os.path.isfile(firefox+f+'/prefs.js'):
				prefs_file_names.append(firefox+f+'/prefs.js')

		if prefs_file_names==[]:
			exit("prefs.js not found in subdirectory of {} !".format(options.firefox))	
	else:
		exit("{} is not a directory !".format(options.firefox))

if not os.path.isfile(myprefs_file_name):
	if os.path.isfile('myprefs.json.example'):
		copy('myprefs.json.example', 'myprefs.json')

for prefs_file_name in prefs_file_names:
	print("\033[31mFile : {}\033[0m".format(prefs_file_name))
	myprefs_file = open(myprefs_file_name,'r')
	myprefs_json=loads(myprefs_file.read())
	myprefs_file.close()
	prefs_file = open(prefs_file_name,'r')
	new_prefs=''
	have_change=False

	# fix the fucking json
	for p in myprefs_json:
		if not type(myprefs_json[p]) is int:
			if myprefs_json[p]==True:
				myprefs_json[p]="true"
			elif myprefs_json[p]==False:
				myprefs_json[p]="false"
			else:
				myprefs_json[p]='"{}"'.format(myprefs_json[p])


	print("\033[31mChange parameters :\033[0m")
	for line in prefs_file.readlines():
		if 'user_pref("' in line :
			n=line[11:]
			n=n[:n.index('"')]
			if n in myprefs_json:
				old_line=line
				line='user_pref("{}",{});\n'.format(n,myprefs_json[n])
				if line != old_line:
					print("{} : {}".format(n, myprefs_json[n]))
					have_change=True
				del myprefs_json[n]
		new_prefs+=line
	prefs_file.close()

	if myprefs_json != {} :
		have_change=True
		print("\n\033[31mAdd parameters :\033[0m")
		for p in myprefs_json:
			print("{} : {}".format(p, myprefs_json[p]))
			new_prefs+='user_pref("{}",{});\n'.format(p,myprefs_json[p])

	# save
	if have_change:
		print("\n\033[31mSave\033[0m\n")
		copy(prefs_file_name, prefs_file_name+"."+str(int(time()))) #backup
		with open(prefs_file_name, 'w') as f:
		    f.write(new_prefs)
	else:
		print("\033[31mNo change\033[0m\n")