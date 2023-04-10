<template>
  <nav class="white-nav">
    <div class="nav-logo">Faruk Beygo</div>
    <div class="nav-links">
      <router-link to="/about">About</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>

  <div class="container my-5">
    <div class="row justify-content-center d-flex">
      <div class="col-md-4 align-items-center">
        <div class="link-box mb-3">
          <a href="#" class="btn btn-primary"><i class="fa fa-github"></i> GitHub</a>
          <a href="#" class="btn btn-primary"><i class="fa fa-stack-overflow"></i> Stack Overflow</a>
          <a href="#" class="btn btn-primary"><i class="fa fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>
      <div class="col-md-8">
        <div class="about-me">
          <h2>Hi, I am Faruk Beygo</h2>
          <p>As a Mathematics major student at Bilkent University, I possess a strong foundation in analytical problem-solving and critical thinking. In addition, I have extensive experience in coding with proficiency in C++, Python, and Java. My interest in deep learning AI and data science has led me to pursue various projects and courses in these areas, further enriching my skills and knowledge.</p>

          <p>I am a proactive and dedicated individual, as evidenced by my role as one of the founders of the Bilkent Mathematical Society (BMS), where I currently serve as the organization manager. Through my leadership, I have helped foster a community of mathematics enthusiasts, organizing various events and activities aimed at promoting mathematics education and research. As part of this effort, I am currently developing a website for the Mathematical Society, using my experience gained from a previous internship in website development.</p>

          <p>Overall, my passion for mathematics, coding, and data science, coupled with my leadership and organizational skills, make me an ideal candidate for any position in the field.</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Navbar",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.white-nav {
  background-color: lightslategray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: lightgreen;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}
</style>


