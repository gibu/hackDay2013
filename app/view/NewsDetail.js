Ext.define("Hack.view.NewsDetail", {
    extend: 'Ext.Panel',
    xtype: 'newsDetail',
    id: 'newsDetail',
    config: { 
        scrollable: true,
       	styleHtmlContent: true,         
        tpl: [
   			'<div class="back">powrót</div>',
        	'<div>{title}</div>'
        ]   
	}
});
