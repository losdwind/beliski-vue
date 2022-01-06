<template>
  <div>
    <nav>
      <h1>Beliski</h1>

      <!-- logged in users -->
      <div v-if="user">
        <router-link to="/">Home</router-link>
        <button @click="handleClickLogout">Logout</button>
      </div>

      <!-- logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>

      <!-- show user info -->
      <p v-if="user">logged in as {{ user.displayName }}</p>
      <img src="user.profileImageUrl" alt="profile image" />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getUserState from "../composables/getUserState";

export default defineComponent({
  setup() {
      
  },
});
</script>
