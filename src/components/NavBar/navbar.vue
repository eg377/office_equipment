<template>
  <mdb-navbar expand="large" dark id="nBar">
    <a href="/main" class="navbar-brand">Cognizant</a>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="/officeList" active id="drop">To Office</mdb-nav-item>
        <mdb-nav-item href="/login" id="drop">Logout</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<style>
#nBar {
  background-color: #002d93;
  /* display: inline-block; */
}

#drop {
  text-align: right;
}
</style>

<script>
import {
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbContainer,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
} from "mdbvue";
export default {
  name: "HelloWorld",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbContainer,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  }
};
</script>