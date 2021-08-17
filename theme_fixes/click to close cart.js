$('a.open-cart').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('.cart-dropdown').toggleClass('active');

    $(document).one('click', function closeMenu (e){
        if($('.cart-dropdown').has(e.target).length === 0){
            $('.cart-dropdown').removeClass('active');
        } else {
            $(document).one('click', closeMenu);
        }
    });
});