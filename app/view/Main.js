Ext.define('Hack.view.Main', {
	extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.dataview.List',
		'Ext.carousel.Carousel'	        
    ],
    config: {
	    navigationBar: {
	        hidden: true
	    },    	
        items: {
		    fullscreen: true,
			xtype: 'carousel',
		    defaults: {
		        styleHtmlContent: true
		    },
		
		    items: [
		        {
					'html': 'test'				
		        },
		        {
		            html : 'Item 2',
		            style: 'background-color: #759E60'
		        },
		        {
		            html : 'Item 3'
		        }
		    ]        	
        }
    }
});
