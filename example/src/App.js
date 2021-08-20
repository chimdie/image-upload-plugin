import React from 'react'

import UploadLoader from 'img-upload'
// import 'img-upload/dist/index.css'

const App = () => {
  function getImageFileObject(imageFile) {
    console.log({ imageFile })
  }
  return <UploadLoader onFileAdded={(img) => getImageFileObject(img)} />
}

export default App
