import React from 'react';

function Userprofile() {
  return (
    <>

<div claas="container">
    <div claas="row profile">
		<div claas="col-md-3">
			<div claas="profile-sidebar">
				
				<div claas="profile-userpic">
					<img src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" claas="img-responsive" alt=""/>
				</div>
				
				<div claas="profile-usertitle">
					<div claas="profile-usertitle-name">
						Jason Davis
					</div>
					<div claas="profile-usertitle-job">
						Developer
					</div>
				</div>
				
				<div claas="profile-userbuttons">
					<button type="button" claas="btn btn-success btn-sm">Follow</button>
					<button type="button" claas="btn btn-danger btn-sm">Message</button>
				</div>
				
				<div claas="profile-usermenu">
					<ul claas="nav">
						<li claas="active">
							<a href="#">
							<i claas="glyphicon glyphicon-home"></i>
							Overview </a>
						</li>
						<li>
							<a href="https://codepen.io/jasondavis/pen/jVRwaG?editors=1000">
							<i claas="glyphicon glyphicon-user"></i>
							Account Settings </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i claas="glyphicon glyphicon-ok"></i>
							Tasks </a>
						</li>
						<li>
							<a href="#">
							<i claas="glyphicon glyphicon-flag"></i>
							Help </a>
						</li>
					</ul>
				</div>
				
			   
           <div claas="portlet light bordered">
                                                
                                                <div claas="row list-separated profile-stat">
                                                    <div claas="col-md-4 col-sm-4 col-xs-6">
                                                        <div claas="uppercase profile-stat-title"> 37 </div>
                                                        <div claas="uppercase profile-stat-text"> Projects </div>
                                                    </div>
                                                    <div claas="col-md-4 col-sm-4 col-xs-6">
                                                        <div claas="uppercase profile-stat-title"> 51 </div>
                                                        <div claas="uppercase profile-stat-text"> Tasks </div>
                                                    </div>
                                                    <div claas="col-md-4 col-sm-4 col-xs-6">
                                                        <div claas="uppercase profile-stat-title"> 61 </div>
                                                        <div claas="uppercase profile-stat-text"> Uploads </div>
                                                    </div>
                                                </div>
                                              
                                                 <div>
                                                    <h4 claas="profile-desc-title">About Jason Davis</h4>
                                                    <span claas="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                                    <div claas="margin-top-20 profile-desc-link">
                                                        <i claas="fa fa-globe"></i>
                                                        <a href="https://www.apollowebstudio.com">apollowebstudio.com</a>
                                                    </div>
                                                    <div claas="margin-top-20 profile-desc-link">
                                                        <i claas="fa fa-twitter"></i>
                                                        <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                                                    </div>
                                                    <div claas="margin-top-20 profile-desc-link">
                                                        <i claas="fa fa-facebook"></i>
                                                        <a href="https://www.facebook.com/">JasonDavisFL</a>
 </div></div></div>                   
                                           
        
        
			</div>
		</div>
		<div claas="col-md-9">
            <div claas="profile-content">
			   Some user related content goes here...
            </div>
		</div>
	</div>
</div>

    </>
  );
}

export default Userprofile;
