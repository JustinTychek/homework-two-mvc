var MODEL = (function () {
  var _homeContent = ` <div class="home">
  <div class="home-text">
      <h1>Professional Photography</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ab nam magni quia blanditiis
          accusantium, quod, unde ducimus non.</p>
      <div class="learn-more">
          <a id="shop" href="#">LEARN MORE</a>
      </div>

  </div>
  <div class="camera-man"></div>
  <div class="camera-equipment"></div>
</div>`;
  var _aboutContent = ` <div class="about">
  <div class="owner-shadow"></div>
  <div class="owner-image"></div>
  <div class="about-text">
      <h1>About Us</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur deleniti aliquid modi
          iusto eius mollitia, a omnis fuga. Recusandae sequi autem blanditiis nemo dolorum.</p>
  </div>
</div>`;
  var _shopContent = ` <div class="shop">
  <div class="product1 product1-top">
      <div class="image1"></div>
      <h1>Polaroid</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad non itaque ut reiciendis
          accusamus!</p>
  </div>

  <div class="product2">
      <h1>Rolleiflex</h1>
      <p>Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Eu feugiat pretium nibh ipsum
          consequat nisl vel pretium. </p>
      <div class="image2"></div>
  </div>

  <div class="product1">
      <div class="image3"></div>
      <h1>Cannon Argentique</h1>
      <p>Justo donec enim diam vulputate ut pharetra sit amet. Purus sit amet volutpat consequat mauris nunc.
          Feugiat nibh sed.</p>
  </div>
</div>`;
  var _contactContent = ` <div class="contact">
  <div class="contact-holder">
      <div class="contact-image"></div>
      <form action="">
          <input class="input" type="text" placeholder="Enter your name">
          <input class="input" type="text" placeholder="Enter your email">
          <textarea class="textarea" name="" id="" cols="30" rows="10"
              placeholder="Enter your message"></textarea>
          <input class="submit" type="submit">
      </form>
  </div>
</div>`;

  var _getPageContent = function (buttonID, callback) {
    let pageContent = "_" + buttonID + "Content";

    $("#content").html(eval(pageContent));

    if (callback) {
      callback(pageContent);
    }
  };

  return {
    getPageContent: _getPageContent,
  };
})();
