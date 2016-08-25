$(document).ready(function(){

  var i = 1;
  var j = 2;
  var k = 3;
  var max = $('#photo-container-1').data('max-num');
  var prefix = $('#photo-container-1').data('photo-prefix');

  $('#photo-left').on('click', function(event){
    i--;
    if(i <= 0) i = max;
    $('#photo-container-1').css('background-image','url(img/programs/program-pics/' + prefix + '/' + prefix + '-' + i + '.jpg)');
    j--
    if(j <= 0) j = max;
    $('#photo-container-2').css('background-image','url(img/programs/program-pics/' + prefix + '/' + prefix + '-' + j + '.jpg)');
    k--;
    if(k <= 0) k = max;
    $('#photo-container-3').css('background-image','url(img/programs/program-pics/' + prefix + '/' + prefix + '-' + k + '.jpg)');
  });

  $('#photo-right').on('click', function(event){
    i++
    if(i > max) i = 1;
    $('#photo-container-1').css('background-image','url(img/programs/program-pics/' + prefix + '/' + prefix + '-' + i + '.jpg)');
    j++
    if(j > max) j = 1;
    $('#photo-container-2').css('background-image','url(img/programs/program-pics/' + prefix + '/' + prefix + '-' + j + '.jpg)');
    k++
    if(k > max) k = 1;
    $('#photo-container-3').css('background-image','url(img/programs/program-pics/' + prefix + '/' + prefix + '-' + k + '.jpg)');

  });
});
