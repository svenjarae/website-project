<template>
    <div>
      <transition name="fade">
      <div v-if="isPopupVisible" class="popup-background"></div>
    </transition>

    <transition name="popup-slide">
      <div v-if="isPopupVisible" class="popup-container">
        <div class="popup-content" @click.stop>
          <button @click="closePopup" class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
          <!-- popup content goes here -->

          <span>Write me a message,</span>
          <a href="mailto:svenjaraetzsch@gmail.com" style="display: flex; align-items: center; padding: 16px; font-size: 16px; text-transform: uppercase;">svenjaraetzsch@gmail.com</a>
          <span>or connect with me through another way.</span>
          <div class="iconBar">
            <a href="https://www.instagram.com/svenjaraetzsch/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
            </a>
            <a href="https://vimeo.com/user182333690?embedded=true&source=owner_portrait&owner=182333690">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 299.999 299.999" xml:space="preserve">
                <g id="XMLID_518_">
                  <path id="XMLID_3_" style="fill-rule:evenodd;clip-rule:evenodd;" d="M298.723,68.78c2.238-12.561,2.188-25.477-5.57-35.245   c-10.824-13.696-33.863-14.2-49.646-11.783c-12.84,1.963-56.269,21.124-71.047,66.996c26.182-1.99,39.904,1.887,37.385,30.713   c-1.055,12.061-7.148,25.274-13.947,37.941c-7.857,14.603-22.583,43.277-41.894,22.608c-17.394-18.602-16.088-54.179-20.065-77.871   c-2.215-13.292-4.557-29.857-8.912-43.529c-3.753-11.757-12.359-25.932-22.884-29.004c-11.304-3.322-25.28,1.863-33.487,6.698   C42.522,51.661,22.605,73.513,0,91.54l0,0c3.68,7.884,5.687,12.992,12.283,13.949c15.561,2.292,30.391-14.502,40.736,2.971   c6.294,10.675,8.26,22.381,12.287,33.891c5.387,15.328,9.541,32.02,13.947,49.646c7.452,29.857,16.618,74.47,42.424,85.398   c13.166,5.591,32.957-1.889,42.977-7.831c27.14-16.061,48.289-39.348,66.391-63.04C272.434,150.453,295.27,86.933,298.723,68.78z"/>
                </g>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/svenja-raetzsch-9970b0205/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="-5.5 0 32 32" version="1.1">
                <title>linkedin</title>
                <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"/>
              </svg>
            </a>
            <a href="https://github.com/svenjarae">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="-4 0 32 32" version="1.1">
                <title>github</title>
                <path d="M23.563 20.469l-0.063 0.25c-0.094 0.25-0.219 0.5-0.313 0.75 0 0.063-0.063 0.188-0.094 0.25-1 2.219-2.875 3.281-5.781 3.813-0.156 0.031-0.438 0.094-0.719 0.125-2.813 0.344-4.938 0.406-7.75 0.156-0.094 0-0.219-0.031-0.281-0.031-3.906-0.438-6.219-1.844-7.438-4.094-0.031-0.031-0.094-0.125-0.125-0.25-0.125-0.219-0.219-0.5-0.313-0.719-0.063-0.125-0.094-0.188-0.125-0.281-0.406-1.156-0.563-2.5-0.563-4 0-2.625 0.813-3.656 1.906-5.063-0.844-3 0.344-5.063 0.344-5.063s1.781-0.375 5.156 2.031c1.813-0.781 6.656-0.844 8.969-0.156 1.406-0.938 4-2.25 5.063-1.875 0.25 0.438 0.844 1.75 0.344 4.656 0.344 0.625 2.219 2 2.219 5.844-0.031 1.406-0.188 2.625-0.438 3.656zM3.094 19.563c0 3.469 2.438 5 5.844 5.281 0.219 0.031 0.438 0.031 0.688 0.063 1.594 0.031 3.594 0.063 5.563 0 0.438-0.031 0.875-0.063 1.281-0.125 3.25-0.469 4.594-2.344 4.594-4.969 0-1.906-0.875-4.406-4.375-4.406-0.25 0-2.313 0.25-4.281 0.25-2.219 0-4.5-0.25-4.844-0.25-3.594 0-4.469 2.844-4.469 4.156zM7.219 17.969c0.688 0 1.219 0.813 1.219 1.813s-0.531 1.813-1.219 1.813-1.188-0.813-1.188-1.813 0.5-1.813 1.188-1.813zM17.313 21.594c-0.719 0-1.25-0.813-1.25-1.813s0.531-1.813 1.25-1.813c0.688 0 1.219 0.813 1.219 1.813s-0.531 1.813-1.219 1.813zM12.125 22.469c-0.313 0-0.563-0.281-0.563-0.594 0-0.281 0.25-0.531 0.563-0.531s0.594 0.25 0.594 0.531c0 0.313-0.281 0.594-0.594 0.594zM12.156 24.344c-0.906 0-1.625-0.781-1.625-1.25 0-0.188 0.125-0.344 0.313-0.344s0.313 0.156 0.313 0.344c0.031 0.094 0.438 0.625 1 0.625 0.438 0 0.844-0.375 0.844-0.625 0-0.188 0.156-0.344 0.313-0.344 0.188 0 0.344 0.156 0.344 0.344 0 0.563-0.625 1.25-1.5 1.25z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPopupVisible: false,
      };
    },
    methods: {
      openPopup() {
      this.isPopupVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closePopup() {
      this.isPopupVisible = false;
      document.body.style.overflow = '';
    },
    },
  };
  </script>
  
  <style scoped>
    .iconBar{
      display: flex;
      flex-direction: row;
      margin: 16px;
      gap: 16px;
    }

  svg{
    width: 20px;
    height: 20px;
    fill: darkgray;
  }
.popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background for the blur effect */
  backdrop-filter: blur(5px); /* Blur effect for the background */
  z-index: 999;
}

.popup-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  width: 50%; /* Adjust the width as needed */
  max-width: 400px; /* Set a maximum width for responsiveness */
  z-index: 1000;
}

.popup-content {
  padding: 20px;
  color: black;
  text-align: left;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  box-shadow: none;
  border: none;
}

.popup-slide-enter-active, .popup-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.popup-slide-enter, .popup-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -60%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

  </style>