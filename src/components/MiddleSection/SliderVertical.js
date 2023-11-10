import React from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

function SliderVertical() {
  return (
         <Fullpage style={{
          top:"auto",
          left:"auto",
          right:"auto",

         }}>

                <FullPageSections>

                <FullpageSection style={{
                    backgroundColor: 'lime',
                    height: '100vh',
                    padding: '1em',
                }}>1</FullpageSection>
                <FullpageSection style={{
                    backgroundColor: 'coral',
                    height: '100vh',
                    padding: '1em',
                }}>2</FullpageSection>
                <FullpageSection style={{
                    backgroundColor: 'firebrick',
                    height: '100vh',
                    padding: '1em',
                }}>3</FullpageSection>

                </FullPageSections>

                </Fullpage>    
  )
}

export default SliderVertical
