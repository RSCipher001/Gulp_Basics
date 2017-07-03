

# Jade/Pug, Sass Compile With Live Server

Work with SASS and Jade/Pug while live preview in your browser which is directly synced with your code editor.

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
* Extract is downloaded as Zip
* Open Command Prompt/Terminal in folder
* run `npm install`, it will install all everything in a folder named node modules

## Last Step
* Run `gulp watch` it will open a browser and if you'll edit your code then it'll update in the browser
* Run `gulp build` will create a folder dist with all files minified
* Run `gulp live` for running live server from dist folder

NOTE: Dist folder contains compressed files so replace that with your one



## Authors

* **Ravindra Sisodia** - [GitHub](https://github.com/RSCipher001)
