import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  allMeals: readOnly('model'),

  chosenMealKeys: computed(() => [1]),
  rejectedMealKeys: computed(() => [9]),

  remainingSuggestions: computed('allMeals', 'chosenMealKeys', 'rejectedMealKeys', function _remaining() {
    const alreadySuggested = [...this.get('chosenMealKeys'), ...this.get('rejectedMealKeys')];
    return this.get('allMeals').filter((meal) => {
      return !alreadySuggested.includes(meal.key);
    });
  }),

  chosenMeals: computed('allMeals', 'chosenMealKeys', function _remaining() {
    const chosenMeals = this.get('chosenMealKeys');
    return this.get('allMeals').filter((meal) => {
      return chosenMeals.includes(meal.key);
    });
  }),

  rejectedMeals: computed('allMeals', 'rejectedMealKeys', function _remaining() {
    const rejectedMeals = this.get('rejectedMealKeys');
    return this.get('allMeals').filter((meal) => {
      return rejectedMeals.includes(meal.key);
    });
  }),
});
