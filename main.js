/*
@author Rhys Howell

Hey! Thanks for checking out my code.
Shoot me an email! rhysh@live.com
*/


// tracks mouse hovering in projects
var hover_count = 0;

$(document).ready(function() {
	console.log("Document loaded.");

	// hover on one of my projects
	$('.project_pic').hover(function(event) {
		if(hover_count % 2 == 0) {

			var project_id = $(event.target).attr('id');

			var project_desc = '';

			if(project_id == 'amish') {
				project_desc = 'Amish Hero: Collect your harvest.';
			}
			else if(project_id == 'stick') {
				project_desc = 'Stick <span style="color:red;">G</span><span style="color:blue;">G</span>: An online multiplayer shooting game.';
			}
			else if(project_id == 'wrist') {
				project_desc = 'Wrist CTRL: A pebble watch interface enabling web page controls through your watch.';
			}

			$('#project_desc').html(project_desc);
		}
		else {
			$('#project_desc').html('');
		}

		hover_count ++;
	});

});