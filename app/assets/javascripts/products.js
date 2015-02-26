$(document).on('page:load ready', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.get('/products?search=' + searchValue)
      .done(function(data){
        console.log(data);
        $('#products').html(data);
      });
  });
});