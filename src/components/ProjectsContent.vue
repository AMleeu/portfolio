<template>
  <div class="content-row" id="projects">
    <div class="container">
      <div class="row mt-5 pt-5 pb-5">
        <div class="col-sm-12">
          <h5 class="main-heading fw-bold text-end">PROJECTS</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 pb-4">
          <div class="card project-card">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">description</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://amleeu.github.io/buymore-cart/"
                    target="_blank"
                    >demo</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://github.com/AMleeu/buymore-cart"
                    target="_blank"
                    tabindex="-1"
                    aria-disabled="true"
                    >repo</a
                  >
                </li>
              </ul>
            </div>
            <img :src="project1ImgUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title mb-4">Buymore Cart</h5>
              <p class="card-text">
                shopping cart with state management and routing
              </p>
            </div>
          </div>
        </div>
        <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 pb-4">
          <div class="card project-card">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">description</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://amleeu.github.io/big-screen-quiz/"
                    target="_blank"
                    >demo</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://github.com/AMleeu/big-screen-quiz"
                    target="_blank"
                    tabindex="-1"
                    aria-disabled="true"
                    >repo</a
                  >
                </li>
              </ul>
            </div>
            <img :src="project2ImgUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title mb-4">Big Screen Quiz</h5>
              <p class="card-text">movie quiz that consumes API data</p>
            </div>
          </div>
        </div>
        <div class="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-4 pb-4">
          <div class="card project-card">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">description</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://amleeu.github.io/portfolio/"
                    target="_blank"
                    >demo</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://github.com/AMleeu/portfolio"
                    target="_blank"
                    tabindex="-1"
                    aria-disabled="true"
                    >repo</a
                  >
                </li>
              </ul>
            </div>
            <img :src="project3ImgUrl" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title mb-4">Portfolio</h5>
              <p class="card-text">
                animated portfolio website with a plot twist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import project1ImgUrl from "../assets/img/portfolio/project1.png";
import project2ImgUrl from "../assets/img/portfolio/project2.png";
import project3ImgUrl from "../assets/img/portfolio/project3.png";

export default {
  data() {
    return {
      project1ImgUrl,
      project2ImgUrl,
      project3ImgUrl,
    };
  },
};
</script>

<style>
.project-card {
  background: var(--bg-black-900) !important;
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  transition: all 0.2s ease-out;
}
.project-card:hover {
  background: var(--bg-black-900);
  box-shadow: 3px 3px 0 0 var(--bg-black-50);
}
.project-card .card-img-top {
  filter: grayscale();
}
.project-card .card-title {
  color: var(--text-black-700) !important;
  font-weight: 600;
}
.nav-tabs .nav-link.active {
  background-color: var(--bg-black-100) !important;
  color: var(--text-black-700) !important;
}
.nav-tabs .nav-link.active:hover {
  cursor: default !important;
}
.nav-link {
  color: var(--text-black-700) !important;
  font-weight: 600;
}
.nav-link:hover {
  color: var(--bg-black-50) !important;
}
.project-card .card-title {
  position: relative;
}
.project-card .card-title::after {
  content: "";
  width: 5%;
  height: 5px;
  border-top: 5px solid var(--primary);
  left: 0px;
  position: absolute;
  margin-top: 30px;
  margin-bottom: 15px;
}
</style>
