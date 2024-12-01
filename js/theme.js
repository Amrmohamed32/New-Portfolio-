/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});



////////////////////////////////////////////////////////////////////////
// On-Scroll Animated Header: https://github.com/codrops/AnimatedHeader
////////////////////////////////////////////////////////////////////////

var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();



//////////////////////////////////////////////
// Highlight the top nav as scrolling occurs
//////////////////////////////////////////////

$('body').scrollspy({
    target: '.navbar',
    offset: 65
})



///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("slow");
});



////////////////////////////////////////////////////
// OWL Carousel: http://owlgraphic.com/owlcarousel
////////////////////////////////////////////////////

// Intro text carousel
$("#owl-intro-text").owlCarousel({
    singleItem : true,
    autoPlay : 6000,
    stopOnHover : true,
    navigation : false,
    navigationText : false,
    pagination : true
})


// Partner carousel
$("#owl-partners").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    autoPlay : 5000,
    stopOnHover : true,
    pagination : false
})

// Testimonials carousel
$("#owl-testimonial").owlCarousel({
    singleItem : true,
    pagination : true,
    autoHeight : true
})


////////////////////////////////////////////////////////////////////
// Stellar (parallax): https://github.com/markdalgleish/stellar.js
////////////////////////////////////////////////////////////////////

$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: false,
    verticalScrolling: true,
});



///////////////////////////////////////////////////////////
// WOW animation scroll: https://github.com/matthieua/WOW
///////////////////////////////////////////////////////////

new WOW().init();



////////////////////////////////////////////////////////////////////////////////////////////
// Counter-Up (requires jQuery waypoints.js plugin): https://github.com/bfintal/Counter-Up
////////////////////////////////////////////////////////////////////////////////////////////

$('.counter').counterUp({
    delay: 10,
    time: 2000
});



////////////////////////////////////////////////////////////////////////////////////////////
// Isotop Package
////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
$('.portfolio_menu ul li').click(function(){
	$('.portfolio_menu ul li').removeClass('active_prot_menu');
	$(this).addClass('active_prot_menu');
});

var $container = $('#portfolio');
$container.isotope({
  itemSelector: '.col-sm-4',
  layoutMode: 'fitRows'
});
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  return false;
});
});



/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});



////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

////////////////////////////////////////////////////////////////////
// Begain CRUDS Product Managment System
////////////////////////////////////////////////////////////////////

let title = document.getElementById('title');
let price= document.getElementById('price');
let taxes= document.getElementById('taxes');
let ads= document.getElementById('ads');
let discount= document.getElementById('discount');
let total= document.getElementById('total');
let count= document.getElementById('count');
let category= document.getElementById('category');
let submit= document.getElementById('submit72');

function getTotal()
{
    if(price.value !=''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }else{
        total.innerHTML = '';
        total.style.background = '#a00d02'
    }
}

let datapro = [];   //el array da howa el mkan ely byt7afez feh el data ely htda5elha dynamic//
submit.onclick = function(){

    let newpro = {            // 7atetha fe bject 3lshen a3ref el qayem dy bat3et eh 3lshen leo sebtha men 8er object el ma3lomat httla5bat//
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,             //3lshen el total m4 input //
        count:count.value,
        category:category.value,
    }
    if(newpro.count > 1){                                                      //a3mely loop b3daya el vale ely mawgood fe el count y3eny leo katab 5 hy3mel 5 montagat we ktabt > 1 3LSHEN LEO KTABT 1 FA HEYA HEYA NA 3AYES LOOP BE AKTER MEN 1//
           for(let i = 0; i < newpro.count;i++){
            datapro.push(newpro)                                              //ydefha fe el array be push men el inputs bs leo 3melt reload htro7 we da ely na 3ayeso leo 3ayesh mtro7esh ht3mel tre2et el locak sorage//
           }
    }else{                                                                    // leo wa7ed zaref y3eny 7ab yktem badl el wa7ed -1 aw - 3matan hygeblo montag wa7ed bs we 5ales//
        datapro.push(newpro)                                            
    }

    clearData()
    showData()

}


//clear inputs//

function clearData(){
   title.value = "";
   price.value = "";
   taxes.value = "";
   ads.value = "";
   discount.value = "";
   total.innerHTML = "";     //3lshen dy m4 input b2olo fadely el data ely httle3 fe el html//
   count.value = "";
   category.value = "";
}


//show data in the table//
function showData(){

let table ='';
for(let i = 0; i < datapro.length;i++) {
    table += `
    <tr>
    <td>${i}</td>            
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td><button onclick="deleteData( ${i} )" id="delete">Delete</button></td>
</tr>
`
}


document.getElementById('tbody').innerHTML = table;
//show delete all button//
let btnDelete = document.getElementById('deleteAll');    
if(datapro.length > 0){                               
    btnDelete.innerHTML = `
    <button onclick="deleteAll()" id="delete">delete All (${datapro.length})</button>
    `
}else{
    btnDelete.innerHTML = ''; 
}

}
//delete data//
function deleteData(i)
{
   datapro.splice(i,1);    //4ely 3onsor wa7ed men el array we el i dy ely 3onsor ely hy5taro el user//
   showData()              // 7adesly rl byanat we wateny el array ba3ed ma 3melt el ta8yerat//
}

function deleteAll(){
    datapro.splice(0)
    showData()
}