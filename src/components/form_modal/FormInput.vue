<template>
    <div class="form-floating mb-3">
        <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
        />
        <label for="floatingInput" class="input-group-text">{{title}}</label>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props:['title'],
};
</script>

<style></style>
