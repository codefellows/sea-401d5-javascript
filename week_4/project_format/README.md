## Setup Project
### Linting
+ use the class `.eslintrc` and `.eslintignore`
+ put the files in your project and don't gitignore  
+ The class falls rules include Single quotes, 2 spaces for tabs  
+ good practice to copy `.eslintrc` and `.eslintignore`  into ~/ - this allows eslint to find them if they're not in the project

#### Testing Lint  
```npm install -g eslint```  
-->in your root ```eslint *```  


  #### Sublime:
  sublime-linter, csslint, eslint

  #### Atom:
  linter, linter-eslint (pagackages)

  ### What about variables not used?

  for example in gulpfile

  ```javascript
  const watch = require('gulp-watch');

  gulp.watch('./**/*.js', ['lint', 'test']);```

  we never actually make a call with watch so we could just require

```javascript
  require('gulp-watch');```

### Setup .gitignore
[See gitignore.io to help setup ]([I'm an inline-style link](https://www.google.com)
Enter Node OSX Vim(if you use it) to git all ignores directories  
Rule of thumb: ignore generated or data files as well as env variables


how to remove node-modules if accidentally commit:  
```echo 'node_modules' >> .gitignore
$ git rm -r --cached node_modules
$ git commit -am 'ignore node_modules'```

### Setup Assignment:
Create a directory under ~/cf/401 (for example)

Fork assignment and clone in above directory

```npm init```

```npm install <...> --save-dev```

  Package.json should contain the following to all running code and test from npm.

  ```    "scripts": {
    	"start": "node server.js",
    	"test": "mocha"
  	},```

### Directory structure:
**root:**   
server.js or index.js (can additional test.js)  
gulpfile.js  
.eslintrc  
.eslintignore  
.gitignore  
package.json (fill it out but it will come from npm init)  
**folders:**  
/db  (this will be gitignores)
/lib  
/model  
/route  
/test  

#### Have a Look at this when you have time:

https://devcenter.heroku.com/articles/node-best-practices

##### Recommend save exact so that changes to modules you used won't bite you  
 ```npm install --save --save-dev --save-exact mocha```  
 ```npm install --save --save-exact morgan```

#### Naming  
lowercase filename upper camel var names
