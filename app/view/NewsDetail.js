Ext.define("Hack.view.NewsDetail", {
    extend: 'Ext.Panel',
    xtype: 'newsDetail',
    id: 'newsDetail',
    config: { 
        scrollable: true,
       	styleHtmlContent: true,  
		id: 'newsDetail',
        tpl: [
			'<div class="detailWrapper"><div class="back"></div><div class="share"></div></div>',
			'<img src="{image}" />',
        	'<div class="detailWrapper"><h1>{title}</h1></div>',
			'<p>{lead}</p>'
        ]   
	}
});
