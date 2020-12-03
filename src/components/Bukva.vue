<template>
  <div class="alfavit">
      <div class="mx-auto">
        <span>{{buk}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'Bukva',
    props:{
        buk: String
    }
}
</script>

<style lang="scss" scoped>

.alfavit{
    font-size: 20rem;
    color: white;
    background-color: rgba(0, 0, 224, 0.747);
    width: 300px;
    height: 360px;
    border-radius: 5px;
}

.alfavit>div{
    text-align: center;
}

.alfavit>div>span{
    position: relative;
    top: 170px;
    
}

</style>