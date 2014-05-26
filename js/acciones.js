// JavaScript Document
	$(document).ready(function(e){
	
	var panel ='<div data-role="panel" id="defaultpanel" data-theme="a" data-display="overlay"><div class="panel-content" align="center"> <h3>Menú</h3> <img src="imagenes/T-Rex.png" width="170" height="74"> <div data-role="controlgroup"> <a data-role="button" href="#Rex" id="B_Rex">T-Rex</a>  <a data-role="button">Button</a> <a data-role="button">Acerca de</a> </div> <a href="#demo-links" data-rel="close" data-role="button" data-theme="a" data-icon="delete" data-inline="true">Cerrar</a> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});

    $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	

	document.getElementById('roar').play();

	 $.mobile.navigate( "#principal" );
	});
	
	$('#B_Rex').tap(function (e) {
 	 $.mobile.navigate( "#Rex" );
	});
});//ready
