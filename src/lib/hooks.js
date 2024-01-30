
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/contexts/activeSectionContext';


export function useSectionInView(sectionName, threshold = 0.75) {
    const { ref, inView } = useInView({ threshold})
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName)
        }
      },[inView, setActiveSection, timeOfLastClick, sectionName])

    return { ref }
}