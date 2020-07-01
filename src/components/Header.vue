<template>
<div class="header bg-white shadow-sm">
  <nav class="navbar navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand" href="#">
            <img src="../assets/images/Logo.png">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto w-100 justify-content-lg-end">
                <li class="nav-item active">
                    <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">WHAT WE DO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">OUR STUFF</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTACT US</a>
                </li>
            </ul>
        </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
