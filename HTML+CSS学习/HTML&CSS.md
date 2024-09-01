# HTML

## URL

- schema :  相当于url的类型，通常用来表示访问协议，HTTP 

- userinfo ： 访问资源的用户信息

- host ： 资源所在主机，可选

- port： 可选，不填则使用协议默认端口

- path ： 资源所在路径

- query ： 网页传参

- Fragment： 指定资源中的某个片段，网页中的锚，可选

### URL常见形式

后段服务连接数据库，有赖于数据库的服务器地址、端口、用户、密码等信息，这些信息可以组成一个URL，所谓的数据库连接串：

- HTTP. 
- HTTPS
- FTP
- Mailto / Tel

举例：认识网页报错的代码对应的东西和内容

## HTTP Methods

- GET   请求指定页面信息，返回实体主体
- HEAD      返回的响应 中没有具体的内容，用于获取报头
- POST    （GET和POST安全系数不一样）post更加安全一些，数据被包含在请求体中
- PUT    客户端向服务器传送的数据取代指定饿文档内容
- DELETE
- OPTIONS    描述目标资源的通信选项
- TRACE
- PATCH

## ES6常用开发函数

**Array**

**Includes**

判断当前的array有没有包括item

**Map**

将array中的每一个item都根据callback变成另一个新的item 

例子：

```js
arr = [3,4,9,18];
arr.map((item)=>item*2); 
arr.map((item)=>'' + item); //将数字变成字符串
```

**filter**

作用将arr里指定不和要求的item去除，返回一个新的array

![屏幕截图 2024-08-31 110300](H:\ins_project\HTML+CSS学习\note-pic\屏幕截图 2024-08-31 110300.png)

**object**

和python的dict一样，有key和values

**in operator**

**keys**

**values**

## 浏览器输入URL地址后会发生什么?

- URL解析     输入的URL地址解析
- DNS解析： 解析IP地址发送给DNS域名服务器
- TCP连接建立 ： **三次握手**
- 浏览器发送HTTP请求： 使用（GET、POST）
- 服务器响应： 响应状态码，响应头，响应体
- 响应处理： 根据响应头中的信息判断响应内容的类型，并将响应体中的数据进行解析和处理
- **渲染页面**： 收到响应后，浏览器会解析HTML，根据CSS和JACASCRIPT等资源进行页面的渲染和呈现
- **下载资源：** 解析HTML时，如果发现引用啦其他资源则4次挥手
- **执行脚步：**如果页面包含<u>Javascript</u>代码，则会执行这些脚本，实现交互、动态效果和数据处理等功能
- **页面展示：**浏览器解析后的页面内容进行布局、绘制最终展示给用户

## Web应用架构

![image-20230715115012607](/Users/skyrim/Library/Application Support/typora-user-images/image-20230715115012607.png)

- 用到**Javascript,python,java**

- Requirement Analysis : 需求分析，确定，产品经理来确定
- Planning : 确定开发涉及的开发人员
- Software design :
- Software development : 
  - Waterfulll mode : 逐步完成开发，开发周期长
  - Agile Model : 针对特定需求进行开发迭代，开发周期短 （澳洲大部分公司用Agilr Model）**<u>自行阅读相关文章</u>**
- Testing : 手动和自动测试
- Deployment :  应用的过程，手动或者CSCD

## HTML各类标签用途

### div\span\p\pre\code\

（用于文章的段落，代码，分割不同的块）

#### **\div\:**     

 The `<div>` tag defines a division or a section in an HTML document.

The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

The `<div>` tag is easily styled by using the class or id attribute.

**Example:**

<div>This is some text in a div element.</div>

#### **\span\\** :

（span不同于div是 div是block级别的元素，span是inline级别的元素。

**Example:**

<p>My mother has <span style="color:blue">blue</span> eyes.</p>

#### **\p\\**  : 

（定义一个段落经常用到）

Browsers automatically add a single blank line before and after each `<p>` element.

**Example** :

<p>This is some text in a paragraph.</p> 

#### **\pre\\**:

Text in a `<pre>` element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code. （看举例）

**Example:**

<pre> Text in a pre element is displayed in a fixed-width font, and it preserves both      spaces and line breaks </pre>

