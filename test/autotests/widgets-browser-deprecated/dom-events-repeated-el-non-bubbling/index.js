module.exports = require('marko/widgets/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	handleColorMouseOver: function(event, el) {
		this.color = el.getAttribute('data-color');
	}
});