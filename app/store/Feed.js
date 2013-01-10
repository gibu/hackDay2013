Ext.define("Hack.store.Feed", {
    extend: 'Ext.data.Store',
    config: {	
        model: 'Hack.model.News',
        autoLoad: 'false',
		proxy : {
			type : 'jsonp',
			url : 'http://search.newslist.mobile.onetapi.pl',
			callback: 'callback'
		}
	}  
});