####  **\code\\**:

（插入代码）

**Example:**

<p>The HTML <code>button</code> tag defines a clickable button.</p>  <p>The CSS <code>background-color</code> property defines the background color of an element.</p>

### \header\main\section\nav\article\aside\footer\\address\  

（用于定义文章结构，部分、整体，地址，旁边内容等东西）

#### **\header\\**:

**Note:** You can have several `<header>` elements in one HTML document. However, `<header>` cannot be placed within a <footer>, <address> or another `<header>`element. （标题名称，不能被footer和address和其他有标题元素的东西替代）

**Example:**

<article>
 <header>
  <h1>A heading here</h1>
  <p>Posted by John Doe</p>
  <p>Some additional information here</p>
 </header>
 <p>Lorem Ipsum dolor set amet....</p>
</article>

#### **\main\\:**

（main只能被用于一个文章中的一段）

**Example:**

<main>   <h1>Most Popular Browsers</h1>   <p>Chrome, Firefox, and Edge are the most used browsers today.</p>    <article>     <h2>Google Chrome</h2>     <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>   </article>    <article>     <h2>Mozilla Firefox</h2>     <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>   </article>    <article>     <h2>Microsoft Edge</h2>     <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>   </article> </main>

#### **\section\\:**

（定义一个文件中的不同部分的内容）

**Example:**

Here are two sections below:

<section>
<h2>WWF History</h2>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>


<section>
<h2>WWF's Symbol</h2>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>

#### **\nav\\:**

（定义一组链接导航）

**Example:**

<nav>
 <a href="/html/">HTML</a> |
 <a href="/css/">CSS</a> |
 <a href="/js/">JavaScript</a> |
 <a href="/python/">Python</a>
</nav>

#### **\article\\:**

（一段独立的段落）

An article should make sense on its own and it should be possible to distribute it **independently from the rest of the site.**

**Example:**

<article> <h2>Google Chrome</h2> <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p> </article>  <article> <h2>Mozilla Firefox</h2> <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p> </article>  <article> <h2>Microsoft Edge</h2> <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p> </article>

#### **\aside\\:**

（将一段文字放置在文章段落的一侧）

**Note:** The `<aside>` element does not render as anything special in a browser. However, you can use CSS to style the `<aside> `element (see example below).

**Example:**

<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>  <aside> <h4>Epcot Center</h4> <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p> </aside>

#### **\footer\\:**

（给一个文件或者一部分定义footer）

A `<footer>` element typically **contains:**

- authorship information
- copyright information
- contact information
- sitemap
- back to top links
- related documents

**Example:**

<footer>
 <p>Author: Hege Refsnes</p>
 <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>

#### **\address\\:**

The text in the `<address>` element usually renders in *italic,* and browsers will always add a line break before and after the `<address>` element.  （地址信息都是斜体的）

**Example:**

<address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> 
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>



### \em\strong\sub\sup\abbr\mark\cite\time

 （主要用于文章中的特殊上下标和引用、时间、符号、文本加粗等细节）

####   **\em\\:**

（给文字斜体）

**Example:**

<p>You <em>have</em> to hurry up!</p>  <p>We <em>cannot</em> live like this.</p>

####  **\strong\\:**

（加粗文字）

**Example:**

<strong>This text is important!</strong>

####  **\sub\\:**

**Tip:** Use tag to define superscripted text. （给一个文字加下标）

**Example:**

<p>This text contains <sub>subscript</sub> text.</p>

 **\sup\\:**

The `<sup>` tag defines superscript text. Superscript text appears half a character **above the normal line**, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, l**ike WWW[1]. ** （相当于给一个文字加上标）

**Example:**

<p>This text contains <sup>superscript</sup> text.</p>



####  **\abbr\\:**

**Tip:** Use the global `title` attribute to show the description for the abbreviation/acronym when you **mouse over the element.**

**Example:**

<p><dfn><abbr title="Cascading Style Sheets">CSS</abbr> </dfn> is a language that describes the style of an HTML document.</p>

####  **\mark\\:**

（被marked 的元素都是高亮的）

**Example:**

<p>Do not forget to buy <mark>milk</mark> today.</p>

