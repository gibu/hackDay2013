Ext.define('Hack.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	feed: '#feed',
        	main: 'main'
        },
        control: {
        	feed: {
        		itemtap: 'showNews'
        	}
        }      
    },
    launch: function(){
    	that = this;
	    Ext.data.JsonP.request({
	            url: 'http://search.newslist.mobile.onetapi.pl/',
	            
	            callbackKey: 'callback',
	            params: {
	                'callback':'callback',
					'x-onet-app':'jsonp.mobile.onetapi.pl',
					'content-type':'application/jsonp',
					'body[jsonrpc]':'2.0',
					'body[id]':'query_getListSolr1357825023819',
					'body[method]':'searchMoreLikeThis',
					'body[params][offset]':30,
					'body[params][limit]':30,
					'body[params][id]':'5a4dd8da-d0ce-4447-9028-d57f97bdb346',
					'body[params][servicePath]':'styl-zycia.facet',
					'body[params][qf]':'topics^50',
					'body[params][fl]':'title lead topics',
					'_':'1357825023823'
	            },
				reader:{
					type: 'json',
					rootProperty: 'result.elements'
				},
	            callback: function(success, result) {
	    			//console.log(result);
	                var weather = result.result.elements;
					console.log(weather);
					console.log(that.getFeed());
					var myStore = Ext.create("Ext.data.Store", {
					    storeId: "usersStore",
					    model: "Hack.model.News",
					    data : weather			
	           		});
	           		that.getFeed().setStore(myStore);
	            }
	    });      	
    },
    showNews: function(list,index,target, record){
    	this.getMain().push({
    		xtype: 'newsDetail',
    		title: record.data.title.slice(0,20),
    		data: record.getData()
    	});    	
    }
});