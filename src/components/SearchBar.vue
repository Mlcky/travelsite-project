<template>
    <div class="home">
        <section class="hero">
            <div class="hero-text container">
                <div class="search">
                    <input
                        type="text"
                        class="searchTerm"
                        placeholder="Where to next?"
                        @change="customChange"
                    />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        methods: {
            customChange(events) {
                this.$emit("customChange", event.target.value);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .hero {
        background-image: url("../assets/banner-image.png");
        background-position: center;
        background-size: cover;
        height: 400px;
        width: 100%;

        .hero-text {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            h4 {
                text-transform: uppercase;
                font-size: 22px;
                padding-bottom: 4px;
            }
            h2 {
                font-size: 50px;
                @media (min-width: 550px) {
                    font-size: 80px;
                }
            }
            hr:nth-child(2) {
                max-width: 365px;
                margin-bottom: 16px;
            }
            hr:nth-child(4) {
                height: 6px;
                background-color: #fff;
                border: none;
                max-width: 85px;
                margin-top: 16px;
            }
        }
    }

    .search {
        width: 80%;
        max-width: 600px;
        display: flex;
        margin: auto;
        padding-top: 70px;
        font-size: 2em;
    }

    .searchTerm {
        width: 100%;
        border: 6px solid #ffffff;
        border-right: none;
        padding: 5px;
        height: 60px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.1);
        font-size: 1.3em;
    }

    ::placeholder {
        color: #dedbdb;
    }

    .searchTerm:focus {
        color: #ffffff;
    }

    .searchButton {
        width: 80px;
        height: 60px;
        border: 1px solid #ffffff;
        background: #ffffff;
        text-align: center;
        color: rgb(0, 0, 0);
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
        &:hover {
            i {
                transform: scale(1.2);
            }
        }
        i {
            font-size: 1.4em;
            transition: 0.5s ease all;
        }
    }

    @media (max-width: 515px) {
        .searchTerm {
            font-size: 0.7em;
        }
    }
</style>
