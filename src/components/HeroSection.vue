<template>
  <header>
    <div class="Header">
      <div class="logo">
        <img src="/src/assets/EasyBooking_logo.svg" alt="EasyBooking Logo" />
      </div>
      <nav class="nav-links">
        <a href="#">Агентствам</a>
        <a href="#">Корпоративным клиентам</a>
        <a href="#">О нас</a>
      </nav>
    </div>
  </header>
</template>

  
<style lang="scss" scoped>
header {
  
  width: 90%;
  margin: 24px auto;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Header {
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-color: inherit;
}

.logo img {
  width: 100px;
  height: auto; 
}

.nav-links {
  display: flex;
  gap: 20px; 
}

.nav-links a {
  font-size: 16px;
  gap: 28px;
  text-decoration: none;
  color: #9399A8;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #007bff; 
}
</style>