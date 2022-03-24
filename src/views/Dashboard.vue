<script setup>
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const router = useRouter()
const route = useRoute()
const auth = getAuth()
const username = route.params.email

onBeforeMount(() => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            router.replace('/register')
        }
    })
})
</script>

<template>
    <!-- START HEADER SECTION -->
    <header class="main-header header-1">
        <!-- START LOGO AREA -->
        <div class="logo-area">
            <div class="auto-container">
                <div class="logo">
                    <RouterLink to="/">
                        <a>
                            <h2>
                                Golden
                                <span class="hub">Hub</span> Trade
                            </h2>
                        </a>
                    </RouterLink>
                </div>
            </div>
        </div>
        <!-- END LOGO AREA -->
    </header>
    <!-- END HEADER SECTION -->

    <!-- start dashboard -->
    <div class="container">
        <p class="greeting pb-4">
            Welcome
            <span class="font-weight-bold">Ukandu</span>
        </p>
        <div class="box">
            <div class="row">
                <div class="col-sm-3 col-md-3">
                    <div class="inner_box first">
                        <p class="header_1 pt-3">Account Balance</p>
                        <p class="header_2 pt-2">$0</p>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3">
                    <div class="inner_box second">
                        <p class="header_1 pt-3">Total Earn</p>
                        <p class="header_2 pt-2">$0</p>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3">
                    <div class="inner_box third">
                        <p class="header_1 pt-3">Total Deposits</p>
                        <p class="header_2 pt-2">$0</p>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3">
                    <div class="inner_box fourth">
                        <p class="header_1 pt-3">Total Withdrawals</p>
                        <p class="header_2 pt-2">$0</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-5">
        <p class="greeting">Detail Report</p>
    </div>
    <!-- end dashboard -->
</template>

<style scoped>
.hub {
    color: orange;
}
.box {
    /* margin: 0px auto; */
}
.inner_box {
    height: 100px;
    color: white;
    text-align: center;
}
.first {
    background-color: orangered;
}
.second {
    background-color: green;
}
.third {
    background-color: red;
}
.fourth {
    background-color: rgb(5, 56, 5);
}
.greeting {
    font-size: 28px;
}

.header_1 {
    font-size: 23px;
    font-weight: 900;
}

.header_2 {
    font-size: 19px;
    font-weight: 700;
}

@media (max-width: 991px) {
    .inner_box {
        margin-bottom: 10px;
    }
}
</style>