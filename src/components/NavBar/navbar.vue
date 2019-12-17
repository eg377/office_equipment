<template>
  <nav id="topNav">
    <ul id="list">
      <li id="liLogo">
        <a>
          <img id="cogLogo" alt="Cognizant logo" src="../../../src/assets/CognizantLogo.png" />
        </a>
      </li>

   
      <li id="liReg">
        <a id="regA"> Log Out</a>
      </li>
         <li id="liReg">
        <a id="regA">To Office</a> 
      </li>
    </ul>
  </nav>
</template>

<style>
#topNav {
  background-color: white;
  overflow: hidden;
  /* position: relative; */
  /* padding: 10px; */
}

#regA:hover {
  background-color: blue;
  color: white;
  text-align: center;
}

#cogLogo {
    height: 25%;
    width: 25%
  /* float: left;
  margin: 10px;
  position: relative;
  left: 70px;
  padding: 10px; */
}

#list {
    list-style-type: none;
    /* margin: 0px;
    padding: 5px; */
}

#liLogo {
    display: inline-block;
    float: left;
}

#liReg {
    display: inline-block;
    float: right;
    padding: 15px
}

nav > ul > li > a {
    padding: 0.5em 1em;
    line-height: 2em;
}
</style>