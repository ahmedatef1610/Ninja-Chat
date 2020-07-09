<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <div class="input-field">
        <label for="new-message">New Message ( Enter to add 👈☝👏 )</label>
        <input id="new-message" type="text" v-model="newMessage" />
      </div>
      <p class="feedback red-text" v-if="feedback">{{feedback}}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  props: ["name"],
  data() {
    return {
      newMessage: "",
      feedback: null
    };
  },
  methods: {
    addMessage() {
      let formatNewMessage = this.newMessage.trim();

      if (formatNewMessage) {
          
        this.feedback = null;

        db.collection("messages")
          .add({
            name: this.name,
            content: formatNewMessage,
            timestamp: Date.now()
          })
          .then(() => {
            console.log("done");
            this.newMessage = "";
          })
          .catch(err => {
            console.log(err);
          });

      } else {
        this.feedback = "You must enter a message to send one";
      }
    }
  }
};
</script>

<style lang="scss">
</style>