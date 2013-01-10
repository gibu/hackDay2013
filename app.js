//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Hack': 'app'
});
//</debug>

Ext.application({
    name: 'Hack',

    requires: [
        'Ext.MessageBox'
    ],
	models: ['News'],
    stores: ['Feed'],	
    views: ['Main'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Hack.view.Main'));
        /* test JSONP */
	      Ext.data.JsonP.request({
	            url: 'http://search.newslist.mobile.onetapi.pl',
	            callbackKey: 'callback',
	            params: {
	                'x-onet-app': 'jsonp.mobile.onetapi.pl',
	                'content-type': 'application/jsonp',
	                body:{
	                	'jsonrpc': '2.0',
	                	'id': 'query_getListSolr1357825023819',
	                	'method': 'searchMoreLikeThis',
	                	'params':{
	                		'offset': 30,
	                		'limit': 30,
	                		'id': '5a4dd8da-d0ce-4447-9028-d57f97bdb346',
	                		'servicePath': 'styl-zycia.facet',
	                		'topics': 'topics^50',
	                		'fl': 'title lead topics'
	                		 
	                	}
	                	
	                }
	            },
	
	            callback: function(success, result) {
	                var weather = result.data.weather;
					console.log(result);
	            }
	        });       
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
