import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 3,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 6,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 7,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

const skillsList = [
  {
    imgURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png',
    skillName: 'HTML',
  },
  {
    imgURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png',
    skillName: 'CSS',
  },
  {
    imgURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png',
    skillName: 'BootStrap',
  },
  {
    imgURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png',
    skillName: 'JavaScript',
  },
  {
    imgURL:
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png',
    skillName: 'ReactJS',
  },
  {
    imgURL: 'https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png',
    skillName: 'Express JS',
  },
  {
    imgURL: 'https://nodejs.org/static/logos/nodejsStackedLight.svg',
    skillName: 'Node JS',
  },
  {
    imgURL: 'https://img.icons8.com/?size=512w&id=uHZV38hOzCFA&format=png',
    skillName: 'SQL',
  },
  {
    imgURL: 'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png',
    skillName: 'Python',
  },
  {
    imgURL:
      'https://cdn.iconscout.com/icon/premium/png-512-thumb/flexbox-4423074-3665079.png?f=webp&w=512',
    skillName: 'FlexBox',
  },
  {
    imgURL: 'https://img.icons8.com/?size=512&id=20906&format=png',
    skillName: 'Git',
  },
  {
    imgURL: 'https://img.icons8.com/?size=160&id=s35S45z4txOJ&format=png',
    skillName: 'DSA',
  },
  {
    imgURL: 'https://img.icons8.com/?size=512w&id=66368&format=png',
    skillName: 'Machine Learning',
  },
  {
    imgURL: 'https://img.icons8.com/?size=512w&id=bosfpvRzNOG8&format=png',
    skillName: 'MongoDB',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  onclickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  GetFilteredProjectsList = () => {
    const {activeTabId} = this.state
    const filteredProjectsList = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )
    return filteredProjectsList
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjectsList = this.GetFilteredProjectsList()
    return (
      <div className="app-container">
        <Header />
        <About />
        <h1 className="Edu-title" id="education">
          Education
        </h1>
        <Education />
        <h1 id="projects" className="Projects-title">
          Projects
        </h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              onclick={this.onclickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjectsList.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>

        <h1 className="skill-title" id="skills">
          Skills
        </h1>

        <div className="skillsContainer">
          {skillsList.map(eachSkill => (
            <Skills skillDetails={eachSkill} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
