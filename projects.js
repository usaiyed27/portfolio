// let projects = {
// 		Project1 : {
// 		'title' : 'Quinones Build'
// 		},
// 		Project2 : {
// 		'title' : 'La Casa'
// 		// 'description' : 'adhaliahvrai',
// 		// 'website' : 'https://www.quinonesdesignbuild.com', 
// 		// 'gitHub' : ''
// 		}
// }


// window.onload = mainProjectCard;


// // function createProjectImage(){
// // 	const projectImage = document.createElement('img');
// // 	projectImage.setAttribute('src', projects[0].image);
// // 	document.getElementsByClassName('card')[0].appendChild(projectImage);
// // }

// // function createprojectLinkIcon(){
// // 	const linkIcon= document.createElement('i');
// // 	linkIcon.className = 'fas fa-globe';
// // 	document.getElementsByClassName('link')[0].appendChild(linkIcon);
// // }
// // function createWebsiteLink(){
// // 	const webLink = document.createElement('a');
// // 	webLink.className = 'btn link';
// // 	webLink.setAttribute('href', projects[0].website );
// // 	webLink.setAttribute('target', '_blank');
// // 	document.getElementsByClassName('card')[0].appendChild(webLink);
// // }

// function createProjectTitle(){
// 	const projectTitle= document.createElement('h5');
// 	let titleText = document.createTextNode(projects[key].title);
// 	projectTitle.appendChild(titleText);
// 	document.getElementsByClassName('card')[0].appendChild(projectTitle);
// }

// // function createProjectDescription(){
// // 	const projectDescription = document.createElement('p');
// // 	let descriptionText = document.createTextNode(projects[0].description);
// // 	projectDescription.appendChild(descriptionText);
// // 	document.getElementsByClassName('card')[0].appendChild(projectDescription);
// // }

// function createProjectCol() {
// 	const newCol = document.createElement('div');
// 	newCol.className = 'col-6 card';
// 	// let newText = document.createTextNode("It's Working");
// 	// newCol.appendChild(newText);
// 	document.getElementById('project-row').appendChild(newCol);
// }

// function mainProjectCard(projects){
// 	for(let x in projects){
// 		createProjectCol();
// 		//createProjectImage();
// 		 createProjectTitle(x);
// 		// createProjectDescription();
// 		// createWebsiteLink();
// 		// createprojectLinkIcon();
// 		console.log(x);
// 	};
// }