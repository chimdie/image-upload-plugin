import React from 'react'

import UploadLoader from 'image-upload-plugin'
// import 'image-upload-plugin/dist/index.css'

const App = () => {
  function getImageFileObject(imageFile) {
    console.log({ imageFile })
  }
  return <UploadLoader onFileAdded={(img) => getImageFileObject(img)} />
}

export default App
