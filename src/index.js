import React, { useState, useEffect } from 'react'
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
`

const Btn = styled.div`
  top: 0;
  right: 0;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.label`
  position: relative;
  display: block;
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
  border-radius: 10px;
  object-fit: cover;
`

export const UploadLoader = () => {
  const [images, setImgs] = useState({})
  const [currentImg, setCurrentImg] = useState(undefined)

  const handleImageUpload = (e) => {
    if (e.target.files.length > 0) {
      console.log({ img: images, eve: e.target.files.length })
      const imageObject = {
        file: e.target.files[0],
        dataUrl: URL.createObjectURL(e.target.files[0])
      }
      setImgs(() => imageObject)
    }
  }

  useEffect(() => {
    setCurrentImg(images)
  }, [images])
  return (
    <Container>
      <Main>
        {currentImg && (
          <ImgWrapper>
            <Btn>
              <Label htmlFor='upload'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='grey'
                >
                  <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-14v-4h14v4z' />
                </svg>
                <Input
                  type='file'
                  name='upload'
                  onChange={handleImageUpload}
                  accept='image/*'
                  id='upload'
                />
              </Label>
            </Btn>
            <Image
              src={currentImg.dataUrl}
              alt=''
              width={200}
              height={200}
              loading='lazy'
            />
          </ImgWrapper>
        )}
      </Main>
    </Container>
  )
}
