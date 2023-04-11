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

  <div class="container my-5" id="about-me">
    <div class="row justify-content-center d-flex">
      <div class="col-md-4 align-items-center">
        <div class="link-box mb-3">
          <a href="https://github.com/farukbeygo" class="btn btn-primary"><i class="fa fa-github"></i> GitHub</a>
          <br>
          <a href="https://stackoverflow.com/users/20442734/faruk" class="btn btn-primary"><i class="fa fa-stack-overflow"></i> Stack Overflow</a>
          <br>
          <a href="https://www.linkedin.com/in/%C3%B6mer-faruk-beygo-467a251b0/" class="btn btn-primary"><i class="fa fa-linkedin"></i> LinkedIn</a>
          <br>
        </div>
      </div>
      <div class="col-md-8">
        <div class="about-me">
          <h2>Hi, I am Faruk Beygo</h2>
          <p>As a Mathematics major student at Bilkent University, I possess a strong foundation in analytical problem-solving and critical thinking. In addition, I have extensive experience in coding with proficiency in C++, Python, and Java. My interest in deep learning AI and data science has led me to pursue various projects and courses in these areas, further enriching my skills and knowledge.</p>
          <br>
          <p>I am a proactive and dedicated individual, as evidenced by my role as one of the founders of the Bilkent Mathematical Society (BMS), where I currently serve as the organization manager. Through my leadership, I have helped foster a community of mathematics enthusiasts, organizing various events and activities aimed at promoting mathematics education and research. As part of this effort, I am currently developing a website for the Mathematical Society, using my experience gained from a previous internship in website development.</p>
          <br>
          <p>Overall, my passion for mathematics, coding, and data science, coupled with my leadership and organizational skills, make me an ideal candidate for any position in the field.</p>
          <br>
        </div>
        <div class="section-header">Experience</div>
        <div class="section-content">
          <ul>
            <li>Backend Intern - Nart Informatics (Dec 2022-Jan 2023)</li>
            <li>Organization Manager - Bilkent Mathematical Society (Aug 2022-present)</li>
          </ul>
        </div>
        <div class="section-header">Education</div>
        <div class="section-content">
          <ul>
            <li>Bachelor of Science - BS, Bilkent University (2021-present)</li>
            <li>English Language Preparatory Program, Bilkent University (2020-2021)</li>
            <li>High School Diploma, Kırıkkale Atatürk Anadolu Lisesi (2016-2020)</li>
          </ul>
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

#about-me {
  margin-bottom: 2rem;
  margin-top: 100px; /* adjust this value as needed */
}

.section-header {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #ccc;
  padding-bottom: 0.5rem;
}

.section-content {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.75rem;
}

ul li:before {
  content: "\2022";
  position: absolute;
  left: 0;
  color: #007bff;
}

</style>


