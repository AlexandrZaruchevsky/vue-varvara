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
    font-size: 13rem;
    color: white;
    background-color: rgba(0, 0, 224, 0.747);
    width: 200px;
    height: 260px;
    border-radius: 5px;
}

.alfavit>div{
    text-align: center;
}

.alfavit>div>span{
    position: relative;
    top: 120px;
    
}

</style>