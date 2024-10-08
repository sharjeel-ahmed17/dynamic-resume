var resumeForm = document.getElementById("resume-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var profilePicUrlInput = document.getElementById("profilePicUrl");
var profilePicUploadInput = document.getElementById("profilePicUpload");
var educationInput = document.getElementById("education");
var workExperienceInput = document.getElementById("workExperience");
var skillsInput = document.getElementById("skills");
var resName = document.getElementById("res-name");
var resEmail = document.getElementById("res-email");
var resPhone = document.getElementById("res-phone");
var resProfilePic = document.getElementById("res-profile-pic");
var resEducationList = document.getElementById("res-education-list");
var resWorkList = document.getElementById("res-work-list");
var resSkillsList = document.getElementById("res-skills-list");
var resumeContainer = document.querySelector(".resume-container");
function clearList(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nameInput.value &&
        emailInput.value &&
        phoneInput.value &&
        educationInput.value &&
        workExperienceInput.value &&
        skillsInput.value) {
        resName.textContent = nameInput.value;
        resEmail.textContent = "Email: ".concat(emailInput.value);
        resPhone.textContent = "Phone: ".concat(phoneInput.value);
        if (profilePicUrlInput.value) {
            resProfilePic.src = profilePicUrlInput.value;
            resProfilePic.style.display = "block";
        }
        else if (profilePicUploadInput.files && profilePicUploadInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                if ((_a = event.target) === null || _a === void 0 ? void 0 : _a.result) {
                    resProfilePic.src = event.target.result;
                    resProfilePic.style.display = "block";
                }
            };
            reader.readAsDataURL(profilePicUploadInput.files[0]);
        }
        else {
            resProfilePic.style.display = "none";
        }
        clearList(resEducationList);
        var educationArray = educationInput.value
            .split(",")
            .map(function (item) { return item.trim(); });
        educationArray.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = item;
            resEducationList.appendChild(li);
        });
        clearList(resWorkList);
        var workArray = workExperienceInput.value
            .split(",")
            .map(function (item) { return item.trim(); });
        workArray.forEach(function (item) {
            var li = document.createElement("li");
            li.textContent = item;
            resWorkList.appendChild(li);
        });
        clearList(resSkillsList);
        var skillsArray = skillsInput.value
            .split(",")
            .map(function (skill) { return skill.trim(); });
        skillsArray.forEach(function (skill) {
            var li = document.createElement("li");
            li.textContent = skill;
            resSkillsList.appendChild(li);
        });
        resumeContainer.style.display = "block";
    }
    else {
        alert("Please fill in all required fields.");
    }
});
