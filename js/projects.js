let projects = [
		{
		'image' : 'images/portfolio.png',
		'title' : 'Portfolio Website',
		'description' : `Developed custom portfolio website that showcase my 
		 education, skills, projects,experience. The website is developed with HTML5, CSS3, JavaScript, SASS, Bootstrap 
		 and Animate on Scroll library.`,
		'website' : 'https://www.quinonesdesignbuild.com', 
		'github' : 'https://github.com/usaiyed27/portfolio',
		},
		{
		'image' : 'images/facerecognition.png',
		'title' : 'Face Recognition App',
		'description' : `Developed web application that detects face from an image. The application using Clarifai API 
		 to detect face from submitted image url. The web app is built using React, Node, Express, MongoDB.`,
		'website' : 'https://www.quinonesdesignbuild.com', 
		'github' : ''
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

window.onload = mainProjectCard;

function createProjectImage(obj, proDiv){
	const projectImage = document.createElement('img');
	projectImage.className = 'card-img-top';
	projectImage.setAttribute('src', obj.image);
	proDiv.getElementsByClassName('col col-md-8')[0].appendChild(projectImage);
}

function createWebsiteLink(obj,proDiv){
	const webLink = document.createElement('a');
	webLink.className = 'btn link';
	webLink.setAttribute('href', obj.website );
	webLink.setAttribute('target', '_blank');
	webLink.className = 'btn';
	proDiv.querySelector('.card-body').appendChild(webLink);

	const linkIcon= document.createElement('i');
	linkIcon.className = 'fas fa-globe';
	webLink.appendChild(linkIcon);
}

function createGithubLink(obj,proDiv){

	if( obj.github != '' ){
		const gitLink = document.createElement('a');
		gitLink.className = 'btn link';
		gitLink.setAttribute('href', obj.github );
		gitLink.setAttribute('target', '_blank');
		gitLink.className = 'btn';
		proDiv.querySelector('.card-body').appendChild(gitLink);

		const gitIcon= document.createElement('i');
		gitIcon.className = 'fab fa-github';
		gitLink.appendChild(gitIcon);
	}
}

function createProjectDescription(obj,proDiv){
	const projectDescription = document.createElement('p');
	let descriptionText = document.createTextNode(obj.description);
	projectDescription.appendChild(descriptionText);
	projectDescription.className = 'card-text'
	proDiv.querySelector('.card-body').appendChild(projectDescription);
}

function createProjectTitle(obj,proDiv){
	const projectTitle= document.createElement('h3');
	let titleText = document.createTextNode(obj.title);
	projectTitle.appendChild(titleText);
	projectTitle.className = 'card-title';
	proDiv.querySelector('.card-body').appendChild(projectTitle);
}

function createProjectCol1(proDiv) {
	const newColumn1 = document.createElement('div');
	newColumn1.className = 'col col-md-8';
	proDiv.appendChild(newColumn1);
}

function createProjectCol2(proDiv) {
	const newColumn2 = document.createElement('div');
	newColumn2.className = 'col col-md-4 card-body';
	proDiv.appendChild(newColumn2);
}

function createFlipColumnOrder(i,proDiv){
	let col = proDiv.getElementsByClassName('col col-md-8')[0];
	if(i > 0 && (i % 2 != 0)){
		col.classList.add('order-md-2');
		col.classList.add('order-sm-1')
	}
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
function mainProjectCard(){

	for(let i = 0; i< projects.length; i++){
		 let obj = projects[i];
		 createProjectRow(i);
		 let proDiv = document.getElementById('project#' + i);
		 createProjectCol1(proDiv);
		 createProjectCol2(proDiv);
		 createFlipColumnOrder(i,proDiv);
		 createProjectImage(obj,proDiv);
		 createProjectTitle(obj,proDiv);
		 createProjectDescription(obj,proDiv);
		 createWebsiteLink(obj,proDiv);
		 createGithubLink(obj,proDiv);
		//createprojectLinkIcon(obj,i);
		
	};
}