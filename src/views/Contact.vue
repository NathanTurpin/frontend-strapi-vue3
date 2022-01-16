<template>
  <div class="contact">
    <div class="information-column">
      <h1>
        Une idée de <br />
        projet à réaliser ?<br /><span>Contactez-nous</span>
      </h1>

      <div class="personal-information">
        <div>
          <h2>Adresse</h2>
          <p>14 Place Clovis Tiers <br />59700, Marcq-en-Baroeul</p>
          <div>
            <a href="#" class="social-link">Instragram</a>
          </div>
        </div>
        <div>
          <h2>Appelez-nous</h2>
          <p><a href="#" class="phone-link">+33 20 51 80 36</a></p>
          <div>
            <a href="#" class="social-link">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
    <div class="form-column">
      <form>
        <label for="contact_name">Prénom et Nom</label>
        <input
          type="text"
          id="contact_name"
          placeholder="Votre prénom et nom"
        />

        <label for="contact_email">Email</label>
        <input type="text" id="contact_email" placeholder="Votre email" />

        <label for="contact_societe">Société</label>
        <input
          type="text"
          id="contact_societe"
          placeholder="Nom de la société"
        />

        <label for="contact_phone">Téléphone</label>
        <input type="text" id="contact_phone" placeholder="Votre téléphone" />

        <label for="contact_message">Message</label>
        <input
          type="text"
          id="contact_message"
          placeholder="Entrez votre description"
        />
      </form>
    </div>
  </div>
</template>

<style scoped lang="css">
.contact {
  margin: 0 auto;
  display: flex;
  gap: 200px;
  width: 100%;
}

form {
  font-family: Mulish, sans-serif;
  font-size: 18px;
  margin: 0 auto;
}

form input {
  border: none;
  font-family: Mulish, sans-serif;
  border-bottom: 1px solid #ddc3ac;
  color: #b47b4880;
  font-size: 18px;
  padding: 5px 0 5px 5px;
  background-color: #f5efe8;
}

form input::placeholder {
  color: #b47b4880;
}

input:hover,
input:checked {
  border: none;
}

label {
  display: block;
  text-transform: uppercase;
  margin-top: 15%;
  margin-bottom: 10%;
  font-weight: 400;
}

input + input {
  float: right;
}

.information-column h1 {
  font-family: Gallery, sans-serif;
  font-size: 120px;
}

span {
  color: #b47b4880;
}

.personal-information {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Mulish, sans-serif;
  font-size: 18px;
  color: #282423;
}

.personal-information h2 {
  text-transform: uppercase;
  font-weight: normal;
}

.personal-information .social-link, .personal-information .phone-link {
  text-transform: uppercase;
  text-decoration: none;
  font-family: Mulish, sans-serif;
  font-size: 18px;
  color: #282423;
}
</style>
