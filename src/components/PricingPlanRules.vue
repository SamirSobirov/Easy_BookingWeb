<template>
    <div class="route-container">
        <div class="box">
            <span class="airport">TAS</span>
            <img src="/src/assets/icons/Modal_Flight_takeoff.svg" alt="">
            <span class="airport">UGC</span>
        </div>
        <div class="line"></div>
    </div>

    <div class="Tarifs_Header">
        <div class="passenger">
            <p>Пассажиры:</p>

            <label class="radio_box">
                <input type="radio" name="passenger"/>
                <span>Взрослый</span>
            </label>

            <label class="radio_box">
                <input type="radio" name="passenger"/>
                <span>Ребенок</span>
            </label>
        </div>

        <div class="tarifs">
            <div class="passenger">
                <p>Код тарифа: <span>SRT</span></p>
                <p>Тип класса: <span>Эконом</span></p>
            </div>
        </div>
    </div>

    <hr>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.route-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 120px;
    flex-direction: column;
    .box {
        font-family: Mulish, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        width: 100%;
        cursor: pointer;
        img {
            width: 14px;
            height: 14px;
        }
    }

    .line {
        border-top-right-radius: 100px;
        border-top-left-radius: 100px;
        width: 100%;
        height: 4px;
        background-color: #00b8d7;
    }
}

.Tarifs_Header {
    margin-top: 19px;
    display: flex;
    justify-content: space-between;
    .passenger {
        display: flex;
        gap: 12px;
        p {
            cursor: pointer;
            font-size: 14px;
            font-family: Mulish, sans-serif;
            color: #81899A;
            display: flex;
            gap: 4px;
        }

        span {
            color: black;
            font-size: 14px;
        }

        .radio_box {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            span {
                color: #B5BBC9;
                transition: color 0.2s;
            }
            input[type="radio"] {
                appearance: none;
                width: 13px;
                height: 13px;
                margin-right: 10px;
                border: 1px solid #ccc;
                border-radius: 50%;
                background-color: white;
                position: relative;
                outline: none;
                margin-left: auto;
                &::before {
                    content: "";
                    display: block;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background-color: transparent;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: background-color 0.2s, transform 0.2s;
                }

                &:checked {
                    border: 1.5px solid #80dbeb;
                    background-color: #80dbeb1d;
                    &::before {
                        background-color: #80dbeb;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            }
        }
        .radio_box input[type="radio"]:checked + span {
            color: black;
        }
    }
}

hr {
    margin-top: 15px;
    height: 0.6px;
    background-color: #e3e3e3;
    border: none;
}

</style>