####  **\cite\\:**

（引用一个人名，通常是斜体的）

The text in the `<cite>` element **usually renders in *italic*.**

**Example:**

<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>

####  **\time\\:**

（定义一个确切的时间）

**Example:**

<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>  <p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>



### \ul\ol\li\dl\dd\dt\

（主要用于列记事本的东西）

######  

#### **\ul\\:**

The `<ul>` tag defines an **unordered (bulleted) list.**

Use the `<ul>` tag together with the `<li>`tag to create unordered lists.

**Example:**

<ul>
 <li>Coffee</li>
 <li>Tea</li>
 <li>Milk</li>
</ul>

#### **\ol\\:**

The `<ol>` tag defines **an ordered list.** An ordered list can be numerical or alphabetical.

**Example:**

<ol>   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ol>  <ol start="50">   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ol>

#### **\li\\:**

The `<li>` tag defines a list item.

The `<li>` tag is used inside ordered lists`<ol>`, unordered lists `<ul>`and in menu lists `<menu>`.

**Example:**

<ol>  
  <li>Coffee</li>   
  <li>Tea</li>  
  <li>Milk</li> </ol> 
<ul>  
  <li>Coffee</li> 
  <li>Tea</li>  
  <li>Milk</li> </ul>

#### **\dl\\:**

（定义一个列表）

#### **\dd\\:**

（相当于列表中的文字）

#### **\dt\\:**

相当于列表中的小标题

**Example:**

<dl>
 <dt>Coffee</dt>
 <dd>Black hot drink</dd>
 <dt>Milk</dt>
 <dd>White cold drink</dd>
</dl>

### \caption\table\thead\tbody\th\td\tr\tfoot\  

（主要用于表格的书写）

#### **\caption\\:**

相当于表格中的一列的标题

**Example:**

<table>  
  <caption>Monthly savings</caption>  
  <tr>     
    <th>Month</th>    
    <th>Savings</th>  
  </tr>   <tr>   
  <td>January</td>    
  <td>$100</td> 
  </tr>
</table>

#### **\table\\:**

The `<table>` tag defines an HTML table.

An HTML table consists of one `<table>` element and one or more , consits of `<tr>,<th>` and `<td>` elements.

**Example:**

例如上面的例子

#### **\thead\:**

 (用于定义table的头部标题元素Month 和Savings)

**Example:**

<table>   
  <thead>    
    <tr>      
      <th>Month</th>   
      <th>Savings</th>   
    </tr>  
  </thead> 
  <tbody>   
    <tr>    
      <td>January</td>  
      <td>$100</td>   
    </tr>   
    <tr>      
    <td>February</td>  
      <td>$80</td>    
    </tr>  
  </tbody>  
  <tfoot>   
    <tr>     
      <td>Sum</td>  
      <td>$180</td>  
    </tr>  
  </tfoot> </table>

#### **\tbody\\:**

（用于定义表格当中的每个标题对应的子元素和所含内容）

**Example:**

同上

#### **\th\\:**

（在表格的header中加入文字内容要用<th>框起来）

**Example:**

同上的months 和Savings写的时候两边夹住<th>

#### **\td\\:**

(如果一个表格没有标题，则代表这个表格中的不同元素)

**Example:**

<table>  
  <tr>    
    <td>Cell A</td>    
    <td>Cell B</td>  
  </tr>  
  <tr>    
    <td>Cell C</td>   
    <td>Cell D</td>  
  </tr>
</table>

#### **\tr\\:**

（一个<tr>标签下可以包含多个<th> 和<td>标签里包含的内容）

**Example:**

<table>   
  <thead>    
    <tr>      
      <th>Month</th>   
      <th>Savings</th>   
    </tr>  
  </thead> 
  <tbody>   
	<!-- 上面的是表头信息-->
    <tr>    
      <td>January</td>  
      <td>$100</td>   
    </tr>   
    <tr>      
    <td>February</td>  
      <td>$80</td>    
    </tr>  
  </tbody>  
  <tfoot>   
    <tr>     
      <td>Sum</td>  
      <td>$180</td>  
    </tr>  
  </tfoot> </table>


