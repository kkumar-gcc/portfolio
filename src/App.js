// import Header from "./components/header/header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Work from './pages/work';
import Resume from './pages/resume';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Example from './pages/Canvas';
import { useEffect } from "react";
import NotFound from "./pages/notfound";

function App() {
  useEffect(() => {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: (window.innerWidth / 2),
      endY: (window.innerHeight / 2),
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },


      setupEventListeners: function () {
        var self = this;

        // Anchor hovering
        document.querySelectorAll('a').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

        // Click events
        document.addEventListener('mousedown', function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });


        document.addEventListener('mousemove', function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility();

          // Position the dot
          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },

      animateDotOutline: function () {
        var self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';

        requestAnimationFrame(this.animateDotOutline.bind(self));
      },

      toggleCursorSize: function () {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },

      toggleCursorVisibility: function () {
        var self = this;

        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 0.5;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      }
    }

    cursor.init();
    let darkTheme = false;

    const themeToggle = document.getElementById("toggleTheme");

    themeToggle.addEventListener("click", function () {
      darkTheme = !darkTheme;
      darkTheme ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
      themeToggle.checked = darkTheme;
    });


  })
  return (

    <div className="App">
      {/* <div className="cursor"></div> */}
      <div className="cursor-dot-outline"></div>
      <div className="cursor-dot"></div>
      <div className="theme">
        <div id="toggle">
          <input type="checkbox" id="toggleTheme" />
          <label for="toggleTheme" tabIndex="1" title="Dark mode toggle"></label>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/convas' element={<Example placement="new titile"/>}/>
          <Route path ="*" exact element={<NotFound />}/>
        </Routes>
      </Router>

      <div className="frame">
        <a href="#" className="btn">
          <ion-icon name="logo-facebook" style={{ color: '#3b5998' }}></ion-icon>

        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-twitter" style={{ color: '#00acee' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-dribbble" style={{ color: ' #ea4c89' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-linkedin" style={{ color: '#0e76a8' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-github" style={{ color: '#AD5C51' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="mail"></ion-icon>
        </a>
      </div>
    </div>


  )
}

export default App;
