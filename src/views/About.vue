<template>
  <div class="root">
    <div class="header">
      <p class="headerTextLeft">ARCHITECTE contractant général</p>
      <p class="headerTextRight">basé près de lille</p>
    </div>
    <div class="headline">
      <h1>
        Nous créons des espaces et des environnements dédiés à 
        <span class="importantColor">l’épanouissement </span>
         professionnels de nos clients
      </h1>
    </div>
    <div class="imgSection">
      <img 
        class="aboutImgSection"
        src="../../public/img/aboutImg1.png" 
        alt="marche pas"
      >   
    </div>
    <div class="titleSection">
      <h2 class="title">Title section</h2>
      <p class="titleSectionText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
           adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat.
        </p>
    </div>

    <div class="parent">
      <div class="grid1">
        <img 
          class="imgGrid1"
          src="../../public/img/aboutImg1.png" 
          alt="marche pas"
        > 
      </div>
      <div class="grid2">
        <h3>Description</h3>
        <h2>Title section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="grid3">
        <h3>Description</h3>
        <h2>Title section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="grid4">
        <img 
          class="imgGrid2"
          src="../../public/img/aboutImg1.png" 
          alt="marche pas"
        > 
      </div>
    </div>
    <div class="headlineSection">
      <div class="subtitle">
        <h3>notre vision</h3>
      </div>
      <div class="headlineSectionText">
        <h2>
          Lorem <span class="importantColor">ipsum dolor</span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           <span class="importantColor">incididunt</span> ut labore et dolore magna aliqua.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  template{
    margin: 0;
    padding: 0;
  }

  .header{
    position: absolute;
    width: 1920px;
    height: 1548px;
    left: 0px;
    top: 0px;

    background: #F5EFE8;
  }

  .headerTextLeft{
    position: absolute;
    width: 339px;
    height: 23px;
    left: 100px;
    top: 182px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;

    text-align: right;
    text-transform: uppercase;

    color: #282423;
  }

  .headerTextRight{
    position: absolute;
    width: 176px;
    height: 23px;
    left: 1644px;
    top: 182px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;

    text-align: right;
    text-transform: uppercase;

    color: #282423;
  }

  .headline h1{
    position: absolute;
    width: 1777px;
    height: 560px;
    left: 100px;
    top: 451px;

    font-family: Gallery Modern;
    font-style: normal;
    font-weight: normal;
    font-size: 120px;
    line-height: 140px;

    color: #282423;
  }

  .importantColor{
    color:#b47b48;
  }

  .aboutImgSection{
    position: absolute;
    width: 1720px;
    height: 770px;
    left: 100px;
    top: 1161px;

    background: linear-gradient(0deg, rgba(40, 36, 35, 0.2), rgba(40, 36, 35, 0.2)), url(../../public/img/aboutImg1.png);

    border: 2px solid #282423;
    border-radius: 0px;
  }

  .titleSection{

  }

  .title{
    position: absolute;
    width: 448px;
    height: 110px;
    left: 100px;
    top: 2231px;

    font-family: Gallery Modern;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 110px;

    text-align: right;

    color: #282423;
  }

  .titleSectionText{
    position: absolute;
    width: 806px;
    height: 140px;
    left: 964px;
    top: 2260px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    color: #282423;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .imgGrid1{
    position: absolute;
    width: 960px;
    height: 661px;
    left: 0px;
    top: 2700px;

    background: linear-gradient(0deg, rgba(40, 36, 35, 0.2), rgba(40, 36, 35, 0.2)), url(../../public/img/aboutImg1.png);

    border: 2px solid #282423;
    border-radius: 0px;
  }

  .grid2{
    position: absolute;
    width: 960px;
    height: 661px;
    left: 960px;
    top: 2700px; 
    background: #F5EFE8;
   
  }

  .grid2 h3{
    display: flex;
    justify-content: center;
    margin-top: 176px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;

    text-align: right;
    text-transform: uppercase;

    color: #282423;
  }

  .grid2 h2{
    display: flex;
    justify-content: center;
    margin-top: 32px;

    font-family: Gallery Modern;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 110px;

    text-align: right;

    color: #282423;
  }

  .grid2 p{
    display: flex;
    justify-content: center;
    margin: 32px 167px 0 166px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    text-align: center;

    color: #282423;
  }

  .grid3{
    position: absolute;
    width: 960px;
    height: 661px;
    left: 0px;
    top: 3361px;

    background: #F5EFE8;  
  }

  .grid3 h3{
    display: flex;
    justify-content: center;
    margin-top: 176px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;

    text-align: right;
    text-transform: uppercase;

    color: #282423;
  }

  .grid3 h2{
    display: flex;
    justify-content: center;
    margin-top: 32px;

    font-family: Gallery Modern;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 110px;

    text-align: right;

    color: #282423;
  }

  .grid3 p{
    display: flex;
    justify-content: center;
    margin: 32px 167px 0 166px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    text-align: center;

    color: #282423;
  }

  .imgGrid2{
    position: absolute;
    width: 960px;
    height: 661px;
    left: 960px;
    top: 3361px;

    background: linear-gradient(0deg, rgba(40, 36, 35, 0.2), rgba(40, 36, 35, 0.2)), url(../../public/img/aboutImg1.png);

    border: 2px solid #282423;
    border-radius: 0px;
  }

  .headlineSection{}

  .headlineSection .subtitle h3{
    position: absolute;
    width: 186px;
    height: 16px;
    left: 866px;
    top: 4172px;

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;

    color: #282423;
  }

  .headlineSection .headlineSectionText h2{
    position: absolute;
    width: 1435px;
    height: 476px;
    left: 242px;
    top: 4240px;

    font-family: Gallery Modern;
    font-style: normal;
    font-weight: normal;
    font-size: 90px;
    line-height: 110px;

    text-align: center;

    color: #282423;
  }

</style>

