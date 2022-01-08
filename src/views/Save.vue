<style scoped>
  template{
    margin: 0;
    padding: 0;
  }

  .root{
    /* margin: 0 100px 43px; */
  }

  .rootYellow{
    background-color: #F5EFE8;
  }

  .topSection{
   
  }
  .header{
    display: flex;
    justify-content: space-between;
  }

  .titleSection{
    display: flex;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1{

  }

  .div2{
    background-color: #F5EFE8;
  }

  .div3{
    background-color: #F5EFE8;
  }

  .div4{

  }

</style>


<template>
  <div class="root">
    <div class="rootYellow">    
      <div class="topSection">
        <div class="header">
          <p>ARCHITECTE contractant général</p>
          <p>basé près de lille</p>
        </div>
        <div class="aboutMain">
          Nous créons des espaces et des environnements dédiés à l’épanouissement professionnels de nos clients
        </div>
      </div>
    </div>

    <div class="imgSection">
      <img 
        class="aboutImgSection"
        src="../../public/img/aboutImg1.png" 
        alt="marche pas"
      >   
    </div>

    <div class="titleSection">
      <h1 class="title1Section">
        Title section
      </h1>
      <p class="textSection">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
    </div>

    <div class="parent">
      <div class="div1">
        <img 
          class="imgGridSection"
          src="../../public/img/aboutImg1.png" 
          alt="marche pas"
        > 
      </div>

      <div class="div2">
          <p class="description">
            DESCRIPTION
          </p>
          <p class="title">
            Title Section
          </p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>

      <div class="div3">
          <p class="description">
            DESCRIPTION
          </p>
          <p class="title">
            Title Section
          </p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>

      <div class="div4">
        <img 
          class="imgGridSection"
          src="../../public/img/aboutImg1.png" 
          alt="marche pas"
        > 
      </div>
    </div>

    <div class="visionSection">
      <p class="description">
        NOTRE VISION
      </p>
      <div class="visionMain">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

