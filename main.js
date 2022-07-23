const product = 'Socks'

const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'amazing product',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com/',
      inventory: 8,
      onSale: true
    }
  }

})
