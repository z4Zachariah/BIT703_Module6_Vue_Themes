<template>
  <div class="row" v-if="othersImages">
    <div id="others-images" class="card-columns">
      <div
        class="card other"
        v-bind:key="image.id"
        v-for="image in othersImages"
      >
        <picture v-bind:id="'image'+image.id">
          <img
            v-bind:src="image.path"
            v-bind:alt="image.description"
          />
        </picture>
        <h5>{{ image.name }}</h5>
        <p>{{ image.description }}</p>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OthersImages',
  created () {
    this.fetchImages()
  },
  data () {
    return {
      apiRequest: new this.$request(),
      othersImages: [],
      errors: ''
    }
  },
  methods: {
    fetchImages () {
      const endpoint = 'images'
      this.apiRequest.get(endpoint).then((response) => {
        this.othersImages = response
        this.errors = ''
      }).catch((errors) => {
        this.errors = errors
      })
    }
  }
}
</script>
