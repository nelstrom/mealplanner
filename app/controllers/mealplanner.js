import { A } from '@ember/array';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  allMeals: readOnly('model'),

  chosenMealKeys: null,
  rejectedMealKeys: null,

  remainingSuggestions: computed('allMeals.[]', 'chosenMealKeys.[]', 'rejectedMealKeys.[]', function _remainingSuggestions() {
    const chosenMeals = this.get('chosenMealKeys') || [];
    const rejectedMeals = this.get('rejectedMealKeys') || [];
    const alreadySuggested = [...chosenMeals, ...rejectedMeals];
    return this.get('allMeals').filter((meal) => {
      return !alreadySuggested.includes(meal.key);
    });
  }),

  chosenMeals: computed('allMeals.[]', 'chosenMealKeys.[]', function _chosenMeals() {
    const chosenMeals = this.get('chosenMealKeys') || [];
    return this.get('allMeals').filter((meal) => {
      return chosenMeals.includes(meal.key);
    });
  }),

  rejectedMeals: computed('allMeals.[]', 'rejectedMealKeys.[]', function _rejectedMeals() {
    const rejectedMeals = this.get('rejectedMealKeys') || [];
    return this.get('allMeals').filter((meal) => {
      return rejectedMeals.includes(meal.key);
    });
  }),

  actions: {
    pick(meal) {
      const chosenMealKeys = this.get('chosenMealKeys') || [];
      this.set('chosenMealKeys', A([...chosenMealKeys, meal.key]));
    },

    reject(meal) {
      const rejectedMealKeys = this.get('rejectedMealKeys') || [];
      this.set('rejectedMealKeys', A([...rejectedMealKeys, meal.key]));
    },
  }
});
