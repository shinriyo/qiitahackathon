function onText( data ) {
    var str = data.title  + ' ' + data.telop ;

    var weather_dom     = document.createElement('div') ;
    var title_dom       = document.createElement('strong') ;
    var text_dom        = document.createTextNode( str ) ;
    title_dom.innerText = 'Tomorrow\'s weather ' ;
    weather_dom.appendChild( title_dom ) ;
    weather_dom.appendChild( text_dom ) ;
    weather_dom.style.background = '#36b' ;
    weather_dom.style.color      = '#fff' ;
    weather_dom.style.padding    = '10px' ;
    weather_dom.style.position   = 'relative' ;
    weather_dom.style.zIndex     = '123456' ;
    weather_dom.style.font       = '14px Arial' ;
    document.body.insertBefore( weather_dom, document.body.firstChild ) ;
}

chrome.extension.sendRequest( {'action' : 'weather'}, onText ) ;