<template>
  <!-- Common sponsor header -->
  <div class="flex flex-col md:flex-row justify-between w-full items-center p-2 tufc_gradient mt-16">
    <g-image src="~/assets/images/tufc_logo.png" class="w-1/6" alt="Turramurra United Football Club logo" height="200" width="200" fit="contain"></g-image>
    <h1 class="uppercase text-4xl text-white font-bold text-center w-4/6">Turramurra United<br />Football Club</h1>
    <g-image
      src="~/assets/images/sponsors/chadwick-real-estate-logo.png"
      alt=""
      fit="contain"
      width="200"
      class="md:mr-10 w-1/6 bg-white p-2 rounded"
    ></g-image>
  </div>
</template>

<style>
.tufc_gradient-5 {
  background: linear-gradient(130deg, #398235 30%, #ffd900 40%, #ffd900 48%, #213166 50%, #213166 58%, #aa4243 60%, #aa4243 68%, #ffffff 75%, #ffffff 100%);
}
.tufc_gradient {
  background: linear-gradient(160deg, #ffd900 0%, #ffd900 20%, #213166 25%, #213166 75%, #aa4243 80%, #aa4243 100%);
  overflow: hidden;
  position: relative;
}

.tufc_gradient::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(255, 255, 255, 0.25) 15%,
    rgba(0, 0, 0, 0.25) 30%,
    rgba(255, 255, 255, 0.25) 45%,
    rgba(0, 0, 0, 0.25) 60%,
    rgba(255, 255, 255, 0.25) 80%,
    rgba(0, 0, 0, 0.25) 90%
  );
}
</style>
