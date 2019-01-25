/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {




// Download WordPress Output

$(document).ready(function () {
  // Fixs the menu so when link is clicked it would close the menu.

  $('.navbar a').on('click', function () {
    $('.navbar .navbar-collapse').collapse('toggle');
  });
  //Set the variables
  var path = '';
  var dbDetails = {
    dbHost: 'localhost',
    dbName: '',
    dbPrefix: '',
    dbUser:'',
    dbPassword:'',
    createDb: false
  }

  //On click of a path button
  $('.path-btn').on('click', function () {
    //If the ID of the current button is otherPathBtn
    if ($(this).attr('id') == 'otherPathBtn') {
      //Show the input path box
      $('#otherPath').slideDown();
    } else {
      //Else we assume its the current dir button, so hide it instead
      $('#otherPath').slideUp();
      //Reset the path back to default
      path = '';
      //Re-render the output that gets inserted into the output command box
      renderOutput();

    }
  })

  //When a user types in the box
$('#dbHost').keydown(function(){
  //Get the value and store it to the correct key
  dbDetails.dbHost = $(this).val();

  //Call the render function to insert it into the command output box
  renderOutput()
})

  //Renders/inserts the command into the output command box
  function renderOutput() {

    var allOutput = `wp core download ${path} && wp core config --dbhost=${dbDetails.dbHost} --dbname= --dbprefix=wp20_ --dbuser= && wp db create && wp core install --url= --title="" --admin_user= --admin_password="sds1hgcgrhkgxze2" --admin_email=example@example.com`;
    var configOutput = `wp core config --dbhost=${dbDetails.dbHost} --dbname= --dbprefix=wp19_ --dbuser=`
    //you got it
    $('#allCommands').html(allOutput);
    $('#configCommand').html(configOutput);
  }
  //Adds the path typed to the command box
  $('#otherPath input').keydown(function () {
    path = `--path=${$(this).val()}`;
    renderOutput();
  });
  renderOutput();

  //anything with  $() returns a jquery object, probably don't want that here



  new ClipboardJS('.btn-clipboard');

});




/***/ })
/******/ ]);