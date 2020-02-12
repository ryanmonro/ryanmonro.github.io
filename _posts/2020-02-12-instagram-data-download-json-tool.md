---
layout: post
title:  Instagram Data Download JSON Tool
date:   2020-02-12 10:00:00 +1000
categories: [projects]
details: Python
---

## Briefly...

This is a Python script which exports photos and videos from an Instagram Data Download, reuniting them with the dates/times they were uploaded.

## Less briefly...

Since Facebook went into PR crisis mode in early 2018, they have introduced a number of features that allow you to 'download all your data', to dissuade people from thinking the company is collecting data about them and they'll never find out what it is. Enter the reassuringly named Data Download feature of Instagram.

One good thing to do with the photos in the Data Download is to upload them somewhere else, such as Google Photos, for safe keeping. Unfortunately, the metadata of all the photos is gone, and the file creation dates are set to whatever date you requested the Data Download. Which is useless. The download also contains a bunch of JSON files, one of which contains all the date/times of when the photos were uploaded through the Instagram app. 

This script outputs the photos and videos with the correct modified date. The photos will also contain the date and caption in their EXIF data. Reunited and it feels so good.

The git repository is [here](https://www.github.com/ryanmonro/instagram-data-download-json-tool).