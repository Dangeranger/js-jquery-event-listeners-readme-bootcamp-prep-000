//define functions here

$(document).ready(function(){
  getIt()
  frameIt()
});

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
    return;
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
    return;
  })
}

function pressIt() {
  $('input').on('keydown', function (e) {
    e.which ===
  })
}
