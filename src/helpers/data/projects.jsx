import Project1 from '../../assets/images/projects/pr-1.png'
import Project2 from '../../assets/images/projects/raz-cg.png'
import Project3 from '../../assets/images/projects/blog.png'

import Project4 from '../../assets/images/projects/angular-apart.png'
import Project5 from '../../assets/images/projects/shop.png'

import Project6 from '../../assets/images/projects/redux-series.png'

import Project7 from '../../assets/images/projects/zoom-apk.png'
import Project8 from '../../assets/images/projects/angular-app.png'

export const PROJECTS_ITEM = [
  {
    id: 1,
    title: 'Personal Portfolio',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/personal-portfolio',

    description:
      'I made a custom loader and used animate.css for other animations. With of course the use of React useEffect and useState hooks, as well as reading dynamic data from json.',
    img: Project1,
    using: 'react, jsx, scss, html5',
  },

  {
    id: 2,
    title: 'Expo Mobile Application',
    linkLive: '',
    linkGithub:
      'https://github.com/UrosJavaScript/ExpoCli-locationApk/tree/feature/task-2',
    description:
      'The main goal of developing this mobile application is to help people find their desired destination. As a registered user, you can save your favorite places. The application is still under development.',
    img: Project7,
    using: 'expo, react native, js, css, redux, async',
  },
  {
    id: 3,
    title: 'RAZ Caregiver',
    linkLive: 'https://www.razmobility.com/about-us/',
    linkGithub: '',
    description:
      'I worked on the development of the functionality of the RAZ mobile application, which is intended for people with dementia. I participated in the development of the entire project.',
    img: Project2,
    using: 'react native, codeigniter, php, css, html5',
  },

 

  {
    id: 4,
    title: 'Apartments Website',
    linkLive: 'https://zlatibor-booking.com/',
    linkGithub:
      'https://github.com/UrosJavaScript/angular-project-online_apartments',
    description:
      'I created a website for online booking and review of accommodation using Angular. You can search apartments by price and see a description for each of them, as well as contact the owner.',
    img: Project4,
    using: 'angular, ts, css, html5',
  },
  {
    id: 5,
    title: 'Angular Mobile Application',
    linkLive:
      'https://play.google.com/store/apps/details?id=com.zlatiborbooking.com.zlatiborbooking&pli=1',
    linkGithub: '',
    description:
      'I created mobile application from Angular project. I used Gradle and Android SDK. The functionality is the same as on the web portal. The application can be downloaded from GooglePlay.',
    img: Project8,
    using: 'gradle, angular, ts, css, html5',
  },
  

  {
    id: 6,
    title: 'Series Application',
    linkLive: '',
    linkGithub: 'https://github.com/UrosJavaScript/redux-movie-app',
    description:
      'I used axios and asynchronous loading of data from the api. Each movie or series has its own page with review data and a more detailed description. Used free movie and series data api.',
    img: Project6,
    using: 'react, redux, js, scss, html5',
  },
  {
    id: 7,
    title: 'Blog Post',
    linkLive: 'https://www.hernienzentrum.ch/blog/',
    linkGithub: '',
    description:
      'Creating a dynamic blog page for creating and publishing blog posts. Using the ACF field and reading on the front. Each blog has its own page where you can see the publication date and author.',
    img: Project3,
    using: 'wordpress, php, css, html5',
  },

  
  {
    id: 8,
    title: 'Web Shop',
    linkLive: '',
    linkGithub: 'https://github.com/Uros12345678/cdi3-online_shop',
    description:
      'I have created an online store using CodeIgniter3. You can log in as an administrator and have permission over all users. Modals created in jQuery - data stored in PHPMyAdmin.',
    img: Project5,
    using: 'codeigniter, php, mysql, css, html5',
  },

  
]
