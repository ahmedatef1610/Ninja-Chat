<template>
  <div class="chat container">
    <h2 class="center-align teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll="{smooth: true}">
          <li v-for="(message) in messages" :key="message.id">
            <span class="teal-text">
              {{message.name}}
              <span class="lime-text text-darken-2">(☞ﾟヮﾟ)☞</span>
            </span>
            <span
              class="grey-text text-darken-4 content"
              style="margin-left:10px"
            >{{message.content}}</span>
            <span class="teal-text text-lighten-3 time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";

export default {
  props: ["name"],
  data() {
    return {
      messages: []
    };
  },
  methods: {},
  components: {
    NewMessage
  },
  created() {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot(snapshot => {
        //console.log(snapshot.docChanges());
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            this.messages.push({
              id: change.doc.id,
              name: change.doc.data().name,
              content: change.doc.data().content,
              timestamp: moment(change.doc.data().timestamp).format(
                "MMMM Do dddd YYYY, h:mm:ss a"
              )
            });
          }
        });
      });
  }
};
</script>

<style lang="scss">
.chat {
  h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  span {
    font-size: 1.4em;
  }
  .time {
    display: block;
    font-size: 1em;
  }
  .content {
    word-break: break-all;
  }
  .messages {

    max-height: 300px;
    
    overflow: auto;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: #ddd;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #999;
    }
  }
}
</style> 