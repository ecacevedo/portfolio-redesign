import { useEffect, useState } from 'react'

export default function useScrollSpy(sectionIds, offset = 200) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const onScroll = () => {
      let currentId = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - offset <= window.scrollY) {
          currentId = id
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return activeId
}
