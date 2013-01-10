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
				    //layout: 'vbox',
				    xtype: 'panel',
				    scrollable: true,
				    items: [
				        {
				            xtype: 'panel',
				            html: 'miejsce na nasze logo',
				            flex: 1
				        },
				        {
				            xtype: 'panel',
				            id: 'first',
				            html: 'message preview',
				            flex: 2
				        },
				        {
				            xtype: 'panel',
				            id: 'second',
				            html: 'tu będzie lista',
				            flex: 3
				        }				        
				    ]		        	
		        	/*
		        	id: 'feed',
	                styleHtmlContent: true,
	                scrollable: true,
	                xtype: 'list',
	                itemTpl: '<div class="test">{title}</div><img src="{image}" />',              
	                id: 'feed' */			
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
