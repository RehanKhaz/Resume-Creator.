const GeneratorBtn = document.querySelector("#Generator")
const GeneratedResume = document.querySelector("#generated-resume")
const MainImage = document.querySelector("#generated-img")
const ImgInput = document.querySelector("#img-input input");
const Name = document.querySelector("#generated-resume #Name");
const Email = document.querySelector("#generated-resume #Resume-Container #left #Email")
const Phone = document.querySelector("#generated-resume #Resume-Container #left #Phone")
const Address = document.querySelector("#generated-resume #Resume-Container #left #Address")
const Gender = document.querySelector("#generated-resume #Resume-Container #left #Gender")
const Education= document.querySelector("#generated-resume #Resume-Container #right #Education")
const Skills = document.querySelector("#generated-resume #Resume-Container #right #Skills")
const DownloadBtn = document.querySelector("#generated-resume #Resume-Container #Main-btn #Downlaod-btn")
const PrintBtn = document.querySelector("#generated-resume #Resume-Container #Main-btn #Print-btn")
const Experience= document.querySelector("#generated-resume #Resume-Container #right #Experience")
const InputName = document.querySelector("#container #personal-Information #input-name")
const InputEmail = document.querySelector("#container #personal-Information #input-email")
const InputAddress = document.querySelector("#container #personal-Information #input-address")
const InputPhone = document.querySelector("#container #personal-Information #input-contact")
const InputMale = document.querySelector("#container  #male")
const InputFemale = document.querySelector("#container #female")
const EducationContent = document.querySelector("#Education-Content")
const SkillsContent = document.querySelector("#Skills-Content")
const ExperienceContent = document.querySelector("#Experience-Content")

ImgInput.addEventListener("change", (event) => {
    const file = event.target.files[0]; 
    if (file) {
        const fileURL = URL.createObjectURL(file);
        MainImage.src = fileURL; 
    }

    GeneratorBtn.addEventListener("click", () => {
        if (GeneratedResume.classList.contains("hidden")) {
            GeneratedResume.classList.remove("hidden")
            GeneratedResume.classList.add("flex");
    
                GeneratorBtn.innerText = "Edit your Resume."
                Name.innerHTML = InputName.value;
                Email.innerHTML = InputEmail.value;
                Phone.innerHTML = InputPhone.value;
                Address.innerHTML = InputAddress.value;
                
                checkGender();
                Education.innerHTML = EducationContent.value;
                Experience.innerHTML = ExperienceContent.value;
                Skills.innerHTML = SkillsContent.value;
        }
       else {
            GeneratedResume.classList.add("hidden")
       GeneratedResume.classList.remove("flex")
            GeneratorBtn.innerHTML = "Create your Resume"
        };
    })
});


function checkGender(){
    if(InputMale.checked){
        Gender.innerHTML = "Male"
    }else if(InputFemale.checked){
        Gender.innerHTML = "Female"
    }
}
