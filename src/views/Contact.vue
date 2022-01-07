<template>
  <div class="contact">
    <div class="information-column">
      <h1>Une idée de <br /> projet à réaliser ?<br /><span>Contactez-nous</span></h1>

      <div>
        <div>
          <h2>Adresse</h2>
          <p>14 Place Clovis Tiers</p>
          <p>59700, Marcq-en-Baroeul</p>
          <div>
            <a href="#">Instragram</a>
          </div>
        </div>
        <div>
          <h2>Appelez-nous</h2>
          <p><a href="#">+33 20 51 80 36</a></p>
          <div>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
    <div class="form-column">
      <form>
        <label for="contact_name">Prénom et Nom</label>
        <input type="text" id="contact_name"  placeholder="Votre prénom et nom"/>

        <label for="contact_email">Email</label>
        <input type="text" id="contact_email"  placeholder="Votre email"/>

        <label for="contact_societe">Société</label>
        <input type="text" id="contact_societe"  placeholder="Nom de la société"/>

        <label for="contact_phone">Téléphone</label>
        <input type="text" id="contact_phone"  placeholder="Votre téléphone"/>

        <label for="contact_message">Message</label>
        <input type="text" id="contact_message"  placeholder="Entrez votre description"/>
      </form>
    </div>
  </div>
</template>

<style scoped lang="css">
.contact {
  margin: 0 auto;
  display: flex;
  width: 100%;
}

form {
  font-family: Mulish, sans-serif;
  font-size: 18px;
  margin: 0 auto;
}

input {
  border: none;
  border-bottom: 1px solid #ddc3ac;
  color: rgba(180, 123, 72, 0.5);
  padding: 5px 0 5px 0;
}

input:hover, input:checked {
  border: none;
}

label {
  display: block;
  text-transform: uppercase;
  margin-top: 15%;
  margin-bottom: 5%;
}

input+input {
  float: right;
}
</style>
