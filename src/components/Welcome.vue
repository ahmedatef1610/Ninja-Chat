<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <div class="input-field">
            <label for="name">Enter Your Name:</label>
            <input id="name" type="text" v-model="name" />
          </div>
          <p class="feedback red-text" v-if="feedback">{{feedback}}</p>
          <button class="btn teal" type="submit">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      feedback: null
    };
  },
  methods: {
    enterChat() {
      let formatName = this.name.trim();
      if (formatName) {
        this.feedback = null;
        this.$router.push({ name: "Chat", params: { name: formatName } });
      } else {
        this.feedback = "You must enter a name to join";
      }
    }
  }
};
</script>

<style lang='scss'>
.welcome .card {
  max-width: 500px;
  margin: 100px auto;

  h2 {
    font-size: 3em;
  }
  .btn {
    margin: 30px auto;
  }
}
</style>