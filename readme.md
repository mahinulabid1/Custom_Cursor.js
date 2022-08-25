# Animatto Cursor
Animatto_cursor is a library which helps you to change default CURSOR when a user visits your website. 

## Table of contents
* [Compatibility](#Compatibility)
* [How to install](#Howtoinstall)
* [Usuage](#howtouse)


## Compatibility
So far the library is compatible with the project that is built from scratch using HTML, CSS.

## How to install
There are two ways of installing Animatto Cursor. 
* CDN links
* Install Via npm

### CDN links
Copy this CDN links and paste it before the end of the ``` </body> ``` tag.
Here is the CDN link: 
``` 
https://cdn.jsdelivr.net/gh/user/repo@version/file (demo links)(actual link will be here soon)
```
### Install with NPM
Open terminal. Then go to the directory where your project is currently being  developed. Then run 
``` 
npm i animattocursor
```
Almost there! Go to ``` node_modules``` files and there you'll see ```.js``` file. Include that to your project html file before the end the ```</body>``` tag.

## How to use
* All you have to do is create a ```<div>``` anywhere in your html, with some specific ```class name```. That's it. 
* Create a ```<div>``` with class ```create_cursor```. Then add another class that defines what type of cursor you want to use.
*  ##### These class are:
        cursor1
        cursor2
        cursor3
        cursor4
        cursor5
        
        to...
        
        cursor11
 
 * Example code: 
 ```
 <div class = "create_cursor cursor6> </div>
 ```
 That's it. Now your cursor is changed to a different cursor. Now you changed your website cursor by just defining some class name in a div. 
 Happy Coding!
 
 Ⓒ All rights reserved by Mahinul Mostafa Abid