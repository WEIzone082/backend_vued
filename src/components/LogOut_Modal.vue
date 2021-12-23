<template>
    <div class="modal fade logout-modal" id="LogoutModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content logout-modal-content">
                <div class="modal-body logout-modal-body">
                    確認登出？
                </div>
                <div class="modal-footer logout-modal-footer">
                    <button type="button" class="btn primary-comp" data-bs-dismiss="modal"
                        aria-label="Close">取消</button>
                    <button type="button" class="btn grey-comp">確認</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/components/LogOut_Modal.scss'
</style>