import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import LoaderPac from '../common/LoaderPac'
import { ListProjects } from './ListProjects'
import { useIsOverflow } from '../../helpers/data/overflow'
import './index.scss'

const Project = () => {
  const [loading, setLoading] = useState(false)
  const ref = React.useRef()
  const isOverflow = useIsOverflow(ref)

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
            <ListProjects />
          </div>
        </>
      )}
    </>
  )
}
export default Project
