<template>
  <div>
    <dl>
      <dt v-if="conditions.temp != conditions.temp_min">Chance of Rain</dt>
      <dd v-if="conditions.temp != conditions.temp_min">{{ conditions.temp }}%</dd>
      <dt>Humidity</dt>
      <dd>{{ conditions.humidity }}%</dd>
      
    </dl>
  </div>
</template>

<script>
export default {
  name: 'WeatherConditions',
  data () {
    return {

    }
  },
  props: {
    conditions: {}
  }
}
</script>

<style scoped>
  dl {
    padding: 5px;
    background: #e8e8e8;
  }
  dt {
    float: left;
    clear: left;
    width: 120px;
    text-align: right;
    font-weight: bold;
    color: seagreen;
  }
  dd {
    margin: 0 0 0 130px;
    padding: 0 0 0.5em 0;
  }
  dt::after {
    content: ":";
  }
</style>
