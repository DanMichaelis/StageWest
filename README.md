# Stage West Playhouse

Simple HTML website using Materialize CSS, JavaScript, JQuery.

\*\* WARNING - Always pull a current copy of whatever you are changing before uploading.

The link to make your changes is found at:
https://account.godaddy.com/access

link to page describing how to gain access
https://www.godaddy.com/help/access-another-persons-account-as-a-delegate-12373

![License](https://img.shields.io/badge/license-MIT%20License-green)

### Table of Contents

- [Debployed](#Deployed)

- [NavBar](#NavBar)

- [Footer](#Footer)

- [Index](#Index)

## Deployed

Deployed:

stagewestplayhouse.org

## NavBar

NavBar:

The top of each page should have a div labeled mobile-demo and nav-mobile. In the JavaScript folder (js) you will find a script.js and inside there you have a variable labeled nav. This nav is an object that can have a name and a link. The link is the relative path of the html document to where the current page is. You can add more pages to the navigation by adding to this object, at some point it would just get really busy. You can remove pages from the navbar by removing from that page but if they exist in godaddy they can still be accessed. Example, there is a page now stagewestplayhouse.org/specials.html and if you remove this from the object . . . someone could still type the address into the webpath and reach this page. It would probably be best to rename the html file or at least make a copy and place it somewhere else if you want to remove a page.

## Footer

Footer is very similar to the navbar in how it interacts. Items are going to append to the footArea div that has been created on each page. The Foot Object is in the js folder and the object is labeled as foot.

## Index

This is the main page of the website, the landing page. Materialize will wrap different sections in a container, you can build off of this but I have set this initially to have one container per section. The different sections can be added to or marked out. The main section that can be edited easily is the upcoming section. This is driven b the schedule.js inside the js folder from the main file structure. There is an explanation of the "object" that is at the top of the .js page. As you add or change these items it will change the index.html when it is loaded in the browser. The rest of the pages are similar in how they interact with some minor differences.
