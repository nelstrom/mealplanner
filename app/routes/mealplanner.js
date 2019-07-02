import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { name: 'Mac Cheese' },
      { name: 'Roast chicken' },
      { name: 'Fajita' },
      { name: 'Spicy Thai Peanut Sauce over Roasted Sweet Potatoes' },
      { name: 'Pizza' },
      { name: 'Prawn Masala' },
      { name: 'Beans and rice' },
      { name: 'Sugar Snap Pea and Carrot Soba Noodles' },
      { name: 'Eggs on Toast' },
    ]
  }
});
