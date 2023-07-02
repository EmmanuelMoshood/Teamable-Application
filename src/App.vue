<template>
    
    <!-- display view -->
    <div v-show="!isEditMode" class="container" id="display-view">
        <h1>User profile</h1>
        <img :src="image" alt="a dog's profile picture">        
        <span> Name: <b id="user-name">{{ name }}</b></span>
        <hr> 
        <span> Email: <b id="user-email">{{ email }}</b></span>
        <hr> 
        <span> Interests: <b id="user-interests">{{ interests }}</b></span>
        <hr>
        <button @click="editProfile">Edit Profile</button>
    </div>

    <!-- edit view -->
    <div v-show="isEditMode" class="container" id="edit-view">
        <h1>User profile</h1>
        <img :src="image" alt="a dog's profile picture">
        <span> Name: </span>
        src="image" why is the colon necessary
        <hr> 
        <span> Email: </span>
        <input type="text" id="input-email" v-model="email">
        <hr> 
        <span> Interests: </span>
        <input type="text" id="input-interests" v-model="interests">
        <hr>
        <button @click="updateProfile">Save Profile</button>
    </div>

</template>





<script>
    import image from "./profile.jpeg"

    export default {
        name: "App",
        data() {
            return {
                image: image,
                name: "",
                email: "",
                interests: "",
                isEditMode: false
            }
        },
        async created(){
            let userData = await this.fetchUserProfile();
            this.name = userData.name;
            this.email = userData.email;
            this.interests = userData.interests;
        },
        methods: {
            // switching views
            editProfile() {
               this.isEditMode = true
            },
            async updateProfile() {
                this.isEditMode = false

                const payload = {
                    name: this.name,
                    email: this.email,
                    interests: this.interests  
                }
                let response = await this.updateUserProfile(payload);
                console.log(response)
            },
            async fetchUserProfile() {
                return await (await fetch('get-profile')).json()
            },
            async updateUserProfile(payload) {
                const res = await fetch('update-profile', {
                    method: "POST",
                    body: JSON.stringify(payload)
                })
                return await res.json()
            }
        }
    }
</script>






<style>
    

.container{
    width: 40%;
    margin: auto;
}

img{
    height: 270px;
    width: 320px;
    display: block;
    margin-bottom: 20px;
}

hr{
    width: 400px;
    margin: 25px 0;
}

button {
    width: 160px;
    font-size: 15px;
    height: 45px;
    border-radius: 5px;
}

button:hover {
    cursor: pointer;
}

input {
    width: 200px;
    font-size: 15px;
    padding: 10px;
}


</style>