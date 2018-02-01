import $ from 'jquery'; // import downloaded js module

import 'normalize.css'; // import downloaded css module
import '../css/style.css'; // import local css module

var counter = 0;
$('#button').click(function(){
    counter++;
    $('#counter').html(counter);
});
