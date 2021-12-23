<template>
    <footer>
        <div class="data-info">
            {{start}} - {{end}} | {{count}}項
        </div>

        <div aria-label="Page navigation example page-changer">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
                    </a>
                </li>
            </ul>
        </div>

    </footer>
</template>

<script>
export default {
    props:['start','end','count']
}
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