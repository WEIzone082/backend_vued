<template>
    <div class="form-floating form-floating-textarea">
        <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2" class="input-group-text">{{formTextareaTitle}}</label>
    </div>
</template>

<script>
export default {
    name: "FormTextarea",
    props: ['formTextareaTitle']
};
</script>

<style></style>
