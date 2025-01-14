<template>
    <section class="hero-section">
        <div class="hero-content">
            <img
                src="/src/assets/images/Hero.svg"
                alt="Hero Image"
                class="hero-image"
            />
            <div class="text-content">
                <h1 class="hero-title">Путешествуй с нами и ощути магию мира</h1>
                <p class="hero-subtitle">Простое бронирование — лёгкая экономия</p>
            </div>
        </div>

        <div class="search-box">
            <nav class="tabs">
                <button class="tab active" data-tab="flights">
                    <img src="/src/assets/icons/plane_icon.svg" alt="plane"/>
                    Перелеты
                </button>
                <button class="tab" data-tab="hotels">
                    <img src="/src/assets/icons/hotel_icon.svg" alt="hotels"/>
                    Отели
                </button>
                <button class="tab" data-tab="train">
                    <img src="/src/assets/icons/train_icon.svg" alt="train"/>
                    Ж/Д
                </button>
                <button class="tab" data-tab="transfers">
                    <img src="/src/assets/icons/transport.svg" alt="transport"/>
                    Трансферы
                </button>
                <button class="tab" data-tab="tours">
                    <img src="/src/assets/icons/tours_icon.svg" alt="tours"/>
                    Туры
                </button>
                <button class="tab" data-tab="insurance">
                    <img src="/src/assets/icons/insurance_icon.svg" alt="insurance"/>
                    Страхование
                </button>
            </nav>

            <form class="search-form">
                <div class="input-container">
                    <input type="text" placeholder="Откуда" class="input" id="city-input"/>
                    <label class="floating-label">Откуда</label>
                    <div class="dropdown" id="dropdown"></div>
                </div>


                <button class="swap_btn">
                    <img src="/src/assets/icons/Swap_inputs.svg" alt=""/>
                </button>

                <div class="input-container">
                    <input type="text" placeholder="Куда" class="input" id="city-input"/>
                    <label class="floating-label">Куда</label>
                    <div class="dropdown" id="dropdown"></div>
                </div>
                <input
                    type="text"
                    class="input_date"
                    placeholder="Когда"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                />
                <input
                    type="text"
                    class="input_date"
                    placeholder="Обратно"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                />

                <div class="custom-dropdown">
                    <button class="custom-dropdown-button" @click="toggleDropdown" type="button">
                        {{ selectedText }}
                    </button>
                    <div v-if="isDropdownOpen" class="custom-dropdown-menu">
                        <div class="custom-dropdown-item">
                            <span>Взрослые</span>
                            <div class="custom-controls">
                                <button
                                    @click="decrement('adults')"
                                    :disabled="passengerCount.adults <= 1"
                                    type="button"
                                >
                                    -
                                </button>
                                <span>{{ passengerCount.adults }}</span>
                                <button
                                    @click="increment('adults')"
                                    :disabled="totalPassengers >= maxPassengers"
                                    type="button"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div class="custom-dropdown-item">
                            <span>Дети</span>
                            <div class="custom-controls">
                                <button
                                    @click="decrement('children')"
                                    :disabled="passengerCount.children <= 0"
                                    type="button"
                                >
                                    -
                                </button>
                                <span>{{ passengerCount.children }}</span>
                                <button
                                    @click="increment('children')"
                                    :disabled="totalPassengers >= maxPassengers"
                                    type="button"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div class="custom-dropdown-item">
                            <span>Младенцы</span>
                            <div class="custom-controls">
                                <button
                                    @click="decrement('infants')"
                                    :disabled="passengerCount.infants <= 0"
                                    type="button"
                                >
                                    -
                                </button>
                                <span>{{ passengerCount.infants }}</span>
                                <button
                                    @click="increment('infants')"
                                    :disabled="totalPassengers >= maxPassengers"
                                    type="button"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <hr style="margin-top: 10px;"/>

                        <div class="custom-dropdown-item custom-class-selection">
                            <div class="custom-radio-group">
                                <label class="custom-radio-wrapper">
                                    <input type="radio" value="economy" v-model="travelClass"/>
                                    Эконом-класс
                                </label>

                                <label class="custom-radio-wrapper">
                                    <input type="radio" value="business" v-model="travelClass"/>
                                    Бизнес-класс
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" class="search-button">
                    <img src="/src/assets/icons/search_icon.svg" alt=""/>
                    Поиск
                </button>
            </form>

            <div class="searchFooter">
                <button class="accommodation_button">
                    <img src="/src/assets/icons/accommodation_icon.svg" alt=""/>
                    <span>Сложный маршрут</span>
                </button>

                <div class="switch-container">
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider"></span>
                    </label>
                    <button class="switch-btn">± 1 день</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import {ref, reactive, computed, onBeforeUnmount} from "vue";

const isDropdownOpen = ref(false);
const passengerCount = reactive({
    adults: 1,
    children: 0,
    infants: 0,
});

const maxPassengers = 9;
const travelClass = ref("economy");

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
    if (isDropdownOpen.value) {
        window.addEventListener("click", handleOutsideClick);
    }
};

const handleOutsideClick = (event: MouseEvent) => {
    const dropdown = document.querySelector(".custom-dropdown");
    if (!dropdown || !dropdown.contains(event.target as Node)) {
        isDropdownOpen.value = false;
        window.removeEventListener("click", handleOutsideClick);
    }
};

onBeforeUnmount(() => {
    window.removeEventListener("click", handleOutsideClick);
});

const increment = (type: "adults" | "children" | "infants") => {
    if (totalPassengers.value < maxPassengers) {
        passengerCount[type]++;
    }
};

