import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['fade-in-image'],
  classNameBindings: ['imageLoaded::image-hidden'],
  placeholderColor: '',
  sourceImage: '',
  // animation speed in milliseconds
  animationSpeed: 1000,

  imageLoaded: false,

  // parse animationSpeed into seconds, then into a string
  animationSeconds: Ember.computed('animationSpeed', function() {
    return `${this.get('animationSpeed') / 1000}s`;
  }),

  didInsertElement() {
    this._super(...arguments);

    this.$('.placeholder').css('background-color', this.get('placeholderColor'));
    this.$('.placeholder').css('transition-duration', this.get('animationSeconds'));

    this._setupImage();
  },

  _setupImage() {
    var img = new Image();

    img.onload = () => {
      this.set('imageLoaded', true);
      this.$().css('background-image', `url(${this.get('sourceImage')})`);
      Ember.run.later(this, function() {
        this.$('.placeholder').remove();
      }, this.get('animationSpeed'));
    };

    img.src = this.get('sourceImage');
  }
});
