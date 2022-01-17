import React, {useState} from 'react'
import { Button } from '../ButtonElements'
import Video from '../video/Video.mp4'
import { HeroContainer, HeroBg,VideoBg,
HeroContent, HeroH1, HeroP,HeroBtnWrapper,
ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    A Great School of Learning
                </HeroH1>
                <HeroP>
                    It is the best platform for learning Web Development and others technologies.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onmouseLeave={onHover}
                    primary='true' dark='true'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
