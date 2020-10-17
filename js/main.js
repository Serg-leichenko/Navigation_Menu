// burger
$('.burger').click(function(){
    $('.burger span:nth-child(1)').toggleClass('first');
    $('.burger span:nth-child(2)').toggleClass('second');
    $('.burger span:nth-child(3)').toggleClass('last');
});

//dropdown
$('#burgerMenu').click(function(){
  $('.drop-items').toggle();
});

//button plus
let dropPlus = document.querySelectorAll('.dropPlus');
dropPlus.forEach(function (dropPlus) {
  dropPlus.addEventListener('click', function (event) {
    event.target.closest('.dropPlus').classList.toggle('active');
  });
});


let dropdownList = document.querySelectorAll('.dropdownList');
dropdownList.forEach(function (dropdownList) {
  dropdownList.addEventListener('click', function (event) {
    event.target.closest('.dropdownList').classList.toggle('active');
  });
});