# Writing Modular Code
#### A Starter Guide To Node & Webpack For Web Developers

* * * * *

This repo was designed to teach news developers about the power of modular development using Node and Webpack. It is not an extensive dive into the merits or philosophies of modular code, nor is it an in-depth lesson on the complexities both Node and Webpack offer. Instead, this guide aims to be a first step for web developers unfamiliar with potentially daunting world of Node and Webpack.

In order to get the most of this guide, it is expected that you are familiar with web development (HTML and CSS) as well as the basics of JavaScript specifically. You should be comfortable with variables, functions, and loops in the language. A superficial knowledge of JSON is also helpful but not necessary.

This guide will also use `jQuery` and `moment` as example modules, but their specific uses aren't important for the scope of those lessons. Finally, many newsroom developers (including the initial recipients of this guide) are already familiar with Python so this guide will often use the conventions of that language as a frame of reference. However, no prior Python knowledge is needed to progress.

This repo was made specifically for Mac users. However, most of the terminal commands and downloads will be the same on Linux computers. I'm not sure how similar the process is on Windows.

## What's Inside?

By the end of this guide, you will be able to code a one-page web app made up of multiple JavaScript and CSS files and have a very basic understanding for how those files are bundled together into one for each language. This is a hands-on guide and comes with 5 lesson directories which will be referenced throughout. For the best results, download or clone a copy of this repo and work through the lessons on your own as you follow along.

Getting there will be somewhat of a journey. We'll start by downloading XCode (Mac specific), Node, and NPM. We'll then take a quick preview into the `node` command and the multiple ways to run JavaScript with it. Next we'll explore the `npm` command and use it to create a simple JavaScript app. We'll end that section with a look at Node scripts – its use will become more apparent in later lessons.

After we have an understanding of Node and NPM, we'll move onto Webpack. This guide will have a brief description on what it does, but we won't be going into how to customize it as that is beyond the scope of this guide. Instead a template for the necessary configuration files will be provided and used for the remainder of the lesson.

Once all the setup is complete, we'll move on to working with modules. We'll cover the most common ways to import popular modules from online as well as importing and exporting files you've made. And finally, we'll start from scratch and build a simple one-page web app with all the lessons learned.

So sit up, open up Atom (or whatever code editor is popular at the time of you reading this), and get ready for some coding.

