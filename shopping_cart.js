$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
});

$('.item .minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(e.currentTarget);
    var $input = $this.siblings("input");
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
    $input.val(value);
});
 
$('.item .plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(e.currentTarget);
    var $input = $this.siblings("input");
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }
 
    $input.val(value);
});

