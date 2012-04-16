
var USER_OR_GROUP_NAME = 'yhannc'; // TODO: Insert GitHub username or group name.

////////////////////////////////////////////////////////////////////////////////

if (! USER_OR_GROUP_NAME) { 
  throw new Error(
    'You must set your GitHub username or group name in the app.js file'); 
}

// Import some utility functions.
var utils = require('./utils');

// Create a new web application.
var app = utils.initializeWebApp();

// Connect to the database.
var db = utils.connectToDatabase(USER_OR_GROUP_NAME);

// TODO: Start defining your resource handlers. You may just need to modify the
// examples below, or you may need to add additional handlers by copying,
// pasting, and modifying these examples.

////////////////////////////////////////////////////////////////////////////////
// Example of handling PUT to create or update a resource. /////////////////////
// Here we create or update an item using the ID specified in the URI. /////////
////////////////////////////////////////////////////////////////////////////////
app.put('/makes/:id',      // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/list-makes.ejs`.
    var item = req.body.item;
    
    item.type = 'make'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling GET of a "collection" resource. /////////////////////////
// Here we list all items of type `make`. //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/makes/',         // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'make'; // TODO: change to the type of item you want.

    // Get all items of the specified type from the database.
    db.getAll(item_type, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'list-makes',   // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling POST to create a resource. //////////////////////////////
// Here we create an item and allow the ID to be created automatically. ////////
////////////////////////////////////////////////////////////////////////////////
app.post('/cars/', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item info that was POSTed from the input form.
    // See the form in `views/one-make.ejs`.
    var item = req.body.item;

    item.type = 'car'; // TODO: change to the type of item you want

    // Save the new item to the database. (No ID specified, it will be created.)
    db.save(item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Another example of handling PUT to update a resource. ///////////////////////
// Here we update an item using the ID specified in the URI. ///////////////////
////////////////////////////////////////////////////////////////////////////////
app.put('/cars/:id', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/one-candidate.ejs`.
    var item = req.body.item;

    item.type = 'car'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Another example of handling GET of a "collection" resource. /////////////////
// This time we support filtering the list by some criteria (i.e. searching). //
////////////////////////////////////////////////////////////////////////////////
app.get('/cars/',          // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'car'; // TODO: change to the type of item you want.

    // Get items of the specified type that match the query.
    db.getSome(item_type, req.query, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'list-cars', // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of a "single" resource. //////////////////////////
// This handler is more complicated, because we want to show not only the //////
// item requested, but also links to a set of related items. ///////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/makes/:id',      // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'make'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the related items associated with this item.
      else {
        
        var related_type = 'car'; // TODO: change to type of related item.

        // Set our query to find the items related to the requested item.
        req.query.make = item_id; // TODO: change `party` to reflect the
                                   // relation between the item fetched above
                                   // and the related items to be fetched below.

        // Get items of the specified type that match the query.
        db.getSome(related_type, req.query, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
            'one-make', // TODO: change to the name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of a "single" resource. //////////////////////////
// This handler is also complicated, because we want to show not only the //////
// item requested, but also a list of potential related items, so that users ///
// can select from a list when updating the item. //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/cars/:id',       // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'car'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the items potentially related to this item.
      else {
        
        var related_type = 'make'; // TODO: change to type of related item.

        // Get all items of the specified related type.
        db.getAll(related_type, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
              'one-car', // TODO: change to name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);


// Handle GET of the "index" resource.
app.get('/', function(req, res) { res.render('index'); });

// Start listening for incoming HTTP connections.
app.listen(process.env.PORT);
