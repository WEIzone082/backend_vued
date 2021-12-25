<template>
    <div
        class="modal fade"
        :id="modalId"
        tabindex="-1"
        aria-labelledby="update-modalLabel"
        aria-hidden="true"
        style="display: none"
    >
        <div class="modal-dialog">
            <div class="modal-content create-modal-content">
                <FormHeader/>
                <FormBody/>
                <FormFooter />
            </div>
        </div>
    </div>
</template>

<script>

import FormHeader from "./form_modal/FormHeader.vue";
import FormBody from "./form_modal/FormBody.vue";
import FormFooter from "./form_modal/FormFooter.vue";
export default {
    name: "Modal",
    components: {
        FormHeader,
        FormBody,
        FormFooter,
    },
    props:['modalId']
};
</script>

<style></style>
