import Vue from 'vue'
import store from "store";
import { apiRequest, playRoomEmit} from "~/src/lib/api.js";

var storeObject = {
}

Vue.mixin({
  data() {
    return {
      store: storeObject
    };
  },
  methods: {
  },
  computed: {
  }
});