<template>
  <div id="default">
    <div id="header">
      <h1>Covid Advisor</h1>
      <a href="/symptoms">Check your symptoms here</a>
      <router-link to="/stats" exact>Statistics</router-link>
      <router-link to="/login" exact>Login/Register</router-link>
    </div>
    <div id="photobar">
      <div class="titletext">Welcome, {{username}}.</div>
    </div>
    <div style="width:100%;height:500px"></div>
    <div id="copyright">&#169; BT3103 Octopus 2020</div>
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
      username: "User"
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color:inherit;
}

h1 {
  font-size:25px;
}

#default {
  overflow:auto;
}

.titletext {
  font-size:70px;
  float:right;
  margin: 100px 20% 50px 50px;
  width:400px;
  text-align:right;
}

#default {
  background:white;
}

#header {
  width:calc(100%-40px);
  height:100px;
  color:black;
  background: #20344a;
  text-transform:uppercase;
  font-size:15px;
  overflow: auto;
  position: sticky;
}

#header h1 {
  display:inline-block;
  margin:0;
  font-weight: bold;
  line-height:100px;
  padding: 0 20px;
  color:white;
}

#header a {
  float:right;
  display:inline-block;
  padding:0 40px;
  font-weight: bold;
  line-height: 100px;
  transition:0.5s;
  color:white
}

#header a:hover {
  background: #4e5e70;
  transition:0.5s;
}
/**https://onlinenutrition.cns.utexas.edu/wp-content/uploads/2018/11/GettyImages-823767128_high-1.jpg*/
#photobar {
  background: url(https://images.unsplash.com/photo-1544991875-5dc1b05f607d) bottom;
  background-size: 100%;
  width:100%;
  height: 400px;
}

#copyright {
  width:calc(100% - 100px);
  height:50px;
  padding:50px;
  background:#20344a;
  color:white;
  font-weight:lighter;
  font-size:11px;
  line-height:50px;
}
</style>