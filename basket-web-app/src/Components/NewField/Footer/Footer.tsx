import React, {memo} from 'react';
import './Footer.css'
import FooterText from "../../Extra/Footer-Text/Footer-Text";
import './../../Extra/Mobile-Footer.css'

type FooterPropsType = {}

const DesktopFooter: React.FC<FooterPropsType> = () => {
    return (
        <div className='DesktopFooter'>
            <FooterText/>
        </div>
    );
}

export default memo(DesktopFooter);