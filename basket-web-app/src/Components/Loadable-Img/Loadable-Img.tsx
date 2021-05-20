import React, {useEffect, useRef, useState} from "react";
import Classes from './Loadable-Img.module.css'
// @ts-ignore
import cn from 'classnames'
import useOnScreen from "../Hooks/use-on-screen/useOnScreen";

type LoadableImgType = {
    src: string
    alt?: string
    onLoad?: void
}

const LoadableImg: React.FC<LoadableImgType> = ({src, alt, onLoad =() => {}}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)
    const isVisible = useOnScreen(containerRef)

    useEffect(() => {
        if (!isVisible || isLoaded) {
            return;
        }
        if (imageRef.current) {
            imageRef.current.onload = () => {
                setIsLoaded(true)
                onLoad()
            }
        }
    }, [isVisible, onLoad, isLoaded])
    return (
        <div ref={containerRef} className={cn(Classes.container, {[Classes.containerLoaded]: isLoaded})}>
            {(isVisible || isLoaded) && (<img ref={imageRef} className={cn(Classes.image, {[Classes.imageLoaded]: isLoaded})} src={src}
                   alt={alt}/>)}
        </div>
    )
}
export default LoadableImg