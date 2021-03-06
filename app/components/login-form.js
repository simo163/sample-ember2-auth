import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
	session: service('session'),
	
	actions: {
		authenticate: function() {
			let data = this.getProperties('identification', 'password');
			this.get('session').authenticate('authenticator:custom', data).catch((reason) => {
				this.set('errorMessage', reason.error);
			});
		}
	}
});