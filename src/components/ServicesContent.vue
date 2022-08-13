<template>
  <div class="content-row" id="services">
    <div class="container">
      <div class="row mt-5 pt-5 pb-5">
        <div class="col-sm-12">
          <h5 class="main-heading fw-bold text-end">SERVICES</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4 pb-4">
          <div class="card project-card text-center">
            <div class="card-header">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">about</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="mailto:albert.m.leeu@gmail.com "
                      >hire me</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                i convert static web pages and designs into scallable web
                applications
              </p>
            </div>
            <div class="card-footer text-muted text-center">
              <font-awesome-icon icon="fa-solid fa-recycle" />
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 pb-4">
          <div class="card project-card text-center">
            <div class="card-header">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">about</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="mailto:albert.m.leeu@gmail.com "
                      >hire me</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                i develop intuitive User Interfaces that consume and present API
                data in custom ways
              </p>
            </div>
            <div class="card-footer text-muted text-center">
              <font-awesome-icon icon="fa-solid fa-network-wired" />
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 pb-4">
          <div class="card project-card text-center">
            <div class="card-header">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">about</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="mailto:albert.m.leeu@gmail.com "
                      >hire me</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                i refactor legacy jQuery code to modern JavaScript code that uses
                best practices
              </p>
            </div>
            <div class="card-footer text-muted text-center">
              <font-awesome-icon icon="fa-solid fa-code-compare" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*
  import required font-awesome modules & components
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCodeCompare,
  faNetworkWired,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faRecycle, faNetworkWired, faCodeCompare);
export default {};
</script>

<style>
#services h5 {
  line-height: 25px;
}
.project-card .card-body {
  background-color: var(--bg-black-100) !important;
}
.project-card .card-footer {
  background-color: var(--bg-black-100) !important;
}
.nav-tabs .nav-link.active {
  background-color: #fff !important;
  color: var(--text-black-700) !important;
}
</style>
