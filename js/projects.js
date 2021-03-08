let projectsArray = [
		{
		'image' : 'images/portfolio.png',
		'title' : 'Portfolio Website',
		'description' : `Developed custom portfolio website that showcase my 
		 education, skills, projects,experience. The website is developed with HTML5, CSS3, JavaScript, SASS, Bootstrap 
		 and Animate on Scroll library.`,
		'website' : '', 
		'github' : 'https://github.com/usaiyed27/portfolio',
		},
		{
		'image' : 'images/facerecognition.png',
		'title' : 'Face Recognition App',
		'description' : `Developed web application that detects face from an image. The application using Clarifai API 
		 to detect face from submitted image url. The web app is built using React, Node, Express, PostgresSQL.`,
		'website' : '', 
		'github' : 'https://github.com/usaiyed27/face-recognition-app'
		},
		{
		'image' : 'images/quinones.png',	
		'title' : 'Quinones Design Build',
		'description' : `Custom wordpress website developed for Spectrum Technologies client.
		 I assisted in developing and designing internal pages of the sites using front-end technologes and plugins like
		 elementor page builder and gravity form.`,
		'website' : 'https://www.quinonesdesignbuild.com', 
		'github' : ''
		},
		{
		'image' : 'images/lacasa-donate.png',	
		'title' : 'La Casa',
		'description' : `Custom wordpress website developed for Spectrum Technologies client.
		 I assisted in developing and designing internal pages of the sites using front-end technologes and plugins like
		 visual composer page builder and gravity form.`,
		'website' : 'https://www.lacasainc.org', 
		'github' : ''
		}

];

let mainProjectCard = () => {

	for(let project in projectsArray){
		 let obj = projectsArray[project];
		 createProjectRow(project);
		 let proDiv = document.getElementById('project#' + project);
		 createProjectCol1(project, proDiv);
		 createProjectCol2(proDiv);
		 createProjectImage(obj,proDiv);
		 createProjectTitle(obj,proDiv);
		 createProjectDescription(obj,proDiv);
		 createWebsiteLink(obj,proDiv);
		 createGithubLink(obj,proDiv);
		
	};
}

window.onload = mainProjectCard;

const createProjectImage = (obj, proDiv) => {
	const projectImage = document.createElement('img');
	projectImage.className = 'card-img';
	projectImage.setAttribute('src', obj.image);
	proDiv.getElementsByClassName('col-12 col-lg-8')[0].appendChild(projectImage);
}

const createWebsiteLink = (obj,proDiv) => {
	if(obj.website != ''){
		const webLink = document.createElement('a');
			webLink.className = 'btn link';
			webLink.setAttribute('href', obj.website );
			webLink.setAttribute('target', '_blank');
			webLink.className = 'btn';
			proDiv.querySelector('.project-details').appendChild(webLink);

			const linkIcon= document.createElement('i');
			linkIcon.className = 'fas fa-globe';
			webLink.appendChild(linkIcon);
	}
}

const createGithubLink = (obj,proDiv) => {

	if( obj.github != '' ){
		const gitLink = document.createElement('a');
		gitLink.className = 'btn link';
		gitLink.setAttribute('href', obj.github );
		gitLink.setAttribute('target', '_blank');
		gitLink.className = 'btn';
		proDiv.querySelector('.project-details').appendChild(gitLink);

		const gitIcon= document.createElement('i');
		gitIcon.className = 'fab fa-github';
		gitLink.appendChild(gitIcon);
	}
}

const createProjectDescription = (obj,proDiv) => {
	const projectDescription = document.createElement('p');
	let descriptionText = document.createTextNode(obj.description);
	projectDescription.appendChild(descriptionText);
	projectDescription.className = 'card-text'
	proDiv.querySelector('.project-details').appendChild(projectDescription);
}

function createProjectTitle(obj,proDiv){
	const projectTitle= document.createElement('h3');
	let titleText = document.createTextNode(obj.title);
	projectTitle.appendChild(titleText);
	projectTitle.className = 'card-title';
	proDiv.querySelector('.project-details').appendChild(projectTitle);
}

function createProjectCol1(i, proDiv) {
	const newColumn1 = document.createElement('div');
	newColumn1.className = 'col-12 col-lg-8';

	if(i > 0 && (i % 2 !== 0)){
		newColumn1.classList.add('order-sm-1');
		newColumn1.classList.add('order-lg-2');
	}
	proDiv.appendChild(newColumn1);
}

function createProjectCol2(proDiv) {
	const newColumn2 = document.createElement('div');
	newColumn2.className = 'col-12 col-lg-4 order-sm-2 order-lg-1 project-details';
	proDiv.appendChild(newColumn2);
}

function createProjectRow(i){
	const newRow = document.createElement('div');
	newRow.className = 'row projectcard';
	let project = 'project#' + i;
	
	$(newRow).attr({
		 id : project,
		'data-aos' : 'fade-up',
		'data-aos-easing' : 'linear'
	});

	document.getElementById('project-container').appendChild(newRow);
}

