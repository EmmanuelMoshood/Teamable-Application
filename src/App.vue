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
        <input type="text" id="input-name" v-model="name">
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
                name: "Anna Smith",
                email: "anna.smith@example.com",
                interests: "coding",
                isEditMode: false
            }
        },
        methods: {
            // switching views
            editProfile() {
               this.isEditMode = true
            },
            updateProfile() {
                this.isEditMode = false
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