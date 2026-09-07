import React, { useEffect } from 'react'

const useTitle = (title) => {
 useEffect(()=>{
  document.title=`${title} | SoundSphere`
 },[title])
}

export default useTitle
