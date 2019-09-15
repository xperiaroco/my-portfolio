<template>
  <div class="wrapper">
    <button v-if="!user && !loading && !error" @click="fetch">Fetch user</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="user">
      Welcome {{ user.username }}
    </div>
  </div>
</template>

<script>
  import { FETCH_USER, GET_USER, GET_USER_ERROR, GET_USER_LOADING } from '@/store/auth/actions';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Home',

    computed: {
      ...mapGetters({
        loading: GET_USER_LOADING,
        error: GET_USER_ERROR,
        user: GET_USER
      })
    },

    methods: {
      ...mapActions({
        fetchUser: FETCH_USER
      }),
      fetch() {
        this.fetchUser({ username: 'qwe', password: 'qwe' })
      }
    },

    mounted() {
    }
  }
</script>

<style scoped>
  .wrapper {
    font-size: 26px;
    color: #2c3e50;
  }
</style>