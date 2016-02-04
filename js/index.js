var products = {
  books : [ {
              name : "Redwall",
              category : "Fiction",
              picture_url :  "http://vignette4.wikia.nocookie.net/redwall/images/4/49/RedwallUSCover.jpg/revision/latest?cb=20130119055011",
              price : 19.99,
              selling_points : "Mice fight off evil forces of evil",
              id : "redwall",
              class : "book"
            },
            {
              name : "The Fault in Our Stars",
              category : "Fiction",
              picture_url : "https://s-media-cache-ak0.pinimg.com/236x/e0/34/ec/e034ec71163f973a57f51e90be82c60d.jpg",
              price : 15.99,
              selling_points : "It's a John Green book",
              id : "the-fault-in-our-stars",
              class : "book"
            },
            {
              name : "Dune",
              category : "Fiction",
              picture_url : "https://cf.geekdo-images.com/images/pic279251.jpg",
              price : 21.99,
              selling_points : "Sand worms eat people",
              id : "dune",
              class : "book"
            }],

  albums : [{
                name : "Year of the Gentleman",
                category : "R&B",
                picture_url : "https://upload.wikimedia.org/wikipedia/en/4/4d/Ne-Yo_-_Year_of_The_Gentleman.png",
                price : 7.99,
                selling_points : "Lorem Ipsum",
                id : "year-of-the-gentleman",
                class : "music"
              },
              {
                name : "Purpose",
                category : "Pop",
                picture_url : "http://images.rapgenius.com/726b5f1c482ef2a2ae2320e2e91232d4.1000x1000x1.jpg",
                price : 6.99,
                selling_points : "Lorem Ipsum",
                id : "purpose",
                class : "music"
              }]
}

var add_to_page = function(toAdd) {
    $('#content').append("<div id=\"" + toAdd.id + "\" class=\"" + toAdd.class + " product\"><div class=\"name\">" + toAdd.name + "</div><div class=\"picture\"><img src=\"" + toAdd.picture_url + "\" /></div><div class=\"selling-points\">" + toAdd.selling_points + "</div><div class=\"category\">" + toAdd.category +  "</div><div class=\"price\">" + toAdd.price + "</div></div>");
}

for (var type in products)
{
  for(var i = 0; i < products[type].length; i++)
  {
      add_to_page(products[type][i]);
  }
}


$('.show-books').on('click', function() {
  $('.book').show();
  $('.music').hide();
});

$('.show-music').on('click', function() {
  $('.book').hide();
  $('.music').show();
});

$('.show-all').on('click', function() {
  $('.book').show();
  $('.music').show();
});
