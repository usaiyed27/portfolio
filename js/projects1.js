let projectsArrays = [
		{
		'image' : 'images/leone.jpg',	
		'title' : 'Random Quote Generator',
		'description' : `Random quote generator is built in React. The app uses third party
		API to fetch the quote each time the generate button is clicked.`,
		'website' : 'https://codepen.io/urdeveloper/full/XWMxzOp', 
		'github' : ''
		},
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
		'website' : 'https://usaiyed27.github.io/face-recognition-app/', 
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

let mainProject = () => {
	createRow();
	for(let project in projectsArrays){
		createProjectCol(project);
		createProjectImage(project);
	}
}


window.onload = mainProject;


function createRow(){
	//.log(projectsArray[project], project)
	const newRow = document.createElement('div');
	newRow.className = 'row projectcard';
	newRow.setAttribute('id', 'row')
	document.getElementById('project-container').appendChild(newRow);
}

function createProjectCol(i) {
	const newColumn = document.createElement('div');
	newColumn.className = 'col-12 col-lg-6';
	let colID = 'column' + i;

	$(newColumn).attr({
		id : colID,
	});
    
	document.getElementById('row').appendChild(newColumn);
}

const createProjectImage = (obj) => {
	const projectImage = document.createElement('img');
	projectImage.className = 'card-img';

	try{
	   if(obj.image){
	   	projectImage.setAttribute('src', obj.image);	
	   }	
	}

	catch(err){
		console.log(err);
	}
	
	console.log(obj.image)
    document.getElementById('column' + obj).appendChild(projectImage);
}