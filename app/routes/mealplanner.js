import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { key: 1, name: 'Mac Cheese' },
      { key: 2, name: 'Roast chicken' },
      { key: 3, name: 'Fajita' },
      { key: 4, name: 'Spicy Thai Peanut Sauce over Roasted Sweet Potatoes' },
      { key: 5, name: 'Pizza' },
      { key: 6, name: 'Prawn Masala' },
      { key: 7, name: 'Beans and rice' },
      { key: 8, name: 'Sugar Snap Pea and Carrot Soba Noodles' },
      { key: 9, name: 'Eggs on Toast' },
    ]
  }
});
