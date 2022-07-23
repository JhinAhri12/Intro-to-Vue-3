const product = 'Socks'

const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'amazing product',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com/',
      inventory: 8,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['S','M','L', 'XL'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(variantImage) {
      this.image = variantImage
    },
    removeToCart() {
      if(this.cart > 0){
      this.cart -= 1}
    }
  }


})
