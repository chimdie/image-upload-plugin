import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const ImgWrapper = styled.div`
  position: relative;
  background: whitesmoke;
  border-radius: 10px;
  overflow: hidden;
  height: 200px;
  width: 200px;
`

const Btn = styled.div`
  top: 0;
  right: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 1;
`

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  &:hover {
    cursor: pointer;
  }
`

const Input = styled.input`
  position: absolute;
  height: 0.1px;
  width: 0.1px;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const Image = styled.img`
  display: block;
  object-fit: cover;
  position: absolute;
  height: 100%;
  width: 100%;
`

const UploadLoader = ({ onFileAdded, onFileRemoved }) => {
  const ref = useRef()
  const [currentImg, setCurrentImg] = useState({})

  const handleImageUpload = (e) => {
    if (e.target.files.length > 0) {
      const imageObject = {
        file: e.target.files[0],
        dataUrl: URL.createObjectURL(e.target.files[0])
      }
      setCurrentImg((oldImage) => {
        return { ...oldImage, ...imageObject }
      })
      if (onFileAdded) onFileAdded(currentImg)
    }
  }

  const handleDeleteImage = (e) => {
    if (onFileRemoved) onFileRemoved(currentImg)
    ref.current.files = null
    ref.current.value = ''
    setCurrentImg({})
  }

  return (
    <Container>
      <Main>
        <ImgWrapper>
          <Btn>
            <Button onClick={handleDeleteImage}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='#848484'
              >
                <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-14v-4h14v4z' />
              </svg>
            </Button>
          </Btn>

          <Label htmlFor='upload'>
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.33332 8.33332H14.5833L18.75 4.16666H31.25L35.4167 8.33332H41.6667C42.7717 8.33332 43.8315 8.77231 44.6129 9.55371C45.3943 10.3351 45.8333 11.3949 45.8333 12.5V37.5C45.8333 38.6051 45.3943 39.6649 44.6129 40.4463C43.8315 41.2277 42.7717 41.6666 41.6667 41.6666H8.33332C7.22825 41.6666 6.16845 41.2277 5.38704 40.4463C4.60564 39.6649 4.16666 38.6051 4.16666 37.5V12.5C4.16666 11.3949 4.60564 10.3351 5.38704 9.55371C6.16845 8.77231 7.22825 8.33332 8.33332 8.33332ZM25 14.5833C22.2373 14.5833 19.5878 15.6808 17.6343 17.6343C15.6808 19.5878 14.5833 22.2373 14.5833 25C14.5833 27.7627 15.6808 30.4122 17.6343 32.3657C19.5878 34.3192 22.2373 35.4167 25 35.4167C27.7627 35.4167 30.4122 34.3192 32.3657 32.3657C34.3192 30.4122 35.4167 27.7627 35.4167 25C35.4167 22.2373 34.3192 19.5878 32.3657 17.6343C30.4122 15.6808 27.7627 14.5833 25 14.5833ZM25 18.75C26.6576 18.75 28.2473 19.4085 29.4194 20.5806C30.5915 21.7527 31.25 23.3424 31.25 25C31.25 26.6576 30.5915 28.2473 29.4194 29.4194C28.2473 30.5915 26.6576 31.25 25 31.25C23.3424 31.25 21.7527 30.5915 20.5806 29.4194C19.4085 28.2473 18.75 26.6576 18.75 25C18.75 23.3424 19.4085 21.7527 20.5806 20.5806C21.7527 19.4085 23.3424 18.75 25 18.75Z'
                fill='#848484'
              />
            </svg>
            {currentImg.bataUrl ? (
              <React.Fragment />
            ) : (
              <Input
                key={currentImg}
                ref={ref}
                type='file'
                name='upload'
                onChange={handleImageUpload}
                accept='image/*'
                id='upload'
              />
            )}
          </Label>

          {currentImg.dataUrl ? (
            <Image
              src={currentImg?.dataUrl}
              alt={currentImg?.dataUrl}
              width={200}
              height={200}
              loading='lazy'
            />
          ) : (
            <React.Fragment />
          )}
        </ImgWrapper>
      </Main>
    </Container>
  )
}

export default UploadLoader
