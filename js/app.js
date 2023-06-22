// switching views
const editProfile = () => {
    document.getElementById("edit-view").style.display = "block";
    document.getElementById("display-view").style.display = "none";
};

const updateProfile = () => {
    document.getElementById("edit-view").style.display = "none";
    document.getElementById("display-view").style.display = "block";

    //get input values
    let inputName = document.getElementById("input-name").value
    document.getElementById("user-name").textContent = inputName;
    let inputEmail = document.getElementById("input-email").value
    document.getElementById("user-email").textContent = inputEmail;
    let inputInterests = document.getElementById("input-name").value
    document.getElementById("user-interests").textContent = inputInterests;
};


