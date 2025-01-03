import {
    StyleItem,
    StyleItemsHeader,
    StyleItemsList,
    StyleListItem,
    StyleSocialMediaNavigation,
    StyleMediaLink,
    StyleNavigationList,
    StyleSocialMedia,
    StyleMediaText
} from './style'

import Facebook from '../../../icon/facebook.png'
import Twitter from '../../../icon/twitter.png'
import Instagram from '../../../icon/instagram.png'

export interface FooterItemProps{
    header: string,
    items:string[]
}


const FooterItem = ({header, items}:FooterItemProps) => {
    return (
        <StyleItem>
            <StyleItemsHeader>{header}</StyleItemsHeader>
            <StyleItemsList>
                {items.map((item,id) => <StyleListItem key={id}>{item}</StyleListItem>)}
            </StyleItemsList>
        </StyleItem>
    )
}


const FooterSocialMedia = () => {
    const socialMedia = [
        { href: "https://facebook.com", label: "Facebook", icon: Facebook },
        { href: "https://twitter.com", label: "Twitter", icon: Twitter },
        { href: "https://instagram.com", label: "Instagram", icon: Instagram },
    ]
    return (
        <StyleSocialMedia>
            <StyleSocialMediaNavigation>
                <StyleNavigationList>
                    {socialMedia.map(({href, label, icon}, index) => {
                        return (
                            <StyleMediaLink
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer" 
                            aria-label={label}
                            >
                                <img src={icon} alt={label}/>
                            </StyleMediaLink>
                        )
                    })}
                </StyleNavigationList>
            </StyleSocialMediaNavigation>
            <StyleMediaText>© 2020 Tripma incorporated</StyleMediaText>
        </StyleSocialMedia>
    )
}
export  { FooterItem , FooterSocialMedia}
