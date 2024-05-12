import PersonalPortfolio from '../../assets/images/projects/pr-1.png'
import RazProject from '../../assets/images/projects/raz-cg.png'

import WPBlog from '../../assets/images/projects/blog.png'

import AngularBooking from '../../assets/images/projects/angular-apart.png'

import WebShopPhp from '../../assets/images/projects/shop.png'

import ReduxSeries from '../../assets/images/projects/redux-series.png'

import ZoomExpo from '../../assets/images/projects/zoom-apk.png'
import AngularApp from '../../assets/images/projects/angular-app.png'

import WebHeroes from '../../assets/images/projects/web3heroes.png'

import NewsApi from '../../assets/images/projects/react-news-api.png'

import TailwindProject from '../../assets/images/projects/tailwind-vite.png'

import WeatherReactNews from '../../assets/images/projects/react-weather-news.png'

import UniversityApk from '../../assets/images/projects/universityApk.png'

import TravelList from '../../assets/images/projects/travel-list.png'

import SearchInput from '../../assets/images/projects/search-input.png'

import SplitBill from '../../assets/images/projects/split-bill.png'

export const PROJECTS_ITEM = [
  {
    id: 1,
    title: 'Split a Bill',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/eat-n-split',
    displayImg: '',
    description:
      'Demo app for effortlessly simple bill payment. This is an app where you can basically go out with a friend for dinner or lunch and then you can split the bill using this app.',
    img: SplitBill,
    using: 'react, jsx, css3, reusable component',
  },
  {
    id: 2,
    title: 'Search Input Web App',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/search-input-api',
    displayImg: '',
    description:
      'I developed a search input that triggers an API call and provides autocomplete suggestions after the first character is entered. Users can select multiple entries and proceed to the next step.',
    img: SearchInput,
    using: 'react-vite, react-router, mui/material, api, css3',
  },

  {
    id: 3,
    title: 'University Web Application',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/university-apk',
    displayImg: '',
    description:
      'Examination form. Students can edit and see the status of their application, as well as have information on how long they have been waiting. The administrator has permission for all users.',
    img: UniversityApk,
    using: 'react-vite, node, mysql, redux, jwt, tailwind-css',
  },

  {
    id: 4,
    title: 'Expo Mobile Application',
    linkLive: '',
    linkGithub:
      'https://github.com/UrosJavaScript/ExpoCli-locationApk/tree/feature/task-2',
    displayImg: '',
    description:
      'The main goal of developing this mobile application is to help people find their desired destination. As a registered user, you can save your favorite places. The application is still under development.',
    img: ZoomExpo,
    using: 'expo, react native, js, css, redux, google api',
  },

  {
    id: 5,
    title: 'Travel List Web App',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/travel-list',
    displayImg: '',
    description:
      'A mini application has been created with which you can list all the necessary things you need for your trip. There are statistics, as well as sorting of entered items.',
    img: TravelList,
    using: 'react, jsx, css3',
  },

  {
    id: 6,
    title: 'Web3Heroes',
    linkLive: '',
    linkGithub: '',
    displayImg: WebHeroes,

    description:
      'A project made for the portfolio of a company, during my employment in it. I made reusable components in React TS, for buttons as well as for various sections responsive for all devices.',
    img: WebHeroes,
    using: 'react, ts, tsx, styled-components, i18, html5',
  },

  {
    id: 7,
    title: 'Weather and News Website',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/project-react-tailwind',
    displayImg: '',

    description:
      'A web application that displays news, and filters it according to a selected category. On the right is the weather forecast. I used the API Openweathermap as well as json api for news categories.',
    img: WeatherReactNews,
    using: 'react-vite, tailwind-css, jsx, html5',
  },

  {
    id: 8,
    title: 'RAZ Caregiver',
    linkLive:
      'https://play.google.com/store/apps/details?id=com.comit.caregiver&hl=en_US',
    linkGithub: '',
    displayImg: '',
    description:
      'I worked on the development of the functionality of the RAZ mobile application, which is intended for people with dementia. I participated in the development of the entire project.',
    img: RazProject,
    using: 'react native, codeigniter, php, css, html5',
  },

  {
    id: 9,
    title: 'Personal Portfolio',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/personal-portfolio',
    displayImg: '',

    description:
      'I made a custom loader and used animate.css for other animations. With of course the use of React useEffect and useState hooks, as well as reading dynamic data from json.',
    img: PersonalPortfolio,
    using: 'react, jsx, scss, html5',
  },

  {
    id: 10,
    title: 'Website Tailwind',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/capstone-project-tailwind',
    displayImg: '',

    description:
      'I made a responsive website in tailwind css. I created this page for a company. I used Vite and javascript for mobile navigation as well as active category filtering.',
    img: TailwindProject,
    using: 'tailwind-css, vite, js, html5',
  },

  {
    id: 11,
    title: 'Portal for Reading News',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/news-portal-react',
    displayImg: '',

    description:
      'I have created a portal that displays news for reading and retrieves data from the API. I used Slick Carousel and React Paginate, as well as bootstrap for columns.',
    img: NewsApi,
    using: 'react, jsx, react-context, animate-css, bootstrap',
  },

  {
    id: 12,
    title: 'Apartments Website',
    linkLive: 'https://zlatibor-booking.com/',
    linkGithub:
      'https://github.com/UrosJavaScript/angular-project-online_apartments',
    displayImg: '',
    description:
      'I created a website for online booking and review of accommodation using Angular. You can search apartments by price and see a description for each of them, as well as contact the owner.',
    img: AngularBooking,
    using: 'angular, ts, css, html5',
  },
  {
    id: 13,
    title: 'Angular Mobile Application',
    linkLive:
      'https://play.google.com/store/apps/details?id=com.zlatiborbooking.com.zlatiborbooking&pli=1',
    linkGithub: '',
    displayImg: '',
    description:
      'I created mobile application from Angular project. I used Gradle and Android SDK. The functionality is the same as on the web portal. The application can be downloaded from GooglePlay.',
    img: AngularApp,
    using: 'gradle, angular, ts, css, html5',
  },

  {
    id: 14,
    title: 'Series Application',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/redux-movie-app',
    displayImg: '',
    description:
      'I used axios and asynchronous loading of data from the api. Each movie or series has its own page with review data and a more detailed description. Used free movie and series data api.',
    img: ReduxSeries,
    using: 'react, redux, js, scss, html5',
  },
  {
    id: 15,
    title: 'Blog Post',
    linkLive: 'https://www.hernienzentrum.ch/blog/',
    linkGithub: '',
    displayImg: '',
    description:
      'Creating a dynamic blog page for creating and publishing blog posts. Using the ACF field and reading on the front. Each blog has its own page where you can see the publication date and author.',
    img: WPBlog,
    using: 'wordpress, php, css, html5',
  },

  {
    id: 16,
    title: 'Web Shop',
    linkLive: '',
    linkGithub: 'https://github.com/Uros12345678/cdi3-online_shop',
    displayImg: '',
    description:
      'I have created an online store using CodeIgniter3. You can log in as an administrator and have permission over all users. Modals created in jQuery - data stored in PHPMyAdmin.',
    img: WebShopPhp,
    using: 'codeigniter, php, mysql, css, html5',
  },
]
