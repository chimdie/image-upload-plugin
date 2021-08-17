import React from 'react'

import UploadLoader from 'image-upload-plugin'

const App = () => {
  function getImageFileObject(imageFile) {
    console.log({ onAdd: imageFile })
  }
  function runAfterImageDelete(file) {
    console.log({ onDele: file })
  }
  return (
    <UploadLoader
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
    />
  )
}

export default App