const decrement = (type: "adults" | "children" | "infants") => {
    if (passengerCount[type] > 0) passengerCount[type]--;
};

const totalPassengers = computed(() => {
    return (
        passengerCount.adults + passengerCount.children + passengerCount.infants
    );
});

const selectedText = computed(() => {
    const passengerWord =
        totalPassengers.value === 1
            ? "пассажир"
            : totalPassengers.value <= 4
                ? "пассажира"
                : "пассажиров";

    return `${totalPassengers.value} ${passengerWord}`;
});
</script>

<script lang="ts">
interface Airport {
    id: number;
    name_rus: string;
    name_eng: string;
    city_rus: string;
    city_eng: string;
    iata_code: string;
}

class CityInputDropdown {
    private input: HTMLInputElement;
    private dropdown: HTMLDivElement;
    private apiUrl: string = "https://api2.globaltravel.space/static/airports";

    constructor(inputId: string, dropdownId: string) {
        this.input = document.getElementById(inputId) as HTMLInputElement;
        this.dropdown = document.getElementById(dropdownId) as HTMLDivElement;

        this.initialize();
    }

    private initialize() {
        this.input.addEventListener("input", async () => {
            const query = this.input.value.trim();

            if (query.length > 1) {
                const cities = await this.fetchCities();

                if (cities.length > 0) {
                    const filteredCities = this.filterCities(cities, query);
                    if (filteredCities.length > 0) {
                        this.populateDropdown(filteredCities);
                    } else {
                        this.showNoResults();
                    }
                } else {
                    this.showNoResults();
                }
            } else {
                this.clearDropdown();
            }
        });

        document.addEventListener("click", (event) => {
            if (!this.input.contains(event.target as Node) && !this.dropdown.contains(event.target as Node)) {
                this.clearDropdown();
            }
        });
    }

    private async fetchCities(): Promise<Airport[]> {
        try {
            const response = await fetch(this.apiUrl);

            if (!response.ok) {
                throw new Error(`Failed data: ${response.statusText}`);
            }

            const data = await response.json();

            if (Array.isArray(data.data)) {
                return data.data;
            } else {
                throw new Error("API returned");
            }
        } catch (error) {
            console.error("Error cities:", error);
            return [];
        }
    }

    private filterCities(cities: Airport[], query: string): Airport[] {
        const lowercaseQuery = query.toLowerCase();
        return cities.filter((city) => {
            const isEnglishInput = /^[a-zA-Z]/.test(query);

            if (isEnglishInput) {
                return city.city_eng.toLowerCase().startsWith(lowercaseQuery) ||
                    city.name_eng.toLowerCase().startsWith(lowercaseQuery) ||
                    city.iata_code.toLowerCase().startsWith(lowercaseQuery);
            }
            return city.name_rus.toLowerCase().startsWith(lowercaseQuery) ||
                city.city_rus.toLowerCase().startsWith(lowercaseQuery);
        });
    }

    private populateDropdown(cities: Airport[]) {
        this.clearDropdown();

        cities.forEach((city) => {
            const item = document.createElement("button");
            item.className = "dropdown-btn";
            item.innerHTML = `
                <span class="icon">
                    <img id="icon_plane" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NzYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiI+PHBhdGggZmlsbD0iI2MyYzJjMiIgZD0iTTQ4MCAxOTJIMzY1LjcxTDI2MC42MSA4LjA2QTE2LjAxIDE2LjAxIDAgMCAwIDI0Ni43MSAwaC02NS41Yy0xMC42MyAwLTE4LjMgMTAuMTctMTUuMzggMjAuMzlMMjE0Ljg2IDE5MkgxMTJsLTQzLjItNTcuNmMtMy4wMi00LjAzLTcuNzctNi40LTEyLjgtNi40SDE2LjAxQzUuNiAxMjgtMi4wNCAxMzcuNzguNDkgMTQ3Ljg4TDMyIDI1NkwuNDkgMzY0LjEyQy0yLjA0IDM3NC4yMiA1LjYgMzg0IDE2LjAxIDM4NEg1NmM1LjA0IDAgOS43OC0yLjM3IDEyLjgtNi40TDExMiAzMjBoMTAyLjg2bC00OS4wMyAxNzEuNmMtMi45MiAxMC4yMiA0Ljc1IDIwLjQgMTUuMzggMjAuNGg2NS41YzUuNzQgMCAxMS4wNC0zLjA4IDEzLjg5LTguMDZMMzY1LjcxIDMyMEg0ODBjMzUuMzUgMCA5Ni0yOC42NSA5Ni02NHMtNjAuNjUtNjQtOTYtNjQiLz48L3N2Zz4=" alt="icon">
                </span>
                <div class="city-info">
                    <span class="city-name">${city.name_rus}
                     <span class="iata-code">${city.iata_code}</span>
                    </span>

                </div>
            `;
            this.dropdown.appendChild(item);

            item.addEventListener("click", () => {
                this.input.value = `${city.name_rus} (${city.iata_code})`;
                this.clearDropdown();
            });
        });

        this.dropdown.style.display = "block";
    }

    private showNoResults() {
        this.clearDropdown();
        const noResultItem = document.createElement("div");
        noResultItem.className = "dropdown-btn";
        noResultItem.textContent = "No results found";
        this.dropdown.appendChild(noResultItem);

        this.dropdown.style.display = "block";
    }

    private clearDropdown() {
        this.dropdown.innerHTML = "";
        this.dropdown.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new CityInputDropdown("city-input", "dropdown");
});
</script>


<style lang="scss" scoped>

</style>
