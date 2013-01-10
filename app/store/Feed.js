Ext.define("Hack.store.Feed", {
    extend: 'Ext.data.Store',
    requires: [
    	'Ext.data.proxy.JsonP'
    ],
    config: {	
        model: 'Hack.model.News',
        autoLoad: false,       
	}	  
});
