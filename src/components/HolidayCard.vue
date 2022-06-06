<template>
    <div class="holiday">
        <div class="holiday-image">
            <img :src="require(`@/assets/${holiday.src}`)" alt="" />
            <div class="title"></div>
        </div>
        <div class="inner-container">
            <div class="inner-text">
                <h1>{{ holiday.country }}</h1>
                <h2>{{ holiday.city }}</h2>
                <br />
                <h3>{{ holiday.hotel }}</h3>
                <p>
                    {{ holiday.duration }} night stay for £{{
                        holiday.price
                    }}.00pp
                </p>
                <p>Flying: {{ holiday.date }}</p>
            </div>
            <router-link
                class="link"
                :holiday="holiday"
                :to="{ name: 'holiday-details', params: { id: holiday.id } }"
            >
                <div class="btn">
                    <p>Explore</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HolidayCard",
        props: ["holiday"],
    };
</script>

<style lang="scss" scoped>
    .holiday {
        width: 100%;
        height: 280px;
        margin: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        transition: 1s ease all;
        &:hover {
            transform: scale(1.01);
        }

        .holiday-image {
            height: 280px;
            width: 70%;
            background-position: center;
            background-size: cover;
            color: white;
            border-radius: 10px 0 0 10px;
        }

        img {
            height: 280px;
            width: 100%;
            border-radius: 10px 0 0 10px;
            object-fit: cover;
        }

        .inner-container {
            width: 30%;
            color: black;
            border-radius: 0 10px 10px 0;
        }

        .inner-text {
            padding: 8px 8px 0 8px;
            width: 100%;
            height: 220px;
        }
        .btn {
            width: 100px;
            margin: 10px;
            float: right;
            height: 40px;
            color: #fff;
            font-size: 1.1em;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            background-color: rgb(63, 78, 216);
            cursor: pointer;
            line-height: 40px;
            text-align: center;
            &:hover {
                transform: scale(1.03);
                background-color: rgb(22, 34, 137);
            }
        }
    }
    @media (max-width: 750px) {
        .holiday {
            flex-direction: column;
            height: 100%;
            .holiday-image {
                width: 100%;
                height: auto;
                img {
                    height: auto;
                    width: 100%;
                    border-radius: 10px 10px 0 0;
                    object-fit: contain;
                }
            }
            .inner-container {
                width: 100%;
                height: 100%;
                .inner-text {
                    height: 100%;
                }
            }
        }
    }
</style>
