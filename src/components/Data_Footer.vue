<template>
  <footer>
    <div class="data-info">{{ start }} - {{ end }} | {{ count }}項</div>

    <div aria-label="Page navigation example page-changer">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            aria-label="Previous"
            @click="pageChanger('prev')"
          >
            <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="index in AvailPages"
          :key="index"
          @click="pageChanger(index)"
        >
          <a class="page-link" href="#">{{ index }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" aria-label="Next" @click="pageChanger('next')">
            <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  // props: ["count", "DPP", "start", "end", "pages"],
  // data() {
  //   return {
  //     AvailPages: [],
  //   };
  // },
  // methods: {
  //   PageInitialize: function () {
  //     if (this.count >= 3) {
  //       this.AvailPages = [1, 2, 3];
  //     } else {
  //       for (let i = 1; i <= this.pages; i++) {
  //         this.AvailPages.push(i);
  //       }
  //     }
  //   },
  //   pageChanger: function (page) {
  //     if (page === "prev") {
  //       if (this.start !== 1) {
  //         this.AvailPages.pop();
  //         this.AvailPages.unshifit(Math.min(...this.AvailPages) - 1);
  //         let num = Math.max(...this.AvailPages) * this.DPP;
  //         this.$emit("changeData", { begin: num - this.DPP, end: num + 1 });
  //       }
  //     } else if (page === "next") {
  //       if (this.end !== this.count) {
  //         this.AvailPages.shift();
  //         this.AvailPages.push(Math.max(...this.AvailPages) + 1);
  //         console.log(this.AvailPages);
  //         let num = Math.min(...this.AvailPages) * this.DPP;
  //         this.$emit("changeData", { begin: num - this.DPP, end: num });
  //       }
  //     } else {
  //       console.log("triggered!");
  //       this.$emit(
  //         "changeData",
  //         page * this.DPP,
  //         page * this.DPP + this.DPP + 1
  //       );
  //     }
  //   },
  // },
  // beforeUpdate: function () {
  //   this.PageInitialize();
  // },
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
