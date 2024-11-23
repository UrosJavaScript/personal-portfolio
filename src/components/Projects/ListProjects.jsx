import React, { useState } from 'react'
import { PROJECTS_ITEM } from '../../helpers/data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWeebly } from '@fortawesome/free-brands-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'

export const ListProjects = () => {
  const [showLoadMore, setShowLoadMore] = useState(true)

  const sortedProjects = PROJECTS_ITEM.sort((a, b) => a.priority - b.priority)

  const [displayedProjects, setDisplayedProjects] = useState(
    sortedProjects.slice(0, 5)
  )
  const numberProjects = PROJECTS_ITEM?.length

  const loadMoreProjects = () => {
    const currentlyDisplayed = displayedProjects.length
    const nextProjects = PROJECTS_ITEM.slice(
      currentlyDisplayed,
      currentlyDisplayed + 2
    )

    setDisplayedProjects([...displayedProjects, ...nextProjects])

    if (currentlyDisplayed + 2 >= PROJECTS_ITEM.length) {
      setShowLoadMore(false) // hidden LoadMore
    }
  }

  return (
    <div className="main-section">
      <div className="wrapper-length-projects">
        <h1>My Projects and Achievements</h1>

        <div className="wrapper-waves-anim">
          <h2>
            <span className="first">{numberProjects}</span>
          </h2>
          <h2>
            <span className="second">{numberProjects}</span>
          </h2>
        </div>
      </div>

      <div className="wrapper-flex-projects">
        {displayedProjects.map((project, key) => (
          <div className="card" key={`${project.id}-${key}`}>
            <div className="projects-page-cards">
              <div className="image-projects-cards-wrapper">
                <a href={project.img} target="_blank" rel="noopener noreferrer">
                  <img src={project.img} alt="Projects-UrosKovcic" />
                </a>
              </div>
              <div className="projects-cards-content">
                <div className="projects-wrapper">
                  <div className="projects-cards-top-content">
                    <h2>{project.title}</h2>

                    <span className="project-using-lang">{project.using}</span>

                    <div className="projects-description">
                      <p>{project.description}</p>
                    </div>
                    <div className="projects-bottom-wrapper">
                      {project.linkGithub ? (
                        <button className="btn-projects-git">
                          <a
                            href={project.linkGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub&nbsp;
                            <FontAwesomeIcon icon={faGithub} color="#fff" />
                          </a>
                        </button>
                      ) : (
                        <></>
                      )}

                      {project.linkLive ? (
                        <button className="btn-projects-live">
                          <a
                            href={project.linkLive}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live&nbsp;
                            <FontAwesomeIcon icon={faWeebly} color="#fff" />
                          </a>
                        </button>
                      ) : (
                        <></>
                      )}

                      {project.displayImg ? (
                        <button className="btn-projects-live">
                          <a
                            href={project.displayImg}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Image&nbsp;
                            <FontAwesomeIcon icon={faImage} color="#fff" />
                          </a>
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {showLoadMore && (
        <div className="wrapper-load-more">
          <button onClick={loadMoreProjects}>
            <span>Load More</span>
          </button>
        </div>
      )}
    </div>
  )
}
