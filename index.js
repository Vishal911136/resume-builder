'strict mode'

// ! qualification data
let education = []
const educationFun = () =>{ 
    let subject = document.getElementById('subject').value;
    let intitute = document.getElementById('intitute').value;
    let percentage = document.getElementById('percentage').value;
    let year = document.getElementById('year').value;
    
    if((subject.length && intitute.length && percentage.length && year.length)<1){
        alert("Empty Field")
    }else{
        let obj = {subject: subject, intitute:intitute, percentage:percentage + `${percentage>10? '%' : 'cgpa'}`, year:year};
        education = [...education,obj];
        console.log(education);
        updateFun();
        closefun();
    }
}
const updateFun = () =>{
    let str = '';
    education.map((value,index)=>{
        str += ` <div class="show_education"><span class="print_sub_name"> ${value.subject}  </span>
        <span class="print_intitute_name"> ${value.intitute}  </span> </div>`
        console.warn(value.subject)
    });
    document.getElementById('addEducation').innerHTML = str;
    let resumeStr = '';
    resumeStr += `<table id="tableWidth">
                    <tr>
                        <th class="year">Year</th>    
                        <th class="course">Class / Subject</th>
                        <th class="collage">Collage / School</th>
                        <th class="cgpa">CGPA / Percentage</th>
                    </tr>`
    education.map((value) => {
        resumeStr += `<tr>
                        <td>${value.year}</td>
                        <td>${value.subject}</td>
                        <td>${value.intitute}</td>
                        <td>${value.percentage}</td>
                    </tr>`
    })
    resumeStr += '</table>';
    document.getElementById('showEducationTable').innerHTML = resumeStr;
    console.log(str);
}
// ! End Qualificatioin

// ! Start Experience Function
let experience = [];
let showEx = document.getElementById('showExperience');
const experienceFun = () =>{
    let idExp = document.getElementById('idExperience').value;
    if(idExp.length<1){
        alert('Empty Field');
    }else{
        experience.push(idExp);
        console.log(experience);
        updateExperience();
        closefun();
    }
}
const updateExperience = () =>{
    let exstr ='';
    experience.map((value,index) => {
        exstr += `<div><p>${index + 1} . ${value}</p><div>`;
    })
    showEx.innerHTML = exstr;
    document.getElementById('resumeExperience').innerHTML = exstr;
}
// ! End Experience Function ------

// ! Project Popup
let project = [];    
const projectFun = () =>{
    
    let title = document.getElementById("title").value;
    let githublink = document.getElementById('githublink').value;
    let hostlink = document.getElementById('hostlink').value;
    let aboutProject = document.getElementById('aboutProject').value;

    if((title.length && aboutProject.length)<1){
        alert("Empty Field");
    }else{
        let obj = {title:title, githublink:githublink, hostlink:hostlink, aboutProject:aboutProject};
        project = [...project,obj];
        console.log(project);
        let pjstr = '';
        project.map((value,index) =>
            pjstr += `<p style="project_title">${index + 1}. ${value.title}
                <a target="_blank" class="host_link" href="${value.hostlink}">(Host Link)</a>
                <a target="_blank" class="host_link" href="${value.githublink}">(GitHub)</a>
                </p>
                <p class="project_description">${value.aboutProject}</p>`
        )
        document.getElementById('showProjects').innerHTML = pjstr;
        document.getElementById('resumeProjects').innerHTML = pjstr;
        // updatePoject();
        closefun();
    }
}
// ! End Project Popup

// ! Skills
let sklarr = [];
const addSkills = () =>{
    let skills = document.getElementById('skills').value;
    if(skills.length<1){
        alert('Please Enter Skills');
    }else{
        let sklstr = '';
        sklarr.push(skills);
        sklarr.map((value)=>{
            sklstr += `<button>${value}</button>`
        })
        document.getElementById('showskills').innerHTML = sklstr;
        document.getElementById('resumeSkills').innerHTML = sklstr;
        closefun();
    }
}
// ! End Skills code


// ! Generate Resume
const generateResume = () =>{
    let uname = document.getElementById('uname').value;
    let profession = document.getElementById('profession').value;
    let moNumber = document.getElementById('moNumber').value;
    let remail = document.getElementById('email').value;
    let linkedInlink = document.getElementById('linkedInlink').value;
    let githubId = document.getElementById('githubId').value;
    let address = document.getElementById('address').value;

    if((uname.length && profession.length && moNumber.length && remail.length && address.length)<1){
        alert("enter require* field");
    }else{
    // css 
        // console.log(uname,profession,moNumber,email,linkedInlink,githubId,address);
        document.getElementById('showResume').removeAttribute('id');
        let hideHeading = document.getElementById('hideHeading');
        hideHeading.style.display = "none";
        let hidepage = document.getElementById('hidePage');
        hidepage.style.display="none";
        
        if((linkedInlink.length && githubId.length)<1){
            document.getElementById('hideGit').style.display="none";
            document.getElementById('hideLinkedIn').style.display="none";
        }
        document.getElementById('rName').innerText = uname;
        document.getElementById('rEmail').innerText = remail;
        document.getElementById('rNumber').innerText = moNumber;
        document.getElementById('rLinkedIn').innerText = linkedInlink;
        document.getElementById('rgitLink').innerText = githubId;
        document.getElementById('rprofession').innerText = profession;
        document.getElementById('rAddress').innerText = address;
    }
}


// ! print resume
const printResume = () =>{
    let copyResume = document.getElementById('resumePage').innerHTML;
    document.body.innerHTML = copyResume;
    // document.getElementById('tableWidth').style.width = '95vw';
    window.print();
}




// ! pop up 
let edpopup = document.getElementById('educationPopup');
let expopup = document.getElementById('experiencePopup');
let projectpop = document.getElementById('projectPopup');
let skillspopup = document.getElementById('skillsPopup');
const educationPopup = () =>{
    edpopup.style.visibility = "visible"
}
const experiencePopup = () =>{
    expopup.style.visibility = "visible";
}
const projectPopup = () =>{
    projectpop.style.visibility = "visible"
}
const skillsPopup = () =>{
    skillspopup.style.visibility = "visible"
}
const closefun = () =>{
    edpopup.style.visibility ="hidden";
    expopup.style.visibility ="hidden";
    projectpop.style.visibility ="hidden"
    subject.value="";
    intitute.value="";
    percentage.value='';

    year.value='';

    document.getElementById('title').value='';
    document.getElementById('githublink').value='';
    document.getElementById('hostlink').value='';
    document.getElementById('aboutProject').value='';

    skills.value=""
    document.getElementById('idExperience').value ="";
}
