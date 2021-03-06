import React from 'react';

function Messages() {
  return (
    <div>
      <main role="main" class="container bootdey.com" style={{marginTop:"200px",marginLeft:"200px"}}>
  <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-blue rounded box-shadow">
    <img class="mr-3" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="48" height="48"/>
    <div class="lh-100">
      <h6 class="mb-0 text-white lh-100">John Doe</h6>
      <small>Messages</small>
    </div>
  </div>

  <div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <div class="media text-muted pt-3">
      <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="mr-2 rounded" width="32" height="32"/>
      <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      </p>
    </div>
    <small class="d-block text-right mt-3">
      <a href="#">All messages</a>
    </small>
  </div>
</main>
    </div>
  );
}

export default Messages;
