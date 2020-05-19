<template>
  <!-- Features -->
  <section class="container mx-auto px-6 p-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
      Welcome
    </h2>

    <!-- Feature 1 -->
    <div class="flex items-start flex-wrap mb-20">
      <div class="w-full md:w-1/2 ">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Community Football</h4>
        <p class="text-gray-600 mb-8">
          Turramurra United Football Club is a community-focused football club around the suburb of Turramurra, on Sydney’s upper north shore. The home ground
          is the synthetic North Turramurra Recreation Area in North Turramurra. We also use Karuah Park in Turramurra, and Bannockburn Oval in Pymble, New
          South Wales.
        </p>

        <button
          class="bg-tufc_yellow text-tufc_blue font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-tufc_blue hover:text-tufc_yellow"
        >
          Read More OK
        </button>
      </div>
      <div class="w-full md:w-1/2 hidden md:block">
        <g-image src="~/assets/images/ball-and-hands.jpg" class="w-full px-10" alt="ball and ball-and-hands"></g-image>
      </div>
    </div>

    <!-- Feature 2 -->
    <div class="flex items-start flex-wrap mb-20 ">
      <div class="w-full md:w-1/2 hidden sm:block">
        <g-image src="~/assets/images/coaches-board.jpg" alt="ball and ball-and-hands" class="w-full px-10"></g-image>
      </div>
      <div class="w-full md:w-1/2 md:pl-10">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Coaches & Players</h4>
        <p class="text-gray-600 mb-8">
          Run entirely by parent volunteers, we welcome Minis and Juniors (U6 – U11), Youth (U12 – U18), Mens (All Age, Over 35’s, and Over 45’s) and Women’s
          (All Age, Over 30’s, and Over 35’s) teams.
        </p>
        <p class="text-gray-600 mb-8">
          Rules and regulations, professional training, forms, and more
        </p>
        <div class="container mx-auto block ">
          <button
            class="bg-tufc_yellow text-tufc_blue font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-tufc_blue hover:text-tufc_yellow "
          >
            Read More
          </button>
        </div>
      </div>
    </div>

    <!-- Feature 3 -->
    <div class="flex items-start flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">All Age Groups</h4>
        <p class="text-gray-600 mb-8">
          We aim to provide our players and their families with a positive team experience, growth in football skills and ultimately an increased enthusiasm for
          the great game. No matter what your child’s ability or experience, there is a position on the field for them.
        </p>
        <button
          class="bg-tufc_yellow text-tufc_blue font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-tufc_blue hover:text-tufc_yellow"
        >
          Read More
        </button>
      </div>
      <div class="w-full md:w-1/2 hidden md:block">
        <g-image src="~/assets/images/social-events-1.jpg" alt="social events" class="w-full px-10"></g-image>
      </div>
    </div>
  </section>
</template>
