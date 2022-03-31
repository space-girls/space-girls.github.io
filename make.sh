#!/usr/bin/zsh

# for article in www/*.md
# do
# 
# done

# grep -o -m 1 '^#.*' www/*.md
#
# #sample output
# $ grep -o -m 1 '^#.*' www/*.md

# www/bookmarks.md:# Bookmarks
# www/courses.md:# courses
# www/gpg.why.bbs.md:# max-cache-ttl 39696
# www/gpg.why.md:# Why is GnuPG acting up ?
# www/main.md:# helloooooo
# www/mvs.md:# MB’s
# www/README.md:# Trevcan
# www/wl.md:# trevcan.github.io/wl
# 
# for each "www/*.md:#random_text" we'd like to convert it into:
# [$random_text](www/*.md)
#

# echo beginifs
# 
# IFS=$'\n'
# set -f
# for line in $(grep -o -m 1 '^#.*' www/*.md);
# do
# 	echo $line
# done

grep -o -m 1 '^#.*' www/*.md > www.md

# get markdown header
<www.md grep -o ':.*' - | cut --bytes=4- > www.raw.titles
<www.md grep -o '.*:' - | tr -d ':' > www.raw.urls

INDEX_URL_NAME_START="- ["
INDEX_URL_NAME_END="]"

INDEX_URL_START="("
INDEX_URL_END=")"

echo > www.titles
echo > www.urls

IFS=$'\n'
set -f
for line in $(cat www.raw.titles);
do
	echo "${INDEX_URL_NAME_START}${line}${INDEX_URL_NAME_END}" >> www.titles
done

IFS=$'\n'
set -f
for line in $(cat www.raw.urls);
do
	echo "${INDEX_URL_START}${line}${INDEX_URL_END}" >> www.urls
done

cat index.md.template > index.md

paste -d"\0" www.titles www.urls >> index.md

echo Done

# output urls with a ':' at the end...
# <www.md grep -o '.*:' - 
# output urls without the ':'
# <www.md grep -o '.*:' - | tr -d ':'
#

# Get redirect links
# grep 'http-equiv=refresh' --recursive
