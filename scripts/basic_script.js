window.onload = hello;

function hello() {
  $('a').on('click',function(){
    $('a').addClass('inactivePage');
   $(this).addClass('activePage');
});
}
