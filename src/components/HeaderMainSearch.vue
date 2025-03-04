<template>
    <section class="hero-section">
        <HeroContent/>
        <div
            class="search-box"
            :class="{ 'adjust-margin': isSearchBoxVisible, 'isHomepage': route.path !== '/' }"
        >
            <EasyTabs v-if="route.path === '/result' "/>
            <tabs v-else/>
            <form class="search-form">
                <div class="input-container">
                    <input
                        type="text"
                        placeholder="Откуда"
                        required
                        class="input"
                        :class="{ 'input-error': errors.fromCity }"
                        id="city-input-from"
                        v-model="fromCity"
                        autocomplete="off"
                    />
                    <label
                        class="floating-label"
                        :class="{ 'floating-label-error': errors.fromCity }">Откуда</label>
                    <div class="dropdown" id="dropdown-from"></div>
                </div>

                <button type="button" class="swap_btn" @click="swapInputs">
                    <img src="/src/assets/icons/Swap_inputs.svg" alt="Swap"/>
                </button>

                <div class="input-container">
                    <input
                        type="text"
                        placeholder="Куда"
                        required
                        class="input"
                        :class="{ 'input-error': errors.toCity }"
                        id="city-input-to"
                        v-model="toCity"
                        autocomplete="off"
                    />
                    <label
                        class="floating-label"
                        :class="{ 'floating-label-error': errors.toCity }">Куда
                    </label>
                    <div class="dropdown" id="dropdown-to"></div>
                </div>

                <div class="datepicker-wrapper">
                    <VueDatePicker
                        v-model="departureDate"
                        :range="false"
                        :multi-calendars="{ solo: true }"
                        placeholder="Когда"
                        class="custom-datepicker"
                        :class="{ 'input-error': errors.departureDate }"
                        :enable-time-picker="false"
                        @update:model-value="handleDepartureDateSelection"
                        auto-apply
                        :format="formatDate"
                    />
                </div>

                <div class="datepicker-wrapper">
                    <VueDatePicker
                        v-model="returnDate"
                        :range="false"
                        :multi-calendars="{ solo: true }"
                        placeholder="Обратно"
                        class="custom-datepicker"
                        :enable-time-picker="false"
                        :time-picker="false"
                        :enable-minutes="false"
                        :enable-seconds="false"
                        :hide-navigation="['time', 'hours', 'minutes', 'seconds']"
                        :disabled-dates="disableDepartureDates"
                        @update:model-value="handleReturnDateSelection"
                        auto-apply
                        :format="formatDate"
                    />
                </div>

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

                <router-link to="/result" custom>
                    <button type="button" class="search-button" @click="handleSearch()">
                        <img src="/src/assets/icons/search_icon.svg" alt=""/>
                        <span>Поиск</span>
                    </button>
                </router-link>
            </form>
            <SearchFooter/>
        </div>
    </section>
</template>
<script lang="ts" setup>
import {computed, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import tabs from "./HeaderMainSearch/tabs.vue";
import {useRoute, useRouter} from "vue-router";
import EasyTabs from "./HeaderMainSearch/EasyTabs.vue";
import SearchFooter from "./HeaderMainSearch/SearchFooter.vue";
import HeroContent from "./HeaderMainSearch/HeroContent.vue";

const route = useRoute();
const router = useRouter();
const showTabs = ref(true);

watch(
    () => route.path,
    (newPath) => {
        showTabs.value = newPath !== '/result';
    },
    {immediate: true}
);

const fromCity = ref<string>("");
const toCity = ref<string>("");
const departureDate = ref<string | null>(null);

const errors = reactive({
    fromCity: false,
    toCity: false,
    departureDate: false,
});

const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Oy 0 dan boshlanadi
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const validateForm = () => {
    errors.fromCity = fromCity.value.trim() === "";
    errors.toCity = toCity.value.trim() === "";
    errors.departureDate = !departureDate.value;

    return !errors.fromCity && !errors.toCity && !errors.departureDate;
};

const handleSearch = () => {
    if (validateForm()) {
        router.push("/result");
    } else {
        alert("Пожалуйста, заполните все обязательные поля.");
    }
};

const handleDepartureDateSelection = (selectedDate: Date | null) => {
    if (selectedDate) {
        departureDate.value = formatDate(selectedDate);
    } else {
        departureDate.value = null;
    }
    errors.departureDate = !selectedDate;
};

const isDropdownOpen = ref(false);
const date = ref();
const passengerCount = reactive({
    adults: 1,
    children: 0,
    infants: 0,
});

const maxPassengers = 9;
const travelClass = ref("economy");

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
});

const swapInputs = () => {
    const temp = fromCity.value;
    fromCity.value = toCity.value;
    toCity.value = temp;
};

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
    return passengerCount.adults + passengerCount.children + passengerCount.infants;
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

onMounted(() => {
    const buttons = document.querySelectorAll(".tabs .tab");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    new CityInputDropdown("city-input-from", "dropdown-from");
    new CityInputDropdown("city-input-to", "dropdown-to");
});

const isSearchBoxVisible = ref(false);

const checkVisibility = () => {
    const searchBox = document.querySelector('.search-box') as HTMLElement;
    if (searchBox) {
        searchBox.style.marginTop = '-60px';
        isSearchBoxVisible.value = true;
    }
};

onMounted(() => {
    checkVisibility();
    window.addEventListener('DOMContentLoaded', checkVisibility);
});

onBeforeUnmount(() => {
    window.removeEventListener('DOMContentLoaded', checkVisibility);
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
                console.error(`Failed to fetch data: ${response.statusText}`);
                return [];
            }
            const data = await response.json();
            if (Array.isArray(data.data)) {
                return data.data;
            } else {
                console.error("API returned.");
                return [];
            }
        } catch (error) {
            console.error("Error fetching cities:", error);
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

export default {
    data() {
        return {
            date: null as string | null,
            departureDate: null as string | null,
            returnDate: null as string | null,
        };
    },
    computed: {
        disableDepartureDates() {
            if (!this.returnDate) return () => false;
            const maxDate = new Date(this.returnDate);
            return (date: Date) => date > maxDate;
        },
    },
    methods: {
        handleReturnDateSelection(value: string | null) {
            if (value === null) {
                this.returnDate = null;
                return;
            }
            this.returnDate = value;
            if (this.departureDate && new Date(value).getTime() < new Date(this.departureDate).getTime()) {
                this.departureDate = null;
            }
        },
    }
}
</script>

<style></style>
