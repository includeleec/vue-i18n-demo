<template>
<div id="nav">
  <router-link :to="$i18nRoute({ name: 'Home' })">
    {{ $t('menu.home') }}
  </router-link>

  <br>

  <router-link :to="$i18nRoute({ name: 'About' })">
    {{ $t('menu.about') }}
  </router-link>

<br>
    <router-link :to="$i18nRoute({ name: 'Detail' })">
    {{ $t('menu.detail') }}
  </router-link>
</div>
</template>
