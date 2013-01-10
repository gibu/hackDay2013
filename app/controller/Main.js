Ext.define('Hack.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	feed: '#feed',
        	first: '#first',
        	main: 'main',
        	listItem: '#listNews .listItem',
        	listContainer: '#listContainer',
        	second: '#second',
        	logo: '#logo',
        	main: 'main',
        	landingPage: '#landingPage',
        	newsDetail: '#newsDetail'
        },
        control: {
        	feed: {
        		itemtap: 'showNews'
        	},
        	listItem:{
        		tap: 'clickItem'
        	},
        	main:{
        		pop: function(current,prevoiusView){
        			
        			if(prevoiusView.id == "newsDetail"){
        				prevoiusView.destroy();
        			}
        		}
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
	    			that.getLogo().setHtml('<img src="'+config.images.logo.highDpi+'"/>');
					console.log(that);
					console.log(result);
					that.renderLandingPage(that);
					
					var weather = result.result.elements;
					//console.log(weather);
					//console.log(that.getFeed());
					var myStore = Ext.create("Ext.data.Store", {
					    storeId: "newsStore",
					    model: "Hack.model.News",
					    data : weather			
	           		});
	           		//console.log(myStore);
	           		a = myStore.first();
	           		var tpl = '<div id="data_0" class="firstBigElement listItem"><img src="'+a.data['image']+'" class="newsBigImg"/><span class="newsBigTitle">'+ a.data['title']+'</span><span class="newsBigLead">'+a.data['lead']+'</span></div>';
	           		x = that.getFirst();
	           		that.getFirst().add({
							xtype: 'panel',
						    html: tpl,
						    id: 'data_0',
							listeners: {
								painted: function(panel){
									var id = panel.getId().substr(5);
							        panel.on('tap', that.showDetal,{id: id});
								}
							}		           				           				
	           			}	
	           		);	
	           		var r = '';
	           		for(var i = 1; i < myStore.data.all.length; i++){
	           			var element = myStore.data.all[i].data
	           			r = '<div rel="2" id="data_'+ i +'" class="listElement '+element.type+' listItem"><img src="'+element.image+'" class="newsImg"/><span class="elementTitle">'+element.title+'</span><span class="newsBigLead">'+element.lead+'</span></div>';
	           			that.getSecond().add({
							xtype: 'panel',
						    html: r,
						    id: 'news_'+i,
							listeners: {
								painted: function(panel){
									var id = panel.getId().substr(5);
							        panel.on('tap', that.showDetal, {id: id});
								}
							}		           				           				
	           			});
	           			
	           		}
	            }
	    });      	
    },
	renderLandingPage: function(){
		var _html = '<div class="landingPageImg"></div><style>';
		_html += '@media screen and (min-width: 288px){.landingPageImg {background: url("'+config.images.landing.smartphone.highDpi+'")}}';
		_html += '@media screen and (min-width: 768px){.landingPageImg {background: url("'+config.images.landing.tablet.highDpi+'")}}</style>';
		_html += '</style>';
		this.getLandingPage().setHtml(_html);          
	},
    clickItem: function(){
    	console.log("clickItem");
    },
    showNews: function(list,index,target, record){
		console.log('data'+record.data);
		console.log('getData'+record.getData());
    	this.getMain().push({
    		xtype: 'newsDetail',
    		title: record.data.title.slice(0,20),
    		data: record.getData()
    	});    	
    },
    showDetal: function(e){
    	var id = this.id;
    	store = Ext.data.StoreManager.lookup('newsStore');
    	var record = store.data.getAt(id);
		console.log(record.getData());
    	that.newsDetailContainer = Ext.create('Hack.view.NewsDetail',{
    		data: record.getData(),
			listeners: {
				painted: function(panel){
					a = panel;
					panel.on({
					   tap: that.popNewsDetail,
					   delegate: 'div.back'
					});			        
				}
			}       		
    	});
    	that.getMain().push(that.newsDetailContainer);
    	/*
    	that.getMain().push({
    		xtype: 'newsDetail',
    		data: record.getData(),
			listeners: {
				painted: function(panel){
					a = panel;
					panel.on({
					   tap: that.popNewsDetail,
					   delegate: 'div.back'
					});			        
				}
			}    		
    	});*/     	
    },
    popNewsDetail: function(){
    	that.getMain().pop();
    	//that.newsDetailContainer.destroy();
    }
});