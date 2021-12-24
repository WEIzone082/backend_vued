<template>
    <div class="form-floating mb-3">
        <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
        />
        <label for="floatingInput" class="input-group-text">{{InputTitle}}</label>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props:['InputTitle']
};
</script>

<style></style>
