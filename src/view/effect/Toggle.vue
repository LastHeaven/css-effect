<template>
<div class="body">
  <div class="form-check">
    <label class="form-switch-material">
      <input type="checkbox"/>
      <div class="line"></div>
      <div class="ball"></div>
    </label>
    <span>Wifi</span>
  </div>
  <div class="form-check">
    <label class="form-switch-material">
      <input type="checkbox" checked/>
      <div class="line"></div>
      <div class="ball"></div>
    </label>
    <span>Wifi</span>
  </div>

</div>
</template>

<script>
export default {
  name: 'Toggle'
}
</script>

<style scoped>
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .form-check {
    display: flex;
    align-items: center;
    margin: 12px 0;
  }

  .form-switch-material {
    --switch-color: white;
    --ball-color: var(--secondary-color);
    --ball-active-color: var(--primary-color);
    --line-color: var(--secondary-color);
    position: relative;
    width: 60px;
    height: 32px;
    margin-right: 10px;
    background: var(--switch-color);
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0, 9, 61, 0.3);
    cursor: pointer;
  }
  .form-switch-material input[type=checkbox] {
    opacity: 0;
    visibility: hidden;
    appearance: none;
  }
  .form-switch-material input[type=checkbox] ~ .line::before, .form-switch-material input[type=checkbox] ~ .line::after {
    position: absolute;
    content: "";
    top: 14px;
    width: 24px;
    height: 4px;
    background: var(--line-color);
    transition: 0.3s;
  }
  .form-switch-material input[type=checkbox] ~ .line::before {
    left: 4px;
    border-radius: 2px 0 0 2px;
    transform: scaleX(0);
    transform-origin: left;
  }
  .form-switch-material input[type=checkbox] ~ .line::after {
    left: 32px;
    border-radius: 0 2px 2px 0;
    transform-origin: right;
  }
  .form-switch-material input[type=checkbox] ~ .ball {
    position: absolute;
    content: "";
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    background: var(--switch-color);
    border-radius: 50%;
    box-shadow: inset 0 0 0 4px var(--ball-color);
    transition: 0.3s;
  }
  .form-switch-material input[type=checkbox]:checked ~ .line::before {
    transform: scaleX(1);
  }
  .form-switch-material input[type=checkbox]:checked ~ .line::after {
    transform: scaleX(0);
  }
  .form-switch-material input[type=checkbox]:checked ~ .ball {
    box-shadow: inset 0 0 0 12px var(--ball-active-color);
    transform: translateX(28px);
  }
</style>