## Table of Contents
* [Setting Things Up](#setting-things-up)
    * [XCode](#xcode)
    * [Node](#node)
* [Using Node](#using-node)
    * [Playing With The Runtime](#playing-with-the-runtime)
    * [Running JavaScript Files](#running-javascript-files)
    * [Setting Up A Node Project](#setting-up-a-node-project)
    * [Node Scripts](#node-scripts)
* [Webpack](#webpack)
* [Working With Modules](#working-with-modules)
    * [Import](#import)
    * [Export](#export)
* [Putting It All Together](#putting-it-all-together)
* [Quick Reference Guide](#quick-reference-guide)
    * [NPM Terminal Commands](#npm-terminal-commands)
    * [Importing and Exporting Modules](#importing-and-exporting-modules)
    * [Webpack File Structure](#webpack-file-structure)
    * [Webpack Bundled File Names](#webpack-bundled-file-names)
    * [Webpack Node Scripts](#webpack-node-scripts)

## Setting Things Up
In order to use all the tools node has to offer, we'll need to first download and install XCode and Node itself.

### XCode
XCode is the main developer tool for `macOS` and comes with tools Node will need to work. Install XCode from the [Apple Store](https://developer.apple.com/xcode/) and open it to [make sure that the command line tools are installed.](https://www.embarcadero.com/starthere/berlin/mobdevsetup/ios/en/installing_the_xcode_command_line_tools_on_a_mac.html)

### Node
Node is a JavaScript runtime for macOS and Windows which just means it can run JavaScript code. Think of it as the JavaScript equivalent of the `python` command on a command line.

Node also comes with its own package manager called Node Package Manager (NPM) which you can use to download JavaScript modules/libraries/packages that other people have made over the years – some of which I'm sure is familiar (like jQuery and Bootstrap) and others which are new in the node era (like Express).

To check if you already have `node` and `npm` installed, open your favorite terminal app and type:

```bash
$ which node
$ which npm
```

*Note: At many points in this guide you'll see a code snippet like the one above. They'll be in many languages but if you see one start with a `$` that means they're commands for the terminal. The `$` is used to signify that each is a different command, and the symbol itself should not be copied and run in your terminal app.*

If you see a file paths, they're installed and you can move on to the next section. If you see nothing, you'll need to install them.

You can install them both by going to the [node download page](https://nodejs.org/en/download/) and choosing your operating system under the LTS tab. Follow all the installation process instructions and then use `which node` and `which npm` again to make sure everything was installed correctly.

## Using Node
### Playing With The Runtime
Just like the `python` command, running the `node` command line opens the JavaScript runtime in the terminal. You should see the prompt change from the bash prompt (`$`) to the node prompt (`>`).

From here you can run any JavaScript code and hit enter to make it run. Try running a few lines.

Also like the Python runtime, Once you quit it, all the variables and code you've saved disappear. To quit the runtime and return to the Bash prompt hit **Ctrl+C** twice. (Yes that's `Ctrl` even on macOS, not `Cmnd`).

### Running JavaScript Files
The `node` command also has another use. If you provide a JavaScript file as an argument, it will run everything in that file. Let's see what that looks like.

Navigate to the location of this repo and enter our first lesson: `1-using-node`. From there you can run the `node` command with the name of our JavaScript file and see it in action.

```bash
$ cd path/to/repo
$ cd 1-using-node
$ node hello.js
```

### Setting Up A Node Project
To get started with a Node project we need a special file called `package.json`. Luckily NPM, comes with a handy tool that makes writing one easy. Let's start by navigating into an empty directory like `2-node-project`, and running the `npm init` command.

```bash
$ cd ../2-node-project
$ npm init
```

We can keep all the default information for now and just hit enter until we see the `Is this okay?` prompt. Hit enter one more time, and you should now see a file named `package.json` in your directory. It's helpful to think of this file as a the Node equivalent of Python's `requirements.txt` file, except instead of having to save a new copy with `freeze` whenever you install more packages, it stays up to date.

Let's start downloading a few common packages. To install a module use the following code:

```bash
$ npm install packageName --save
```

You can find every Node package available on the [NPM website](https://www.npmjs.com/). There's a lot! Let's download one you're probably familiar with along with a handy tool for working with dates.

```bash
$ npm install jquery --save
$ npm install moment --save
```

Your package.json file should now look like this:
```json
{
  "name": "2-node-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.3.1",
    "moment": "^2.20.1"
  }
}
```

Notice `jquery` and `moment` have now been added under dependencies along with the version number being used. There's also now a folder called `node_modules` in your directory and inside that is a folder for jQuery and one for moment. NPM has downloaded copies of both packages and saved them here for you to use.

We'll get to using them soon, but there's one last Node thing we need to talk about.

### Node Scripts
You should also see a section of your `package.json` which is called `scripts`. Inside there's only a `test` script but let's try running it. To run a node script use the following code:

```bash
$ npm run scriptName
```

So to run the `test` script let's run:

```bash
$ npm run test
```

Whoa. There's a lot of scary `npm ERR!` screaming at us. This is what errors look like in node and pretty much every line that starts with `npm ERR!` is useless boilerplate language. Let's scroll up above that section and see what was printed.

As you can see, it did indeed print "`Error: no test specified`" which is what we told it to do. Looking back at our `package.json` we see the code says `&& exit 1` (Bash for "send an error") which is why we see the node error.

So that's a weird default script, but that's okay. Let's make a script of our own.

After `test` we're going to add a comma and add a new key/value pair (remember that JSON files are really just JavaScript objects or Python dictionaries). We'll call this new script `hello` and we'll make the value a string that says `echo Hello World!` (echo is Bash for "print"). Your `scripts` should look like this:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "hello": "echo Hello World!"
},
```

So let's save our file and run our new script.

```bash
$ npm run hello
```

You should see `Hello World!` has been printed!

That's all the node stuff we need to know for now. Let's move on to `webpack`!

## Webpack
[Webpack](https://webpack.js.org/) is what's known as a bundler, which means it takes the lots of files you're working with (which are great for development) and combines them into just the few files you'll need to run you web app.

There's a steep learning curve to getting started with `webpack` but with a little help we can start using the black box without fully understanding how or why it works.

Let's start by installing a few (maybe more than a few) modules to run `webpack`. These are going to be development dependencies. Development dependencies differ from regular ones in that they are modules *you use to make your app* rather than *modules your app uses*. This is more of a "proper organization" thing though. Both regular dependencies and development dependencies work the same in practice. The code for installing multiple development dependencies is the following:

```bash
$ npm install package1Name package2Name package3Name --save-dev
```

So let's `cd` over into `3-webpack` and start installing.

```bash
$ cd ../3-webpack
$ npm install webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-stage-2 babel-register --save-dev
```

**A Note On Babel:** *Technically `babel` and `webpack` are independent of each other. `webpack` uses `babel` to "transpile" (translate) modern versions of JavaScript into versions that any browser can understand. Then `webpack` takes that transpiled code and bundles it into one file. For our purposes you don't really need to worry about the differences. You can read more about babel [here.](https://babeljs.io/)*

So now that we have all of that installed, if we take a look at our `package.json` file we'll see that there's a new area called `devDependencies` that has a list of all those things we just downloaded. There's one more thing we need to add to our `package.json`: Node scripts. You can delete the `test` script and replace it with `build` and `dev`. Your `scripts` object should look like this:
```json
"scripts": {
  "build": "webpack --progress --hide-modules",
  "dev": "webpack-dev-server"
},
```

* `build` will be used to ready our code for deployment.
* `dev` will run our test server for development.

We'll talk more about that and actually get to use them in lesson 5.

You'll also need `webpack` and `babel` `config` files, but those can get a little complicated so they are already included in this folder. You should see a `webpack.config.babel.js` and `.babelrc` file. You can take a look at them if you'd like.

Now it's time for all of this setup to finally pay off!

## Working With Modules
If you look at `4-using-modules` you'll see that I've moved a copy of the `webpack` and `babel` `config`. I also combined the dependencies of lesson 3 with the development dependencies of lesson 4 into a new `package.json`.

But you'll also notice there's still no `node_modules` folder. That's because we haven't downloaded them yet.`packages.json` is just a list of things you'll need to install to use the app, but having dependencies listed *doesn't necessarily mean they've been downloaded*. It's like a `requirements.txt` file. You can transfer it (or push it to a git repo) and then install all the necessary dependencies at once on your local machine. So let's do that now by navigating to this directory and running the `npm install` command with no arguments this time.

```bash
$ cd ../4-webpack
$ npm install
```

Now let's make a folder we'll be working in. Each project needs a dedicated folder for the code you're writing. Sometimes you'll see this folder in codebases called `src`,`build`, or `lib`. We're going to go use `src`.

Inside the `src` directory let's make another directory called `js` for our JavaScript files. And finally inside there let's make a file called `main.js`. Make sure to keep the names `src`, `js` and `main.js` or the `webpack` `config` I provided won't work. Our folder structure should look like this:
```
4-using-modules
├── package.json
├── webpack.config.babel.js
├── .babelrc
└── src
   └── js
      └── main.js
```

### Import
In order to work with modules once you've installed them you must `import` them. If you look through repos online you might see a number of different ways to import modules (`require()` is the common ES5 way of doing it), but the modern ES6 way of doing it is the `import` statement. It takes a number of forms which you can read all about [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), but the most common is:
```JavaScript
import variableName from 'packageName';
```

* `variableName` is the variable you want to use to refer to it in your JavaScript file. Think of this as the JavaScript equivalent to Python's `as variableName` keyword in imports.
* `packageName` is the name of the package exactly how it's spelled and formatted on NPM. Make sure to put that in quotes.

Once you've imported it, you can refer to that module using the `variableName` you provided. Let's take a look at an example. Inside `main.js` let's add the `import` statement for the `moment` module (remember you installed it when you ran `npm install`) and use some of its features to print out days of the week.

```javascript
// src/js/main.js
import moment from 'moment';

var today = moment().format('dddd');
var tomorrow = moment().add(1, 'days').format('dddd');

console.log('Today is ' + today + ', and tomorrow is ' + tomorrow + '.');
```

You can also import multiple functions from a single module. This can be done by listing the functions within curly brackets: `{  }` 

For this example, we will import functions from [Lodash](https://lodash.com/docs), a JavaScript library with many utility functions that are helpful with data manipulation. 

Say we have a an array of JSON objects we want to filter then group by a key. 

Instead of bringing in the entire Lodash library:

```javascript
import * as _ from 'lodash'
```

We can bring in what we need:

```javascript
import { filter, groupBy } from 'lodash';

const filteredData = filter(jsonArray);
const groupedData = groupBy(filteredData, 'key');
```

This can be used for other populary libaries such as d3.js. Almost all of the library's popular functions -- scale, shapes, selection -- are written to be modular, at least in V4. 

```javascript
import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';

const svg = select('body').append('svg');

const scaleNumber = scaleLinear()
  .domain([0, 10])
  .range([10, 100]);
```

Now we run our `webpack` `build` command in the console which we wrote in the last lesson.
```bash
$ npm run build
```
You should see something in the terminal which tells us all the files that were built. In this case, it's only the one JavaScript bundle called `bundle.js`.

When `webpack` bundles files, they go into a new directory called `dist`. You can check to make sure you have one and it has a `bundle.js` file inside.

To run this new bundled file we'll use our old friend `node`:

```bash
$ node dist/bundle.js
```

### Export
You can also export and import modules of your own. Let's start by making a function that calculates averages and put that in a separate file in the same `js` directory called `avg.js`.

Our function will take an array of numbers, add them all together, and divide them by their length (the algorithm for calculating mean).

We also need to `export` this function. Like with the `import` statement, exporting is really flexible and can get complicated (see all the ways [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)) but for now we'll stick to the simple use which takes the form:

```javascript
export default nameOfThing;
```
* `default` is a keyword that tells JavaScript if someone tries to import this module, the following thing should be received.
* `nameOfThing` can be any JavaScript "thing". In our example it'll be a function, but it can also be a string, an object, or a class.

```javascript
// src/js/avg.js
function avg(values){
    var sum = 0;

    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }

    var avgVal = sum/values.length;

    return avgVal;
}

export default avg;
```

Back in our main file, `main.js`, let's `import` and use our new module.

```javascript
// src/js/main.js
import avg from './avg.js';

var numbers = [1,2,3,4,5];
var avgVal = avg(numbers);

console.log('The average of [' + numbers + '] is ' + avgVal + '.');
```

Note the fact that we included the extension of the file we were importing in this case but didn't with `moment`.

**Any time you're importing one of your files and NOT a `node_module` you must include the relative path and the extension.**

So let's build and run our file again:

```bash
$ npm run build
$ node dist/bundle.js
```

In some cases, you might need to export multiple functions from one file.

For example, say you want to have a file that handles basic calculations, such as adding, subtracting, multiplying or dividing. 

We create a `math.js` file and write our functions.

```javascript
// math.js

// adding
export function add (a, b) {
  return a + b;
};

// subtracting
export function subtract (a, b) {
  return a - b;
};

// multiplying
export function multiply (a, b) {
  return a * b;
}

// dividing
export function divide (a, b) {
  return a / b;
}
```

See the lack of `default`? Using just `export` allows you to `import` any function from `math.js`. 

As mentioned above, we'd use curly brackets `{  }` to import what we need.

```javascript
import { add, divide } from './math.js';

add(2, 2); // 4
divide (10 / 2) // 5
```

That's pretty much all there is to know about making and using modules. Now there's only one last thing we need to do: combine it with html and css.

## Putting It All Together
Our JavaScript is working. But web apps are more than just JavaScript. Putting together everything we've learned in this guide, let's start from the beginning.

The app you're designing will have a button and a counter. Clicking the button will increase the counter by one.

`cd` into `5-my-app` and start a new project:

```bash
$ cd ../5-my-app
$ npm init
```

Install some of those development dependencies you'll need. (There's a few more in this list which will help you process the html and css).

```bash
$ npm install autoprefixer babel-loader babel-preset-es2015 babel-preset-stage-2 babel-register copy-webpack-plugin css-loader cssnano extract-text-webpack-plugin postcss-loader webpack webpack-dev-server --save-dev
```

Next, add some regular dependencies. You'll be using `jQuery` because it's familiar (although I do not recommend or encourage the use of jQuery, if you're ever tempted to use it for actual projects please seek help at [youmightnotneedjquery.com](http://youmightnotneedjquery.com/)). You'll also use the popular css module `normalize`.

```bash
$ npm install jquery normalize.css --save
```

Don't forget, you also need those node scripts. Open `package.json` and add the following to your `scripts`:
```json
"scripts": {
  "build": "webpack --progress --hide-modules",
  "dev": "webpack-dev-server"
},
```

Now, make the folder structure your `webpack` `config` expects, but with some CSS and HTML.

```
5-my-app
├── package.json
├── webpack.config.babel.js
├── .babelrc
└── src
   ├── index.html
   └── js
   │  └── main.js
   └── css
      └── style.css
```

Start off with the JavaScript and `main.js` again.

One weird thing to know is that for `webpack` to bundle CSS you need to `import` CSS files just like any JavaScript ones. This is for organizational reasons, but it could easily slip your mind. If your CSS isn't rendering, make sure you imported it in at least one of your JavaScript files.

Your JavaScript should look something like this:

```JavaScript
// src/js/main.js
import $ from 'jquery'; // import downloaded js module

import 'normalize.css'; // import downloaded css module
import '../css/style.css'; // import local css module

var counter = 0;
$('#button').click(function(){
    counter++;
    $('#counter').html(counter);
});
```

Your HTML will need an element with the Id `counter` and one with the Id `button`. You also need to include references to your styles and scripts. Because of your `config` file, `webpack` will bundle all of your styles into a file called `styles.min.css` and all of your scripts into a file called `bundle.js`.

With all that in mind, Your HTML should look something like this:
```html
<!-- src/index.html -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>A Basic Counter</title>
        <link rel="stylesheet" href="styles.min.css">
    </head>
    <body>
        <h1 id="counter"></h1>
        <button id="button">Click Me!</button>
        <script src="bundle.js"></script>
    </body>
</html>
```

And finally, give your elements some alignment and sizing over in `style.css`:
```css
/* src/css/style.css */
body{
    width: 100px;
    margin: 0 auto;
}

#counter{
    text-align: center;
    font-size: 28px;
}

#button{
    width: 100%;
    padding: 10px 5px;
    margin: 0 auto;
}
```

It would be a hassle if you have to run the `build` command after every tiny change. Luckily `webpack` has a way for you to preview your changes without needing to `build`: a development server. Start that by running the `dev` node script.

```bash
$ npm run dev
```

This will also open your browser to the right address. If you need to get back, you can find the preview on [localhost:8080](localhost:8080).

Make some changes to any of your files and refresh the page to see them take.

You can shut down the server and return to the Bash prompt by hitting Ctrl+C.

### Deployment
So you've finished your app, and you're ready to upload it to a server. For that you'll need the `build` command.

```bash
$ npm run build
```

Now you should see a `dist` folder with everything you need to upload to your server. If you do make more changes at a later date, run the `build` command again to make sure all your files are up to date.

### Some Notes on GitHub
When working with Webpack and a git repo, make sure you add `node_modules` and `dist` folders to your `.gitignore`.

Also, if `package.json` already exists in a repo you're cloning, remember you don't want to run the `npm init` command again. Instead run `npm install` to download all the dependencies (both dev and production).

## Quick Reference Guide
Here's a list of commands and other things you might want to quickly reference at a later date.

### NPM Terminal Commands
* `npm init`: Initializes a node project.
* `npm install`: Downloads all the dependencies listed in the `package.json` file in your current `pwd` into a `node_modules` directory. You'll receive a `no such file or directory` error if there is no `package.json` file.
* `npm install packageNameOne packageNameTwo --save`: Downloads packages named `packageNameOne` and `packageNameTwo` into your `node_modules` directory and writes them as `dependencies` in your `package.json`.
* `npm install packageNameOne packageNameTwo --save-dev`: Downloads packages named `packageNameOne` and `packageNameTwo` into your `node_modules` directory and writes them as `devDependencies` in your `package.json`.
* `npm run scriptName`: Runs a script named `scriptName` listed in the `package.json` file in your current `pwd`. You'll receive an error if there is no `package.json` file or no script with that name.

### Importing and Exporting Modules
```javascript
import variableName from 'packageName';
```
Takes the default import contents from a downloaded NPM module named `packageName` and saves it to a new variable named `variableName`.

```javascript
import variableName from './path/to/fileName.ext';
```
Takes the default import contents from a local module with the relative path of `./path/to/`, the name `fileName`, and the extension `ext` and saves it to a new variable named `variableName`.

*Note: The `webpack` `config` used in this guide can only handle `.js` and `.css` files. To `import` other kinds of files, you'll need to add more loaders to your `config`. See [this guide](https://webpack.js.org/configuration/module/) for more.*

```javascript
export default nameOfThing;
```
Exports a JavaScript "thing" (such as a string, function, object, or class) named `nameOfThing` as the default contents to be imported by other modules.

### Webpack File Structure
*Note: This only applies to projects using the `webpack` and `babel` `config` file provided in this guide.*
```
app-name
├── package.json
├── webpack.config.babel.js
├── .babelrc
└── src
   ├── index.html
   └── js
   │  ├── main.js
   │  └── ...
   └── css
      ├──style.css
      └── ...
```

### Webpack Bundled File Names
*Note: This only applies to projects using the `webpack` and `babel` `config` file provided in this guide.*
* JavaScript: `bundle.js`
* CSS: `styles.min.css`
* HTML: `index.html`

### Webpack Node Scripts
```json
"scripts": {
  "build": "webpack --progress --hide-modules",
  "dev": "webpack-dev-server"
},
```
