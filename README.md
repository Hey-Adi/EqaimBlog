# Welcome to Eqaim Blog!

Hi! I’m Aditya Burman **MERN** stack developer. I developed this Blog website in just **27 Hours**. Once you have set up your environment ( *Instructions mentioned below* ), you can create Articles, see a particular Article ( *Created by you* ) also see all Articles ( *Created by you obviously* ).


# Folders

There are 3 folders ( Frontend / Backend / Final ).
**The Final ( *Main* ) folder is what we are going to explore.**

## Prerequisites

To run this project:-

 - Node.JS **version 16.14** and above
 - MongoDB **version 5.0.6** and above

## Setup & Start

 - Download **Final** folder to your machine.
 - Open your terminal / command line
 - Type: **npm i**
 - Type: **npm i dotenv**
 - Open your favorite browser
 - In the Url bar type:- http://localhost:5000
 - Or your can follow above link too.
 - Boom!

## Major Notice

Please read the following points before using this project:-

 - This site isn't **Mobile Friendly**, so please make sure you are using a PC.
 - **Html Sanitization** isn't enabled, but you can enable it by following this [Section](#enable-html-sanitization).
 - Also, I didn't get that much time to work on ( UI/UX ). So, for some audiences, it may look horrible. Please forgive me in advance.
 - That's it 😉.

## Enable HTML Sanitization

Follow below steps to sanitize html before publishing any article.

 - cd over **./Final/controller/articles.js**
 - Open your favorite **IDE**.
 - Hop in to **line 42**.
 - **copy sanitize(body)** to above obj `body: sanitize(body)` where `body: body,` is present.
 - Save & run this **Eqaim Blog** again.
 - **Boom!** Now for every article you publish, it will sanitize HTML automatically.

## Future Notes

I'll add notes later!
