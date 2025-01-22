
<template>
    <aside>
        <button class="folowPrice">
            <i class="notification fas fa-bell"></i>
            <span>Следить за ценой</span>
        </button>

        <div class="sidebar">
            <div class="sidebar__item">
                <h3>Пересадки
                    <button>
                        <img src="/src/assets/icons/arrow_down.svg" alt="arrow_down">
                    </button>
                </h3>
                <ul>
                        <input type="checkbox">
                        <span>Без пересадок</span>
                </ul>

                <ul>
                    <input type="checkbox">
                    1 пересадка
                </ul>

                <ul>
                    <input type="checkbox">
                    <span>2 и более</span>
                </ul>

                <ul>
                    <input type="checkbox">
                    <span>Без смены аэропорта</span>
                </ul>

                <div class="slider-container">
                    <span class="time-label" id="time-label">1ч 15мин</span>
                    <input type="range" min="0" max="180" value="75" class="slider" id="time-slider">
                </div>
            </div>

        </div>
    </aside>
</template>

<style scoped lang="scss">
$primary-color: #00a8e8;
$background-color: #f0f4f8;
$text-color: #4a4a4a;
$slider-track-color: #d3d3d3;
aside {
    width: 267px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    .folowPrice {
        padding: 16px;
        width: 100%;
        height: 54px;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        font-size: 14px;
        color: #6D7586;
        display: flex;
        gap: 10px;
        font-family: Arial, sans-serif;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: #FFFFFF59;
    }


    .sidebar {
        background-color: #FFFFFF59;
        width: 100%;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        padding-left: 16px;

        &__item {
            display: flex;
            flex-direction: column;
            gap: 16px;

            h3 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: center;
                padding: 14px 16px 0 0;
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;

                button {
                    width: 20px;
                    height: 20px;
                    background-color: transparent;
                    border: none;
                    img {
                        rotate: 180deg;
                        width: 15px;
                        height: 15px;
                    }
                }
            }

            ul {
                display: flex;
                gap: 12px;
                font-size: 14px;
                cursor: pointer;
                font-weight: 400;
                line-height: 17px;
                color: #23282D;

            }
        }
    }
}

</style>