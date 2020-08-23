$(document).ready(function(){

    

    $('.hamburger').click(function(){
        $('.main-menu').toggleClass('open'); //dodajemy klasę open w css i podpinamy zamiast add przez toggle (pokazuje ukrywa po kliknieciu)
    });

    $('.main-manu-item a').click(function(e){
        e.preventDefault();

        $('body').fadeOut(2000, function(){ //wygaszanie elementu (opacity), całego 'body'
            window.location.href = $(e.targer).attr('href');
            // e -> klikniety link z klaca '.main-menu-item a'
            // $(e.targer).attr('href') --> wskazujemy href w html na ktory ma nas przekiwrowac, po kliknieciu
        }); 


        //$('body').fadeOut(2000, function{
        // ---> można tak podpiać link ale linki dodaje się w html
        //});
    });



})