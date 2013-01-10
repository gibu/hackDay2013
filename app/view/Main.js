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
		            html : 'Item 2',
		            style: 'background-color: #759E60'
		        },
		        {
				    //layout: 'vbox',
				    xtype: 'panel',
				    scrollable: true,
				    id: 'listContainer',
				    items: [
				        {
				            xtype: 'panel',
				            id: 'logo',
				            html: 'miejsce na nasze logo',
				            flex: 1
				        },
				        {
				            xtype: 'panel',
				            id: 'first',
				            html: '',
				            flex: 2
				        },
				        {
				            xtype: 'panel',
				            id: 'second',
				            html: '',
				            flex: 3
				        }				        
				    ]		        	
		        	/*
		        	id: 'feed',
	                styleHtmlContent: true,
	                scrollable: true,
	                xtype: 'list',
	                itemTpl: '<div class="listElement"><img src="image" class=""/>{title}</div>',              
	                id: 'feed' */			
		        },		        
		        {
		            html : 'Item 3'
		        }
		    ]        	
        }
    }
});
