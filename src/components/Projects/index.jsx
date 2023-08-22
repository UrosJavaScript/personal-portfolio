import React, { useEffect, useState } from 'react'
import { PROJECTS_ITEM } from '../../helpers/data/projects'
import './index.scss'
import Sidebar from '../Sidebar'

import { useIsOverflow } from '../../helpers/data/overflow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWeebly } from '@fortawesome/free-brands-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import LoaderPac from '../common/LoaderPac'

const Project = () => {
  const [loading, setLoading] = useState(false)
  const [displayedProjects, setDisplayedProjects] = useState(
    PROJECTS_ITEM.slice(0, 5)
  )
  const [showLoadMore, setShowLoadMore] = useState(true)
  const ref = React.useRef()
  const isOverflow = useIsOverflow(ref)

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

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      <Sidebar />

      {loading ? (
        <LoaderPac />
      ) : (
        <>
          <div
            className="container-projects"
            ref={isOverflow}
            style={{ overflow: 'auto', height: '100vh' }}
          >
            <div className="main-section">
              {displayedProjects.map((project, key) => (
                <div className="card" key={key}>
                  <div className="projects-page-cards">
                    <div className="image-projects-cards-wrapper">
                      <a
                        href={project.img}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={project.img} alt="Projects-UrosKovcic" />
                      </a>
                    </div>
                    <div className="projects-cards-content">
                      <div className="projects-wrapper">
                        <div className="projects-cards-top-content">
                          <h2>{project.title}</h2>

                          <span className="project-using-lang">
                            {project.using}
                          </span>

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
                                  <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#fff"
                                  />
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
                                  <FontAwesomeIcon
                                    icon={faWeebly}
                                    color="#fff"
                                  />
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
                                  <FontAwesomeIcon
                                    icon={faImage}
                                    color="#fff"
                                  />
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

              {/* Load more */}
              {showLoadMore && (
                <div className="wrapper-load_more">
                  <button onClick={loadMoreProjects}>
                    <span>Load More</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default Project