书写每一行元素则在最前面先加上<tr>代表是一行的内容

#### **\tfoot\\:**

（tfoot 必须里面包含至少一个以上的标签）

**Example:**

见上面的表格元素大于一个的时候都有tfoot



### \form\input\textarea\select\option\optgroup\progress\detailist\button\label\ 

(此类标签主要用于制作需要用户输入的区域和交互式的一些按钮，进度条等等)

#### **\form\\:**

( form 创建后能让用户输入一些东西配合input等标签使用）

**Example:**

<form action="/action_page.php" method="get">
 <label for="fname">First name:</label>
 <input type="text" id="fname" name="fname"><br><br>
 <label for="lname">Last name:</label>
 <input type="text" id="lname" name="lname"><br><br>
 <input type="submit" value="Submit">
</form>

#### **\input\\:**

（input标签后用户可以输入内容）

**Example:**

例子看上面一个东西

#### **\textarea\\:**

（定义一段能多行输入的文字框）

**Example:**

<label for="w3review">Review of W3Schools:</label>

<textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. 
</textarea>

#### **\select\\:**

（选择器与option配合使用可以选择不同的东西）

**Example:**

<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
 <option value="volvo">Volvo</option>
 <option value="saab">Saab</option>
 <option value="mercedes">Mercedes</option>
 <option value="audi">Audi</option>
</select>

#### **\option\\:**

（option的用法如上面例子中的，加在多个元素两侧作为select内部的

**Example:**

#### **\optgroup\\:**

The `<optgroup>` tag is used to group related options in a <select> element (drop-down list).

**Example:**

If you have a long list of options, groups of related options are easier to handle for a user.

#### **\progress\\:**

(进程模块用于代表一项任务的进度，经常与label标签一起使用)

**Example:**

<label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>

#### **\detailist\\:**

The `<datalist>` tag specifies a list of pre-defined options for an <input> element.

**Example:**

<h1>The datalist element</h1>

<form action="/action_page.php" method="get">
  <label for="browser">Choose your browser from the list:</label>
  <input list="browsers" name="browser" id="browser">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
  <input type="submit">
</form>


<p><strong>Note:</strong> The datalist tag is not supported in Safari 12.0 (or earlier).</p>

(detailist可以用于对要输入的元素进行选择，并配合submit按钮提交)



#### **\button\\:**

The `<button>` tag defines a clickable button. （定义一个点击的按钮）

**Example:**

<button type="button">Click Me!</button>

Button 用于定义一个按钮可以被点击

#### **\label\\:**

The `<label>` tag defines a label for several elements:

（标签可以定义不同的元素）

**Example:**

<form action="/action_page.php">
 <input type="radio" id="html" name="fav_language" value="HTML">
 <label for="html">HTML</label><br>
 <input type="radio" id="css" name="fav_language" value="CSS">
 <label for="css">CSS</label><br>
 <input type="radio" id="javascript" name="fav_language"value="JavaScript">
 <label for="javascript">JavaScript</label><br><br>
 <input type="submit" value="Submit">
</form>


### \img\audio\video\figure\figcaption\embed\object

（此类标签用于图片、视频、对象的一些插入）

#### **\img\\:**

插入图片用的

**Example:**

<img src="img_girl.jpg" alt="Girl in a jacket" width="500"height="600">

#### **\audio\\:**

插入音频

**Example:**

<audio controls>   <source src="horse.ogg" type="audio/ogg">   <source src="horse.mp3" type="audio/mpeg">   Your browser does not support the audio tag. </audio>

#### **\video\\:**

插入视频用的

**Example:**

<video width="320" height="240" controls>   
  <source src="movie.mp4" type="video/mp4">   
  <source src="movie.ogg" type="video/ogg">   
  Your browser does not support the video tag. 
</video>

#### **\figure\\:**

The `<figure>` tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.

**Example:**

<figure>   
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">  
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> 
</figure>



#### **\figcaption\\:**

The `<figcaption>` element can be placed as the first or last child of the <figure> element.

**Example:**

#### **\embed\\:**

The `<embed>` tag defines a container for an external resource, such as a web page, a picture, a media player, or a plug-in application 

（embed 标签可以用来定义一个插入的网页、图片、媒体播放器或者一个小程序）

**Example:**

<embed type="image/jpg" src="pic_trulli.jpg" width="300"height="200">

#### **\object\\:**

The `<object>` tag defines a container for an external resource. （对象标签用于定义external 的资源）

The external resource can be a web page, a picture, a media player, or a plug-in application. 

**Example:**

<object data="pic_trulli.jpg" width="300" height="200"></object>



### \alt\href\scr\width\height\style\id\class\title\Placeholder\

（此类标签用于对文章宽度、高度、样式、标题的修改）





# CSS

## Properties

![CSS_properties](/Users/skyrim/UNSW/HTML/Notebook/HTML/CSS_properties.png)

```css
div {
  display: block;
  display: inline-block;
  display: inline;
  display: none;
}
```

### Block

一个块可以调整宽度和高度，Enven ther is enough space, it do not sit next to each other

###  Inline

斜体或者粗体的元素但是不能控制宽度和高度，多半都是文字

### Inline-Block

一个块里面装着文字，可以调整文字的粗细和斜体也能调整整个块的宽度和高度

### Width and Height

- px
- em
- rem    (Root em. Same measurement as em, but makes life much easier without the inheritance problem)
- %.     (Defines the height/width in percent of the containing block)
- auto  (This is default. The browser calculates the height and width)
- vw,vh
- Max-width,min-width,max-height,min-height

### Margin and Padding

####  Margin 

Margin是盒子模型的最外层

在HTML中，`margin` 是一个CSS属性，用于设置元素周围的外边距。这个外边距是元素边框外的空间，可以用来控制元素与其它元素之间的距离。`margin` 的值可以是固定的像素值，比如 `10px`，也可以是百分比值，如 `5%`。`margin` 可以分别设置元素的上、右、下、左四个方向的外边距，也可以统一设置。

例如：

- `margin: 20px;` 会在元素的所有四边设置20像素的外边距。
- `margin: 5px 10px;` 会在元素的上下设置5像素，左右设置10像素的外边距。
- `margin: 5px 10px 15px 20px;` 会分别在元素的上、右、下、左边设置5像素、10像素、15像素、20像素的外边距。

使用 `margin`，开发者可以控制页面布局的空间分布，使页面看起来更加整洁和美观。

25px  50px 75px 100px 

- Top 25px
- right 50px
- bottom 75px
- Left 100px

25px 50px 75px

- Top 25px
- right and left 50px 
- bottom 75px

25px 50px

- top and bottom 25px
- Right and left 50px

25px

- All four margins are 25px

#### Padding

在HTML和CSS中，`padding` 是一个用来设置元素内边距的属性。内边距是指元素的内容与其边框之间的空间。通过调整 `padding`，你可以控制元素内容与边框的距离，影响元素的视觉布局和大小。

`padding` 的值可以是像素（如 `10px`）、百分比（如 `5%`）或其他CSS单位。与 `margin` 类似，`padding` 也可以针对元素的上、右、下、左四个方向分别设置，或者统一设置。

例如：

- `padding: 20px;` 会在元素的所有四边内侧设置20像素的内边距。
- `padding: 5px 10px;` 会在元素的上下设置5像素，左右设置10像素的内边距。
- `padding: 5px 10px 15px 20px;` 会分别在元素的上、右、下、左边内侧设置5像素、10像素、15像素、20像素的内边距。

`padding` 对页面布局至关重要，因为它不仅影响元素的视觉效果，还影响元素的实际大小。增加 `padding` 会使元素看起来更大，而不改变内容的大小。这对于改善用户界面的可读性和舒适性非常有帮助。

```html
<style>
p
{
	background-color:yellow;
}
p.padding  /* 下面是对页边距设定手动填充的padding样式*/
{
	padding-top:25px;
	padding-bottom:25px;
	padding-right:50px;
	padding-left:50px;
}
</style>
```

Padding : 10px 5px

- Top and bottom are 10px
- right and left are 5px

Padding: 10px 5px 15px

- top is 10px
- right and left are 5px
- Bottom is 15px

### Border

![image-20230828152429024](/Users/skyrim/Library/Application Support/typora-user-images/image-20230828152429024.png)

```css
<head>
<style>
div {
  background-color: lightgrey;
  width: 500px;
  border: 19px solid green;
  padding: 20px;
  margin: 20px;
}
</style>
</head>
<body>

<h2>Demonstrating the Box Model</h2>

<p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.</p>

<div>This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

</body>
```

Example: 下面的例子是上面代码实现得到的效果

![image-20230828152614259](/Users/skyrim/Library/Application Support/typora-user-images/image-20230828152614259.png)

#### **Color**

<body>

<h1 style="background-color:Tomato;">Tomato</h1>
<h1 style="background-color:Orange;">Orange</h1>
<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
<h1 style="background-color:MediumSeaGreen;">MediumSeaGreen</h1>
<h1 style="background-color:Gray;">Gray</h1>
<h1 style="background-color:SlateBlue;">SlateBlue</h1>
<h1 style="background-color:Violet;">Violet</h1>
<h1 style="background-color:LightGray;">LightGray</h1>

</body>

还能对段落的背景颜色进行修改：

<body>

<h1 style="background-color:DodgerBlue;">Hello World</h1>

<p style="background-color:Tomato;">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</p>

</body>

也能对文字的颜色进行修改：

<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>



#### **Position**

There are five different position values:

- `static ` :该关键字指定元素使用正常的布局行为，即元素在文档常规流中当 前的布局 位置。此时 top, right, bottom, left 和 z-index 属性无效。
- `relative `:该关键字下，元素先放置在未添加定位时的位置，再在不改变页 面布局的 前提下调整元素位置（因此会在此元素未添加定位时所在位置留 下空白）
- `fixed`:不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport） 的位置来 指定元素位置。元素的位置在屏幕滚动时不会改变。
- `absolute`
- `sticky`： A sticky element toggles between `relative` and `fixed`, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed)

