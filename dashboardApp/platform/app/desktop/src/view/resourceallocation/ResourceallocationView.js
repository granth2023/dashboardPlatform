// Ext.define('Platform.view.resourceallocation.ResourceallocationView',{
// 	xtype: 'resourceallocationview',
// 	cls: 'resourceallocationview',
// 	controller: {type: 'resourceallocationviewcontroller'},
// 	viewModel: {type: 'resourceallocationviewmodel'},
// 	requires: [],
// 	extend: 'Ext.panel.Panel',

// 	html: '<div style="font-size:24px;">resourceallocationview</div>'
// });


Ext.define('dashboardApp.view.resourceallocation.ResourceAllocationView', {
	extend: 'Ext.panel.Panel',
	xtype: 'resourceallocationview',


	requires: [
		'dashboardApp.view.resourceallocation.ResourceAllocationViewController',
		'dashboardApp.view.resourceallocation.ResourceAllocationViewModel'
	],

	controller: 'resourceallocationviewcontroller',
	viewModel: {
		type: 'resourceallocationviewmodel'
	},
	title: 'Resource Allocation',

	items: [{
		xtpe: 'labe',
		text: 'Resource Allocation View - Under Construction'
	}]
});