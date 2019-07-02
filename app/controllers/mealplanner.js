import { A } from '@ember/array';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  allMeals: readOnly('model'),

  chosenMealKeys: null,
  rejectedMealKeys: null,

  remainingSuggestions: computed('allMeals', function _remainingSuggestions() {
    return this.get('allMeals');
  }),

  chosenMeals: computed(function _chosenMeals() {
    return [];
  }),

  rejectedMeals: computed(function _rejectedMeals() {
    return [];
  }),
});
