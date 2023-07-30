// name      : chop.js
// git       : https://github.com/pffy
// requires  : jQuery

// base url of the seal chop image api
const b = 'https://new.sealchop.com/?';

$( document ).ready(function(){

/*
  $( '#container' ).mouseover( function(){
    gtag('event', 'mouse_over_gbtn', {
      'app_name': 'dofufa-sealchop',
      'app_touch': 'g-drive-button'
    }); 
  });
*/
	$( '#xm' ).on( 'change, keyup, input' , function(){

		// removes alphanum
		if( $( this ).val().match( /\w/gui )) {
			$( this ).val( $( this ).val().replace( /\w/gui , ''));
		}

		// removes punctuation
		if($( this ).val().match( /\p{P}/gu )) {
			$( this ).val( $( this ).val().replace( /\p{P}/gu , ''));
		}

		upd();
	});

	$( '.qq' ).on( 'input' , function(){
		upd();
	});

	$( '#copybtn' ).click(function(){
		copythat();
	});

	upd();
});


// functions

function copythat() {

	navigator.clipboard.writeText( $( '#chop' ).attr( 'src' ))
		.then(() => {

		$( '#copybtn' ).text( 'Copied!' );
		setTimeout(function(){
			$( '#copybtn' ).text( 'Copy URL to clipboard' );
		}, 1000);
		console.log( 'copied!' );
	});
}


function upd() {

	const arr = [];

	$( '.qq' ).each(function(){
		let p = $( this ).attr( 'name' ) + '=';
		arr.push( $( this ).val().toUpperCase().replace( '#' , p));
	});

	arr.push('x=' + $( '#xm' ).val());

	const url = b + arr.join( '&' );

	$( '#chop' ).attr( 'src' , url);

  /*
  if(!isDriveSupported()) {
    hideDriveBox();
    console.log( 'save to g-drive feature not supported' );
  } else {
    refill(url);
    gapi.savetodrive.go( 'container' );
    console.log( 'save to g-drive feature supported' );
  }*/
}


// reloads the google drive button container, refills
/*
function refill(url) {

  const str = `<div id="gbtn" class="g-savetodrive"
             data-src="${url}"
             data-filename="dofufa-sealchop.png"
             data-sitename="dofufa-sealchop-beta">
          </div>`;

  $( '#container' ).html(str);
}

function hideDriveBox() {
  $( '.savetodrivebox' ).each(function(){ 
    $( this ).hide() 
  });
}

function isDriveSupported() {

	if(isAppleIphone() || isAppleIpad()) {
		return false;
	}

	if(isAndroid()) {
		return false;
	}

	return true;
}*/

function isAndroid() {
	return navigator.userAgent.search(/android/ig) > -1;
}

function isAppleIpad() {
	return navigator.userAgent.search(/ipad/ig) > -1;
}

function isAppleIphone() {
	return navigator.userAgent.search(/iphone/ig) > -1;
}
