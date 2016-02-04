var book1 = {
  name : "Redwall",
  category : "Fiction",
  picture_url :  "http://vignette4.wikia.nocookie.net/redwall/images/4/49/RedwallUSCover.jpg/revision/latest?cb=20130119055011",
  price : 19.99,
  selling_points : "Mice fight off evil forces of evil",
  id : "redwall",
};

var book2 = {
  name : "The Fault in Our Stars",
  category : "fiction",
  picture_url : "https://s-media-cache-ak0.pinimg.com/236x/e0/34/ec/e034ec71163f973a57f51e90be82c60d.jpg",
  price : 15.99,
  selling_points : "It's a John Green book",
  id : "the-fault-in-our-stars",
};

var album1 = {
  name : "Year of the Gentleman",
  category : "R&B",
  picture_url : "https://upload.wikimedia.org/wikipedia/en/4/4d/Ne-Yo_-_Year_of_The_Gentleman.png",
  price : 7.99,
  selling_points : "Lorem Ipsum",
  id : "year-of-the-gentleman",
};

var album2 = {
  name : "Purpose",
  category : "Pop",
  picture_url : "http://images.rapgenius.com/726b5f1c482ef2a2ae2320e2e91232d4.1000x1000x1.jpg",
  price : 6.99,
  selling_points : "Lorem Ipsum",
  id : "purpose",
};

$('#redwall .name').text(book1.name);
$('#redwall .picture').html("<img src=\"" + book1.picture_url + "\" />");
$('#redwall .category').text(book1.category);
$('#redwall .price').text(book1.price);
$('#redwall .selling-points').text(book1.selling_points);

$('#the-fault-in-our-stars .name').text(book2.name);
$('#the-fault-in-our-stars .picture').html("<img src=\"" + book2.picture_url + "\" />");
$('#the-fault-in-our-stars .category').text(book2.category);
$('#the-fault-in-our-stars .price').text(book2.price);
$('#the-fault-in-our-stars .selling-points').text(book2.selling_points);

$('#year-of-the-gentleman .name').text(album1.name);
$('#year-of-the-gentleman .picture').html("<img src=\"" + album1.picture_url + "\" />");
$('#year-of-the-gentleman .category').text(album1.category);
$('#year-of-the-gentleman .price').text(album1.price);
$('#year-of-the-gentleman .selling-points').text(album1.selling_points);

$('#purpose .name').text(album2.name);
$('#purpose .picture').html("<img src=\"" + album2.picture_url + "\" />");
$('#purpose .category').text(album2.category);
$('#purpose .price').text(album2.price);
$('#purpose .selling-points').text(album2.selling_points);
