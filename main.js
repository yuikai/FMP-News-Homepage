Vue.component('popular', {
  props: {
    index: {
      required: true,
      type: Number,
    },
    content: {
      required: true,
      type: Object,
    },
  },

  template: `
    <div>
      <img :src="content.image"/>
      <div>
        <h1>0{{ index + 1 }}</h1>
        <h2>{{ content.title }}</h2>
        <p>{{ content.desc }}</p>
      </div>
    </div>
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    headline: {
      image: './assets/images/image-web-3-desktop.jpg',
      title: 'The Bright Future of Web 3.0?',
      desc: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
    },

    newArticles: [
      {
        title: 'Hydrogen VS Electric Cars',
        desc: 'Will hydrogen-fueled cars ever catch up to EVs?',
      },
      {
        title: 'The Downsides of AI Artistry',
        desc: 'What are the possible adverse effects of on-demand AI image generation?',
      },
      {
        title: 'Is VC Funding Drying Up?',
        desc: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
      },
    ],

    popularArticles: [
      {
        image: './assets/images/image-retro-pcs.jpg',
        title: 'Reviving Retro PCs',
        desc: 'What happens when old PCs are given modern upgrades?',
      },
      {
        image: './assets/images/image-top-laptops.jpg',
        title: 'Top 10 Laptops of 2022',
        desc: 'Our best picks for various needs and budgets.',
      },
      {
        image: './assets/images/image-gaming-growth.jpg',
        title: 'The Growth of Gaming',
        desc: 'How the pandemic has sparked fresh opportunities.',
      },
    ],

    showMenu: false,
    menuIcon: './assets/images/icon-menu.svg',
  },
  computed: {
    defaultMenu(){
      return ( window.innerWidth >= 600 ? true : false );
    },
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if ( this.menuIcon === './assets/images/icon-menu.svg' ) {
        this.menuIcon = './assets/images/icon-menu-close.svg';
      } else {
        this.menuIcon = './assets/images/icon-menu.svg';
      }
    },
    scrollToTop() {
      const home = document.getElementById('headline');
      home.scrollIntoView({behavior: 'smooth'});
    },
    scrollToNew() {
      const newArticle = document.getElementById('new');
      newArticle.scrollIntoView({behavior: 'smooth'});
    },
    scrollToPopular() {
      const popularArticle = document.getElementById('popular');
      popularArticle.scrollIntoView({behavior: 'smooth'});
    },
  },
});