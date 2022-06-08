<template>
  <div class="card w-96 bg-white shadow-lg">
    <div class="card-body">
      <div>
        <h2 class="card-title">{{ question.subject }}</h2>
      </div>
      <div>
        <p class="py-2">{{ shortenedTitle(question.title) }}</p>
      </div>
      <div class="card-actions justify-end">
        <router-link :to="`/question/${question.id}`">
          <button class="btn btn-primary">Answer</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  props: {
    question: [Object, Array]
  },
  methods: {
    shortenedTitle (title) {
      return title.length > 84 ? title.substring(0, 84) + '...' : title
    }
  }
}
</script>

<style scoped>

</style>
