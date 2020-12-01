<template>
  <article>
    <form class="sign-up">
      <h2>Create login</h2>
      <div>User your informations for registration</div>
      <input
        type="text"
        v-model.trim="first_name"
        placeholder="First Name"
        required
      />
      <input type="text" v-model="last_name" placeholder="Last Name" required />
      <input
        type="tel"
        v-model="phone_number"
        placeholder="phone number"
        required
      />
      <input type="email" v-model="email" placeholder="Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button @click="submit">
        Sign up
      </button>
    </form>
  </article>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationServices'
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      const response = await AuthenticationService.signUp({
        first_name: this.first_name,
        last_name: this.last_name,
        phone_number: this.phone_number,
        email: this.email,
        password: this.password
      })
      console.log(response.data)
      // alert("Data Submit");
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 0;
  font-size: 35px;
}
button {
  margin-top: 5%;
  border-radius: 20px;
  border: 1px solid olive;
  background-color: olive;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.1s ease-in;
}
button:active {
  transform: scale(0.9);
}
button:focus {
  outline: none;
}
form {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: 265px;
  height: 380px;
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 15px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
input {
  background-color: #eee;
  border: none;
  padding: 8px 15px;
  margin: 6px 0;
  width: calc(100% - 30px);
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;
}
input:focus {
  outline: none;
  background-color: #fff;
}
div {
  font-size: 1rem;
}
</style>
