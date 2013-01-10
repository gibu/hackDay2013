Ext.define("Hack.store.Items", {
    extend: 'Ext.data.Store',
    config: {	
        model: 'Hack.model.News',
        autoLoad: 'true',
		proxy : {
			type : 'jsonp',
			url : 'http://search.newslist.mobile.onetapi.pl',
			params : {
				'x-onet-app': 'jsonp.mobile.onetapi.pl',
				method: 'searchMoreLikeThis',
				params:{
				keys : ['topics', 'servicePath'],
				topics : [{
					name : "Film",
					priority : 1
				}],
				offset : 0,
				limit : 30,
				serviceName : "Facet",
				solrOldUrl : false,
				servicePath : [{
					name : "styl-zycia.facet*",
					priority : 1
				}]
				}
			}
		}
	}  
});
