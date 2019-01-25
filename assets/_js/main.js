import { userInfo } from "os";



// Download WordPress Output

$(document).ready(function () {
  // Fixs the menu so when link is clicked it would close the menu.

  $('.navbar a').on('click', function () {
    $('.navbar .navbar-collapse').collapse('toggle');
  });
  //Set the variables
  var path = '';
  var dbDetails = {
    dbHost: '--dbhost=localhost',
    dbName: '',
    dbPrefix: ' --dbprefix=wpdw_',
    dbUser: '',
    dbPassword: '',
    createDb: true
  };
  var siteDetails = {
    title: '',
    url: ''
  };
  var userInfo = {
    name: '',
    pass: '',
    email: ''
  }

  //On click of a path button
  $('.path-btn').on('click', function () {
    //If the ID of the current button is otherPathBtn
    if ($(this).attr('id') == 'otherPathBtn') {
      $('#otherPathBtn').addClass('active');
      $('#currentPathBtn').removeClass('active');
      //Show the input path box
      $('#otherPath').slideDown();
    } else {
      //Else we assume its the current dir button, so hide it instead
      $('#otherPath').slideUp();

      $('#currentPathBtn').addClass('active');
      $('#otherPathBtn').removeClass('active');

      //Reset the path back to default
      path = '';
      //Re-render the output that gets inserted into the output command box
      renderOutput();

    }
  })
  //On click of a path button
  $('.db-btn').on('click', function () {
    //If the ID of the current button is otherPathBtn
    if ($(this).attr('id') == 'nocreateDBBtn') {
      $('#nocreateDBBtn').addClass('active');
      $('#createDBBtn').removeClass('active');
      dbDetails.createDb = 'false';
    } else {
      //Else we assume its the current dir button, so hide it instead
      $('#createDBBtn').addClass('active');
      $('#nocreateDBBtn').removeClass('active');
      dbDetails.createDb = 'true';

      //Reset the path back to default
      //Re-render the output that gets inserted into the output command box
      renderOutput();

    }
  })
  //Adds the path typed to the command box
  $('#otherPath input').keydown(function () {
    path = ` --path=${$(this).val()}`;
    renderOutput();
  });

  //When a user types in the box
  $('#dbHost').keydown(function () {
    //Get the value and store it to the correct key
    dbDetails.dbHost = `--db=${$(this).val()}`;
    //Call the render function to insert it into the command output box
    renderOutput()
  })
  //When a user types in the box
  $('#dbName').keydown(function () {
    //Get the value and store it to the correct key
    dbDetails.dbName = ` --dbname=${$(this).val()}`;
    //Call the render function to insert it into the command output box
    renderOutput()
  })
  //When a user types in the box
  $('#dbPrefix').keydown(function () {
    //Get the value and store it to the correct key
    dbDetails.dbPrefix = ` --dbprefix=${$(this).val()}`;
    //Call the render function to insert it into the command output box
    renderOutput()
  })
  //When a user types in the box
  $('#dbUser').keydown(function () {
    //Get the value and store it to the correct key
    dbDetails.dbUser = ` --dbuser=${$(this).val()}`;
    //Call the render function to insert it into the command output box
    renderOutput()
  })

  //When a user types in the box
  $('#dbPass').keydown(function () {
    //Get the value and store it to the correct key
    dbDetails.dbPassword = ` --dbpass="${$(this).val()}"`;
    //Call the render function to insert it into the command output box
    renderOutput()
  });

  //When a user types in the box
  $('#siteURL').keydown(function () {
    //Get the value and store it to the correct key
    siteDetails.url = ` --url="${$(this).val()}"`;
    //Call the render function to insert it into the command output box
    renderOutput()
  });

  //When a user types in the box
  $('#siteName').keydown(function () {
    //Get the value and store it to the correct key
    siteDetails.title = ` --title=${$(this).val()}`;
    //Call the render function to insert it into the command output box
    renderOutput()
  });

  //When a user types in the box
  $('#userName').keydown(function () {
    //Get the value and store it to the correct key
    userInfo.name = ` --admin_user=${$(this).val()}`;
    //Call the render function to insert it into the command output box
    renderOutput()
  });

  //When a user types in the box
  $('#userPass').keydown(function () {
    //Get the value and store it to the correct key
    userInfo.pass = ` --admin_password="${$(this).val()}"`;
    //Call the render function to insert it into the command output box
    renderOutput()
  });

  //When a user types in the box
  $('#userEmail').keydown(function () {
    //Get the value and store it to the correct key
    userInfo.email = ` --admin_email="${$(this).val()}"`;
    //Call the render function to insert it into the command output box
    renderOutput()
  });

  setInterval(renderOutput, 1)

  //Renders/inserts the command into the output command box
  function renderOutput() {
    var alldbCreate = '';
    var dbCreate = '';

    if (dbDetails.createDb === true) {
      alldbCreate = " && wp db create"
      dbCreate = "wp db create"
    } else {
      alldbCreate = ''
      dbCreate = ''
    }
    if (dbDetails.dbPassword === ` --dbpass=""`) {
      dbDetails.dbPassword = '';
    }

    var allOutput = "wp core download" + path + " && wp core config " + dbDetails.dbHost + dbDetails.dbName + dbDetails.dbPrefix + dbDetails.dbUser + dbDetails.dbPassword + alldbCreate + " && wp core install " + siteDetails.url + siteDetails.title + userInfo.name + userInfo.pass + userInfo.email
    //  --admin_email=example@example.com`;
    var downloadOutput = "wp core download";
    var configOutput = "wp core config " + dbDetails.dbHost + dbDetails.dbName + dbDetails.dbPrefix + dbDetails.dbUser + dbDetails.dbPassword
    var installOutput = "wp core install " + siteDetails.url + siteDetails.title + userInfo.name + userInfo.pass + userInfo.email;

    $('#allCommands').html(allOutput);
    $('#downloadCommand').html(downloadOutput);
    $('#configCommand').html(configOutput);
    $('#installCommand').html(installOutput);
  }

  renderOutput();

  //anything with  $() returns a jquery object, probably don't want that here



  new ClipboardJS('.btn-clipboard');
});


