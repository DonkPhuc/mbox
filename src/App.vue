<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,Footer
  }
}
</script>
