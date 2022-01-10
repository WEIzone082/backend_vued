<template>
  <footer>
    <div class="data-info">{{ start }} - {{ end }} | {{ count }}項 | 第{{recent}}頁，共{{availPages}}頁</div>

    <div aria-label="Page navigation example page-changer">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" aria-label="Previous" @click="change('prev')">
            <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" aria-label="Next" @click="change('next')">
            <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["count", "DPP"],
  data() {
    return {
      start:1,
      end:this.DPP,
      availPages:0,
      recent:1
    };
  },
  methods:{
    change: function(dir){
      if(dir === 'prev'){
        if(this.recent != 1){
          this.recent-=1;
          this.start-=this.DPP;
          this.end = this.recent*this.DPP;
          this.$emit('pageChange',{beg:this.start-1,fin:this.end});
        }
      }else if(dir === 'next'){
        if(this.recent != this.availPages){
          this.recent+=1;
          this.start+=this.DPP;
          this.recent * this.DPP > this.count ? this.end = this.count : this.end = this.recent*this.DPP;
          this.$emit('pageChange',{beg:this.start-1,fin:this.end});       
        }
      }
    }
  },
  beforeUpdate(){
    this.availPages = Math.ceil(this.count/this.DPP);
  }
};
</script>

<style scoped>
footer {
  width: 100%;
  margin: 0 auto;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
