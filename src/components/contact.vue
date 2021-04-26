<template>
  <div>
    <main>
      <div class="container ">
        <h1 class="contact-me">Contact Me</h1>
        <div class="contact-info__list address">
          <b-icon-house-door-fill></b-icon-house-door-fill>
          <p>Bergkantsvägen 29</p>
          Email
          <a href="mailto:mohammadali.mirzaee99@gmail.com"
            >mohammadali.mirzaee99@gmail.com</a
          >
        </div>

        <div class="contact-info__list phone">
          Phone
          <a href="tel:+46761893038">0761893038</a>
        </div>
        <div class="container">
          <form action="#" class="form-contact" method="post" tabindex="1">
            <input
              type="text"
              class="form-contact-input"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              class="form-contact-input"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              class="form-contact-input"
              name="tel"
              placeholder="PhoneNumber"
            />
            <textarea
              class="form-contact-textarea"
              name="conteudo"
              placeholder="What's your message?"
              required
            ></textarea>
            <button type="submit" class="form-contact-button">Send</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: auto;
  margin: 0 auto;
  padding: 20px;
  color: #bbb;
}

.form-contact {
  width: 100%;
  font-family: "Arial", Times, serif;
}

.form-contact-input {
  width: 100%;
  color: #fff9f9;
  font-size: 18px;
  background: transparent;
  border: none;
  height: 40px;
  margin-bottom: 20px;
  text-indent: 20px;
  border-color: Transparent;
  border-bottom: 1px solid;
}

.form-contact-textarea {
  width: 100%;
  color: #fffefe;
  font-size: 18px;
  background-color: transparent;
  height: 200px;
  margin-bottom: 20px;
  text-indent: 20px;
  padding-top: 16px;
  padding-left: 0;
  padding-right: 0;
  font-family: "Arial", Times, serif;
  border-color: Transparent;
}

.form-contact-button {
  width: 100%;
  font-size: 18px;
  border-radius: 4px;
  color: rgb(255, 254, 254);
  height: 40px;
  opacity: 0.8;
  margin-bottom: 20px;
  cursor: pointer;
  display: block;
  background: linear-gradient(90deg, rgb(97, 149, 253), rgb(206, 83, 255));
  border: none;
  transition: 1s;
}

.form-contact-button:hover {
  opacity: 1;
}
.contact-me {
  color: rgb(247, 251, 255);
  font-family: "Oswald", sans-serif;
}
@media screen and (max-width: 700px) {
  .container {
    flex-direction: column;
    width: 50vh;
  }
}
.container a {
  text-decoration: none;
  padding: 5px;
}
</style>
