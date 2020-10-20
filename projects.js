let projects = [
		{
		'image' : 'quinones.png',
		'title' : 'Quinones Build',
		'description' : 'Quinones Build Description',
		'website' : 'https://www.quinonesdesignbuild.com', 
		'gitHub' : ''
		},
		{
		'image' : 'lacasa.png',	
		'title' : 'La Casa',
		'description' : 'La Casa Description',
		'website' : 'https://www.quinonesdesignbuild.com', 
		'gitHub' : ''
		},
		{
		'image' : 'lacasa.png',	
		'title' : 'La Casa',
		'description' : 'La Casa Description',
		'website' : 'https://www.quinonesdesignbuild.com', 
		'gitHub' : ''
		}

];

window.onload = mainProjectCard;

function createProjectImage(obj, proDiv){
	const projectImage = document.createElement('img');
	projectImage.setAttribute('src', obj.image);
	proDiv.appendChild(projectImage);
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

function createProjectDescription(obj,proDiv){
	const projectDescription = document.createElement('p');
	let descriptionText = document.createTextNode(obj.description);
	projectDescription.appendChild(descriptionText);
	projectDescription.className = 'card-text'
	proDiv.querySelector('.card-body').appendChild(projectDescription);
}

function createProjectTitle(obj,proDiv){
	const projectTitle= document.createElement('h5');
	let titleText = document.createTextNode(obj.title);
	projectTitle.appendChild(titleText);
	projectTitle.className = 'card-title';
	proDiv.querySelector('.card-body').appendChild(projectTitle);
}


function createProjectCol(i) {
	const newCol = document.createElement('div');
	newCol.className = 'col-6';
	document.getElementById('project-row').appendChild(newCol);

	const newCard = document.createElement('div');
	newCard.className = 'card';
	let project = 'project#' + i;
	
	$(newCard).attr({
		 id : project,
		'data-aos' : 'fade-up',
		'data-aos-easing' : 'linear'
	});

	newCol.appendChild(newCard);
}

function createProjectCardBody(proDiv){
	const newCardBody = document.createElement('div');
	newCardBody.className = 'card-body';
	proDiv.appendChild(newCardBody);
}

function mainProjectCard(){

	for(let i = 0; i< projects.length; i++){
		 let obj = projects[i];
		createProjectCol(i);
		let proDiv = document.getElementById('project#' + i);
		createProjectImage(obj,proDiv);
		createProjectCardBody(proDiv);
		createProjectTitle(obj,proDiv);
		createProjectDescription(obj,proDiv);
		createWebsiteLink(obj,proDiv);
		// createprojectLinkIcon(obj,i);
		console.log(obj);
	};
}