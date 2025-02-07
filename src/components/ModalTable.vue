<template>
    <div class="details-box">
        <div class="headerbtns">
            <div class="modal-header">Детализация цен</div>
            <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
        </div>
        <table class="price-table">
            <thead>
            <tr>
                <th>Пассажиры</th>
                <th>Общая стоимость за одного пассажира</th>
                <th>Общая стоимость</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>3 Взрослых</td>
                <td>1 500 000 UZS</td>
                <td>4 500 000 UZS</td>
            </tr>
            <tr>
                <td>1 ребенок</td>
                <td>1 150 000 UZS</td>
                <td>1 150 000 UZS</td>
            </tr>
            </tbody>
        </table>
        <div class="total">Всего: <span>100 000.77 UZS</span></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    close: () => void;
}>();
</script>

<style lang="scss">
.details-box {
    font-family: Mulish, sans-serif;
    margin-top: -235px;
    margin-left: -680px;
    width: 1000px;
    height: 308px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 20px 24px;

    .headerbtns {
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: space-between;
        font-family: Mulish, sans-serif;

        .trigger-btn {
            padding: 0 0 3px 1px;
            background: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid #B5BBC9;
            transition: background 0.3s ease, border 0.3s ease;

            .close-icon {
                font-size: 24px;
                font-family: Mulish, sans-serif;

                color: #81899A;
                transition: color 0.3s ease;
            }

            &:active, &.active {
                border-color: #00B8D7;

                .close-icon {
                    color: #00B8D7;
                }
            }
        }
    }

    .modal-header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: left;
    }

    .price-table {
        border: 1px solid #B5BBC9;
        border-collapse: collapse;
        margin-top: 15px;
        width: 100%;
        margin-bottom: 20px;
    }

    .price-table th,
    .price-table td {
        padding: 10px;
        border: 1px solid #dcdcdc;
        text-align: left;
    }

    .price-table th {
        width: 317px;
        height: 56px;
        background-color: #f4f4f4;
        color: #6D7586;
        font-size: 15px;
        font-family: Mulish, sans-serif;
        font-weight: 400;
    }

    .price-table td {
        width: 317px;
        height: 56px;
        font-size: 16px;
        font-family: Mulish, sans-serif;
        color: #212121;
        font-weight: 600;
    }

    .total {
        font-size: 20px;
        font-weight: 500;
        text-align: right;
        color: #00B8D7;
    }

    .total span {
        font-size: 20px;
        font-weight: 700;
        color: #00B8D7;
    }
}
</style>