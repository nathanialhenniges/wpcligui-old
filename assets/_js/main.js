


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


