
import React from 'react';


function Messages() {
  return (
    <div>
      <main role="main" cla="container bootdey.com" style={{marginTop:"200px",marginLeft:"300px",height:"100vh",width:"1000px"}}>
  <div style={{backgroundColor:"#aaaaaa"}} cla="d-flex align-items-center p-3 my-3 text-white-50 bg-blue rounded box-shadow">
    <img cla="mr-3" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="48" height="48"/>
    <div cla="lh-100">
      <h6 cla="mb-0 text-white lh-100"> Ahmed Bahri </h6>
      <small>Notifications </small>
    </div>
  </div>

  <div cla="my-3 p-3 bg-white rounded box-shadow">
    <h6 cla="border-bottom border-gray pb-2 mb-0"> Recents </h6>
    <div cla="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" cla="mr-2 rounded" width="32" height="32"/>
      <p cla="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong cla="d-block text-gray-dark"> username </strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div cla="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" cla="mr-2 rounded" width="32" height="32"/>
      <p cla="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong cla="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div cla="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" cla="mr-2 rounded" width="32" height="32"/>
      <p cla="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong cla="d-block text-gray-dark">username </strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div cla="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" cla="mr-2 rounded" width="32" height="32"/>
      <p cla="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong cla="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <small cla="d-block text-right mt-3">
      <a href="#">All Notifications </a>
    </small>
  </div>
</main>
    </div>
  );
}

export default Messages;
