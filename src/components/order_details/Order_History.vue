<template>
  <div class="container order-process-wrapper">
    <div class="row block-name">訂單歷史</div>

    <div class="container order-process">
      <div class="row">
        <div class="col process-block">
          <img
            src="../../assets/img/top-branch.png"
            alt=""
            class="process-branch"
          />
          <div class="process-detail">
            <p class="process-title">已送達</p>
            <p class="process-date">2021/11/30 22:30:24</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col process-block">
          <img
            src="../../assets/img/mid-branch.png"
            alt=""
            class="process-branch"
          />
          <div class="process-detail">
            <p class="process-title">等待出貨</p>
            <p class="process-date">2021/11/30 22:30:24</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col process-block">
          <img
            src="../../assets/img/low-branch.png"
            alt=""
            class="process-branch"
          />
          <div class="process-detail">
            <p class="process-title">已付款</p>
            <p class="process-date">2021/11/30 22:30:24</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row comment-adder">
      <div class="col-5">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="process-comment"
            placeholder="add some comment"
          />
          <label for="process-comment">新增備註</label>
        </div>
      </div>
      <div class="col-2">
        <button class="btn btn-light submit-comment">送出</button>
      </div>
      <div class="col-5"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order-process-wrapper {
  margin: 20px 0;
  padding: 18px 15px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;
  .block-name {
    font-size: 20px;
    font-weight: 500;
  }
}

.order-process {
  border: 1px solid lightgray;
  padding: 18px 0;
  margin: 25px 0;
  .process-block {
    height: 65px;
    display: flex;
  }
}

.process-branch {
  width: 45px;
  height: 65px;
}

.process-detail {
  font-weight: 500;
  line-height: 26px;
  .process-title {
    font-size: 18px;
  }
  .process-date {
    font-size: 12px;
  }
}

#process-comment {
  height: 20px !important;
  padding: 10px 12px;
}

.submit-comment {
  margin-left: 15px;
}
</style>