### Flexbox

#### Container

The flex container becomes flexible by setting the `display` property to `flex`:

`Flex-direction:` 

`Flex-wrap:`

`Flex-flow:`

`Align-items:`

`Align-content:`

#### Flex-direction:

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

从左向右stack排列元素

```css
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```

将最左边的元素反转 比如： 1 2 3 （ y ） 变成： 3 2 1 

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

从左向右水平排列元素 ： 1 2 3 （x) 

```css
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```

从右向左 ： 3 2 1 (x)

#### Flex-wrap:

`flex-wrap` 是 CSS 中用于控制 Flex 布局容器内的子元素如何换行的属性。它决定了子元素是否允许在容器的主轴上换行以适应容器的尺寸

Flex-wrap : 

1 2 3

4 5 6

7 8 9

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

Wrap-reverse:

`wrap-reverse`：与 `wrap` 类似，但子元素会从容器的反方向开始排列，即从最后一行开始。

7 8 9 

4 5 6

1 2 3

```css
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Flex-flow:

`flex-flow` 是 CSS 中的一个属性，它用于同时设置 `flex-direction`（Flex 容器主轴的方向）和 `flex-wrap`（子元素如何换行）这两个 Flex 布局相关的属性。它可以将这两个属性组合在一起，方便地控制 Flex 布局容器的布局方式。

#### Justify-content:

The `justify-content` property is used to align the flex items: 

Center: 水平对齐flex-flow 的内容：

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```

##### Flex-start:

默认从flex内容开始的地方放置items

```css
.flex-container {
  display: flex;
  justify-content: flex-start;
}
```

##### Flex-end:

The `flex-end` value aligns the flex items at the end of the container:

从容器结束的位置开始排列元素

```css
.flex-container {
  display: flex;
  justify-content: flex-end;
}
```

##### Space-between:

displays the flex items with space between the lines:

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

##### Space-around:

displays the flex items with space before, between, and after the lines:

```css
.flex-container {
  display: flex;
  justify-content: space-around;
}
```

#### Align-items:

Center:

The `center` value aligns the flex items in the middle of the container:

将容器内的元素全部放置在center的位置

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: center;
}
```

#### Align-content:

Flex-start:

displays the flex lines at the start of the container:

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: flex-start;
}
```

Flex-end:

displays the flex lines at the end of the container: 

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: flex-end;
}
```

