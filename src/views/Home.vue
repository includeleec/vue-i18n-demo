<template>
<div class="home">
  <p>{{ $t('main.welcome', {company: 'Lokalise'}) }}</p>
  <p>{{ $tc('main.new_message', 10) }}</p>
  <p>{{ $moment(1594624725000).fromNow() }}</p>
</div>
</template>

