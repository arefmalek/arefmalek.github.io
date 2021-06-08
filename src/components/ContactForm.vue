<template>
  <b-container>
    <h2>Contact Me</h2>
    <b-form
      action="https://formspree.io/f/FORM_ID"
      method="POST"
      class="mx-auto"
    >
      <b-form-group label="Your name:" label-for="name">
        <b-form-input name="name" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="Your email:" label-for="email">
        <b-form-input name="email" type="email" required></b-form-input>
      </b-form-group>
      <b-form-group label="Your message:" label-for="message">
        <b-form-textarea
          name="message"
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  text-align: left;
  min-width: 20em;
}
</style>
