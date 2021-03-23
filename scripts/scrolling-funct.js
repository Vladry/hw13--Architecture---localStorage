
/*** ПЛАВНЫЙ СКРОЛЛ ВНИЗ ДО внутренней ССЫЛКИ ***/
// $('.second-menu a').click()  -можно и такой составной селектор    '.second-menu a'.   Более старое: по .click()
$('#sec-menu').on('click', (e)=>{ //атрибут href должен, но вы, НЕ указывает к какому элементу необходимо осуществить переход
// важно: определение до какого элементы из ссылки мы должны доскролить:
    let href = e.target.hash; // ТОЛЬКО ТАК! можно получить ссылку на элемент на который переход с нашей ссылки!  Определили на какой элемент ссылается ссылка для перехода
    // let href = $(e).attr('href'); // -так не работает как дают в примерах в интернете !!!
    // let href = $(this).attr('href'); // -и так не работает !!
    $('html, body').animate( {scrollTop:   $(href).offset().top    }, 1000); //ВНИМАНИЕ! Для скрола вниз используем: scrollTop: bottom   (и никакой не scrollBottom)!
});



/***  СКРЫВАЕМ-ПОКАЗЫВАЕМ по кнопке секцию с классом:  popular-clients-section ***/
const slideToggle=()=>{ $('.popular-posts').toggleClass('active');
// $('#toggle-block-button').on('click', ()=>{ $('.popular-posts').toggleClass('active');
    let myButton = $('#toggle-block-button');
    let myButTopMargin = '160px';
    if (  myButton.css('margin-top') === myButTopMargin)  {
        myButton.css('margin-top', '10px');  //сбросить margin-top в "ноль" для кнопки
        myButton.text('HIDE Popular Posts') //так задаётся innerText
    }
    else {
        myButton.animate({ 'margin-top': `${myButTopMargin}` }, 1000); // - даем верхн отступ с анимацией
        myButton.html('SHOW Popular Posts')  // а так задается innerHTML
    }
};
$('#toggle-block-button').on('click', slideToggle);



const checkScrolling=()=>{
    let scrolledFromTop = $(document).scrollTop(); //получили текущ.значение сколько проскроллили страницу.
    let windowHeight = $(window).height(); // получили общую высоты окна
    if (scrolledFromTop > windowHeight) {
        $('.but-go-to-top').toggleClass('active', true);
    }
    else {
        $('.but-go-to-top').toggleClass('active', false);
    }

};
$(document).on('scroll', checkScrolling);




/* ниже следуют только мои Фантазии - отсебятины, которые НЕ требовались по заданию: */

/*** ПЛАВНЫЙ СКРОЛЛ ВВЕРХ со ссылки "go to page top" под каждым заголовком ***/
$('.go-top').click( ()=>{ //интересно: не нужно ставить в конце [0] Здесь селектор по классам вешает ивент на ВСЕ найденные элементы с этим классом
    $('html, body').animate( {scrollTop: 0}, 1000);
}); // !!!   теория по scroll:   https://howchoo.com/javascript/how-to-animate-scroll-in-jquery


/*** ПЛАВНЫЙ СКРОЛЛ В САМЫЙ ВНИЗ (если бы нужно было определить координаты САМОГО конца документа ***/
$('#Architect').click( ()=>{  //по клику на Architect в верхн меню - прокручиваем в самый низ страницы:
    let bottom = $(document).height() - $(window).height(); // определение координаты bottom самого низа документа
    $('html, body').animate( {scrollTop: bottom}, 1000); //ВНИМАНИЕ! Для скрола вниз используем: scrollTop: bottom   (и никакой не scrollBottom)!
});


/*** ОТКРЫТЫЕ ВТОРОГО ВЕРХНЕГО МЕНЮ ПО КЛИКУ ***/
menuToggle=()=>{
    const secondMenu = $('.second-menu');
    secondMenu.toggleClass('active');
    if (secondMenu.css('display') === "flex")
        secondMenu.css('display', 'none');
    else  secondMenu.css('display', 'flex');
};
$('#auxiliary-menu').on('click', menuToggle);
