<template>
  <div class="body">
    <div class="gauges">
      <a
          class="gauge gauge-primary"
          href="#"
          style="--gauge-value:900;--gauge-max-value:1000;"
      ></a>
      <a
          class="gauge gauge-secondary"
          href="#"
          style="--gauge-value:800;--gauge-max-value:1000;"
      ></a>
      <a
          class="gauge gauge-success"
          href="#"
          style="--gauge-value:700;--gauge-max-value:1000;"
      ></a>
      <a
          class="gauge gauge-info"
          href="#"
          style="--gauge-value:600;--gauge-max-value:1000;"
      ></a>
      <a
          class="gauge gauge-warning"
          href="#"
          style="--gauge-value:500;--gauge-max-value:1000;"
      ></a>
      <a
          class="gauge gauge-danger"
          href="#"
          style="--gauge-value:400;--gauge-max-value:1000;"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gauge'
}
</script>

<style scoped>
  .body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    --primary-color: hsl(196, 78%, 61%);
    --secondary-color: hsl(217, 15%, 83%);
    --success-color: hsl(165, 58%, 55%);
    --info-color: hsl(214, 79%, 65%);
    --warning-color: hsl(43, 100%, 66%);
    --danger-color: hsl(354, 81%, 63%);
    --primary-color-darker: hsl(196, 68%, 54%);
    --secondary-color-darker: hsl(215, 13%, 70%);
    --success-color-darker: hsl(165, 55%, 48%);
    --info-color-darker: hsl(214, 68%, 58%);
    --warning-color-darker: hsl(39, 97%, 62%);
    --danger-color-darker: hsl(354, 67%, 56%);
    --primary-color-lighter: hsl(196, 78%, 81%);
    --secondary-color-lighter: hsl(214, 16%, 92%);
    --success-color-lighter: hsl(165, 58%, 75%);
    --info-color-lighter: hsl(214, 79%, 85%);
    --warning-color-lighter: hsl(43, 100%, 86%);
    --danger-color-lighter: hsl(354, 81%, 83%);
    --secondary-color-darkest: hsl(215, 11%, 30%);
    --secondary-color-lightest: hsl(220, 1%, 98%);
  }

  .gauges {
    display: flex;
  }

  .gauge {
    --gauge-width:90px;--gauge-value:500;--gauge-max-value:1000;--gauge-percentage:calc(var(--gauge-value) / var(--gauge-max-value) * 100%);--gauge-bg:white;--gauge-circle-color:var(--primary-color);--gauge-circle-color-lighter:var(--primary-color-lighter);--gauge-color:black;position: relative;
    display: flex;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    width: var(--gauge-width);
    height: var(--gauge-width);
    color: var(--gauge-color);
    background: conic-gradient(var(--gauge-circle-color) var(--gauge-percentage),var(--gauge-circle-color-lighter) 0);
    border-radius: 50%;
    counter-reset: value var(--gauge-value)
  }

  .gauge::before {
    position: absolute;
    content: counter(value);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    background: var(--gauge-bg);
    border-radius: inherit;
  }

  .gauge-primary {
    --gauge-circle-color:var(--primary-color);--gauge-circle-color-lighter:var(--primary-color-lighter)}

  .gauge-secondary {
    --gauge-circle-color:var(--secondary-color);--gauge-circle-color-lighter:var(--secondary-color-lighter)}

  .gauge-success {
    --gauge-circle-color:var(--success-color);--gauge-circle-color-lighter:var(--success-color-lighter)}

  .gauge-info {
    --gauge-circle-color:var(--info-color);--gauge-circle-color-lighter:var(--info-color-lighter)}

  .gauge-warning {
    --gauge-circle-color:var(--warning-color);--gauge-circle-color-lighter:var(--warning-color-lighter)}

  .gauge-danger {
    --gauge-circle-color:var(--danger-color);--gauge-circle-color-lighter:var(--danger-color-lighter)}

</style>
