app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img :src="image" :class="{ 'out-of-stock-img': !inStock }" :alt="socks">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="onSale"><em> {{saleMessage}}</em></sapn></p>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p> {{ description }}</p>
    
        <h2> Shipping : {{shipping}} </h2>

        Composition :
        <product-details :details="details"></product-details>

        Sizes :
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>

        <div
        v-for="(variant, index) in variants"
        :key="variant.id"
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{ backgroundColor: variant.color }">
      </div>
        <button class="button" :class="{ disabledButton: !inStock }"  :disabled="!inStock"  @click="addToCart">Add to Cart</button>
        <button class="button" :class="{ disabledButton: !inStock }"  :disabled="!inStock" @click="removeToCart">Remove Item</button><br>
        <a :href="url">Exercice by Vue Mastery</a>

      </div>
    </div>
  </div>`,
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand : 'Vue Mastery',
      description: 'amazing product',
      url: 'https://www.vuemastery.com/',
      // inventory: 50,
      selectedVariant: 0,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      sizes: ['S','M','L', 'XL'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50  },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    removeToCart() {
      if(this.cart > 0){
      this.cart -= 1}
    }
  },
  computed: {
    title(){
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
  },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    saleMessage() {
      if (this.onSale) {
          return this.brand + ' ' + this.product + ' is on sale.'
      }
      return ''
    },
    shipping(){
        if (this.premium) {
            return 'Free'
        }
        return 2.99
    }
  }
})