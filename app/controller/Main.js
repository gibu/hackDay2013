Ext.define('Hack.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	feed: '#feed',
        	first: '#first',
        	second: '#second',
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
    	config = null;
    	Ext.util.JSONP.request({
		  url: 'conf.js',
		  callbackKey: 'callback',
		  callback: function( success, data ) { console.log(data);  config = data;}
		});

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
	    			console.log(config);
	                var weather = result.result.elements;
					//console.log(weather);
					//console.log(that.getFeed());
					var myStore = Ext.create("Ext.data.Store", {
					    storeId: "usersStore",
					    model: "Hack.model.News",
					    data : weather			
	           		});
	           		//console.log(myStore);
	           		a = myStore.first();
	           		var tpl = '<div class="firstBigElement"><img src="'+a.data['image']+'" class="newsBigImg"/><span class="newsBigTitle">'+ a.data['title']+'</span><span class="newsBigLead">'+a.data['lead']+'</span></div>';
	           		that.getFirst().setHtml(tpl);
	           		var r = '';
	           		for(var i = 1; i < myStore.data.all.length; i++){
	           			var element = myStore.data.all[i].data;
	           			/*var width = 100;
	           			var height = 100;
	           			var imgCode = '06'+width.toString(16)+height.toString(16); 
	           			var checksum = Crypto.md5(name + transStr + OcdnTransformation.OCDN_KEY);
					    var buff = new Buffer(checksum.substr(0,2) + ';' + transStr );
					    var base = buff.toString('base64');
					    var ret = base.replace(/=/g, '_');*/
	           			//console.log(element);
	           			r += '<div class="listElement '+element.type+'"><img src="'+element.image+'" class="newsImg"/><span class="elementTitle">'+element.title+'</span><span class="newsBigLead">'+element.lead+'</span></div>';
	           		}
	           		that.getSecond().setHtml(r);
	           		//that.getFeed().setStore(myStore);
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