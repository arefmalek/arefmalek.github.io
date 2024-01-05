#!/bin/zsh

title=$1
date=`date +'%Y-%m-%d'`
fname="$date-$title.md"

echo "---
title: $title
date: $date
draft: true
---
" > ./content/blogs/$fname
