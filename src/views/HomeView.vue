<template>
    <SearchBar @customChange="updateList" />
    <div class="container">
        <HoldayCard
            v-for="holiday in filteredList"
            :key="holiday.id"
            :holiday="holiday"
        />
    </div>
</template>

<script>
    import HoldayCard from "../components/HolidayCard";
    import SearchBar from "../components/SearchBar";

    class Holiday {
        constructor(id, hotel, country, city, duration, date, price, src) {
            this.id = id;
            this.hotel = hotel;
            this.country = country;
            this.city = city;
            this.duration = duration;
            this.date = date;
            this.price = price;
            this.src = src;
        }
    }

    export default {
        name: "HomeView",
        components: {
            HoldayCard,
            SearchBar,
        },
        data() {
            return {
                search: "",
                holidayList: [
                    new Holiday(
                        1,
                        "Parque Hotel",
                        "Tenerife",
                        "Peurto De La Cruz",
                        14,
                        "08.06.2022",
                        429,
                        "holiday-1.jpg"
                    ),
                    new Holiday(
                        2,
                        "Hotel Catalonia",
                        "Majorca",
                        "Alcudia",
                        4,
                        "23.04.2021",
                        429,
                        "holiday-2.jpg"
                    ),
                    new Holiday(
                        3,
                        "Playa Bonito",
                        "Gran Canaria",
                        "Playa Del Ingles",
                        4,
                        "23.04.2021",
                        429,
                        "holiday-3.jpg"
                    ),
                    new Holiday(
                        4,
                        "Parque Hotel",
                        "Tenerife",
                        "Peurto De La Cruz",
                        14,
                        "08.06.2022",
                        429,
                        "holiday-1.jpg"
                    ),
                    new Holiday(
                        5,
                        "Hotel Catalonia",
                        "Majorca",
                        "Alcudia",
                        4,
                        "23.04.2021",
                        429,
                        "holiday-2.jpg"
                    ),
                    new Holiday(
                        6,
                        "Playa Bonito",
                        "Gran Canaria",
                        "Playa Del Ingles",
                        4,
                        "23.04.2021",
                        429,
                        "holiday-3.jpg"
                    ),
                ],
            };
        },

        computed: {
            filteredList(event) {
                return this.holidayList.filter((holiday) => {
                    return holiday.country
                        .toLowerCase()
                        .includes(this.search.toLowerCase());
                });
            },
        },
        methods: {
            updateList(event) {
                this.search = event;
            },
        },
    };
</script>

<style lang="scss" scoped></style>
