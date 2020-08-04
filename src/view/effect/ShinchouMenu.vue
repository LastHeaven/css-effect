<template>
  <div class="body">
    <ul class="shinchou-menu">
      <li><shinchou-menu-text text="ニュース" type="transition" class="highlight"/></li>
      <li><shinchou-menu-text text="ストーリー" type="transition" class="highlight"/></li>
      <li><shinchou-menu-text text="スターフ＆キャスト" type="transition" class="highlight"/></li>
      <li><shinchou-menu-text text="キャラクター" type="transition" class="highlight"/></li>
      <li><shinchou-menu-text text="放送·配信情報" type="transition" class="highlight"/></li>
    </ul>
  </div>
</template>

<script>
import ShinchouMenuText from '@/view/effect/comps/ShinchouMenuText'
export default {
  name: 'ShinchouMenu',
  components: { ShinchouMenuText }
}
</script>

<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #fafafa;
  }

  .shinchou-menu {
    --highlight-text-color: #00ACF0;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    position: relative;
    z-index: 0;
  }
  .shinchou-menu li {
    margin: 6px;
  }
  .shinchou-menu li >>> a {
    position: relative;
    display: inline-flex;
    padding: 6px 2px 6px 2px;
    color: black;
    font-size: 1.6em;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    overflow: hidden;
  }
  .shinchou-menu li >>> a::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background: black;
  }
  .shinchou-menu li >>> a:hover span {
    color: white !important;
    text-shadow: 0 0 10px var(--highlight-text-color);
  }
  .shinchou-menu li >>> a span {
    position: relative;
    margin: 0 5px 0 4px;
    transition: 0.3s;
  }
  .shinchou-menu li >>> a span.highlight::before {
    position: absolute;
    content: "";
    top: -3px;
    left: -3px;
    bottom: -3px;
    right: -3px;
    z-index: -1;
    background: var(--highlight-text-color);
  }
  .shinchou-menu li >>> a span:not(.highlight) {
    color: var(--highlight-text-color);
  }
</style>
