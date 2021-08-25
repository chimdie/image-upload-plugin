import React from 'react'

import UploadLoader from 'image-upload-plugin'

const App = () => {
  function getImageFileObject(imageFile) {
    console.log({imageFile})
  }
  return <UploadLoader onFileAdded={(img) => getImageFileObject(img)} />
}

export default App
