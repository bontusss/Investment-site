<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useRouter, RouterLink } from 'vue-router'
const auth = getAuth()
const email = ref('')
const password = ref('')
const error = ref('')
const errored = ref(false)
const router = useRouter()
const handleLogin = async () => {
    try {
        console.log('creating user...')
        const userCred = await signInWithEmailAndPassword(auth, email.value, password.value)
        print(userCred.user.email)
        router.push({
            name: 'dashboard',
            params: {
                email: userCred.user.email
            }
        })
    } catch (err) {
        errored.value = true
        error.value = err.message
    }

}
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
    <form>
        <div class="container">
            <h1>Login</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="email">
                <b>Email</b>
            </label>
            <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                required
                v-model="email"
            />

            <label for="psw">
                <b>Password</b>
            </label>
            <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
                v-model="password"
            />
            <hr />

            <p>
                By creating an account you agree to our
                <a href="#">Terms & Privacy</a>.
            </p>
            <p v-if="errored" class="text-danger">{{ error }}</p>
            <a type="button" @click="handleLogin" class="registerbtn btn text-white">Login</a>
        </div>

        <div class="container signin">
            <p>
                Already have an account?
                <RouterLink to="/register">
                    <a>Sign up</a>.
                </RouterLink>
            </p>
        </div>
    </form>
</template>

<style scoped>
.container {
    padding: 16px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
}

/* Overwrite default styles of hr */
hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
    background-color: orange;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

.registerbtn:hover {
    opacity: 1;
}

/* Add a blue text color to links */
a {
    color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
    background-color: #f1f1f1;
    text-align: center;
}
.hub {
    color: orange;
}
</style>