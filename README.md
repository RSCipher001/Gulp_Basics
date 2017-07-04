# Jade/Pug, Sass Compile With Live Server

Work with SASS and Jade/Pug while live preview in your browser which is directly synced with your code.

## Features
* Compile Jade & Pug to HTML
* Compile SASS to CSS
* CSS vendor prefixing with autoprefixer
* Live sync with many devices or browsers
* CSS Map files for debugging
* Minify HTML,CSS & Optimize JavaScript for server

In short you can edit you jade or SASS file and it'll preview directly in your browsers and you can compile and minify all file with just one command and you don't have to worry about vendor prefixing


## Getting Started

First install nodejs which is very simple just google it. Atter successfully Installing nodejs open your Command Prompt/Terminal and run `node -v` & `npm -v` to make sure that nodejs is correctly installed, These commands will output your current version of npm and node. Then run these commands

NOTE: Add sudo if you are using Mac or Linux

Windows user:
```
npm install -g gulp-cli
npm install -g jshint
npm install -g node-gyp
```

Linux & Mac user:
```
sudo npm install -g gulp-cli
sudo npm install -g jshint
sudo npm install -g node-gyp
```
## Second Step

* First clone or download this repository
* Extract if downloaded as Zip, `src` contains source files like sass, jade and compiled HTML & CSS. Another folder `dist` contains optimized files.
* Open Command Prompt/Terminal in project folder
* run `npm install`, it will install all required modules and will create a folder named 'node_modules' or similar name.

NOTE: You can always generate `dist` from files available in `src` so feel free to delete it when you don't need it.


## Last Step [Available Options]
1. Run `gulp watch` and it will open a browser and now if you'll edit your code then it'll update in the browser.

2. You can copy address of the page from address bar to change the browser, you can also use your devices connected in the same network like your mobile phone with changing IP.

3. Run `gulp build` and will create a folder `dist` with all files minified and optimized for server usage.

4. Run `gulp live` for running live server from `dist` folder.

NOTE: `dist` folder contains compressed files so don't use ths folder for reading code use `src` instead.

## Authors

**Ravindra Sisodia**

[GitHub](https://github.com/RSCipher001)
