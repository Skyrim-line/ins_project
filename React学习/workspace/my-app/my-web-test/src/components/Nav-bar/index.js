import React from "react";
import "./index.scss";

function NavBar(props) {
  return (
    // nav 是 H5 引入的新标签，专门用来表示导航条
    // navbar 是 Bootstrap 的导航条组件
    // navbar-default 是 Bootstrap 导航条组件的默认样式
    // navbar-fixed-top 是 Bootstrap 导航条组件的固定在顶部的样式
    // container-fluid 是 Bootstrap 的容器组件，表示宽度为 100% 的容器
    // navbar-header 是 Bootstrap 导航条组件的头部样式
    // navbar-brand 是 Bootstrap 导航条组件的品牌样式
    // navbar-toggle 是 Bootstrap 导航条组件的切换按钮样式
    // collapsed 是 Bootstrap 用来支持响应式的样式，在移动端访问时，导航条会自动折叠
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              {/* <input type="text" class="form-control" placeholder="Search"> */}
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;