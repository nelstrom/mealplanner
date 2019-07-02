import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Controller.extend({
  allMeals: readOnly('model'),
  chosenMeals: computed(() => [1]),
  rejectedMeals: computed(() => [9]),
  remainingSuggestions: computed('allMeals', 'chosenMeals', 'rejectedMeals', function _remaining() {
    const alreadySuggested = [...this.get('chosenMeals'), ...this.get('rejectedMeals')];
    return this.get('allMeals').filter((meal) => {
      return !alreadySuggested.includes(meal.key);
    });
  }),
});
