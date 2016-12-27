import Ember from 'ember';
import ENV from '../config/environment';

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
    var seconds = this.get('animationSpeed') / 1000;
    return `${seconds}s`;
  }),

  imagePath: Ember.computed('sourceImage', function() {
    if(ENV.environment === "production") {
      return `${ENV.rootURL}${this.get('sourceImage')}`;
    }

    return this.get('sourceImage');
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
      this.$().css('background-image', `url(${this.get('imagePath')})`);

      Ember.run.later(this, function() {
        this.$('.placeholder').remove();
      }, this.get('animationSpeed'));
    };

    img.src = this.get('imagePath');
  }
});
