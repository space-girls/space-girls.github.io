#!/bin/sh
# script that retrieves the content inside the first
# set of <title> </title> tags
# inspiration:
# https://stackoverflow.com/questions/39650612/how-to-extract-text-between-html-tags-with-or-condition-multiple-times#39651955


URL=$(curl -L "$1" | tr -d '\n' |  
	grep -oz '<title.*title>\|^--.*' |
	cut -b 8-  |
	sed "s/.\{0,9\}$//; /^$/d" |
	tr -d '\n' )

echo "${URL%%</title>*}"

