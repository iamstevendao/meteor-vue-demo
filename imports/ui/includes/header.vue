<template lang="pug">
b-navbar(toggleable="md" type="dark" variant="primary")
  b-navbar-toggle(target="nav_collapse")
  b-navbar-brand(href="/") Todos
  b-collapse#nav_collapse(is-nav)
    b-navbar-nav
      b-nav-item(href="https://github.com/iamstevendao/meteor-vue-demo") github
</template>

<script>
export default {
  name: 'sheader',
}
</script>

