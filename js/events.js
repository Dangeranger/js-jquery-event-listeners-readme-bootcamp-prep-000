//define functions here

$(document).ready(function(){
  $('p').on('click', getIt())
});

function getIt() {
  $('p').on('click', function () {
    alert('Hey!')
    return;
  })
}
