import { 
    StyleFooter, 
    StyleFooterWrapper, 
} from "./style"
import { Logo } from "../../assets"
import { useHttp } from "../../hooks/http.hook"
import { useEffect, useState } from "react"
import { FooterItemProps } from "./FooterItem"
import {FooterItem}  from "./FooterItem"
import {FooterSocialMedia} from "./FooterItem"

const Footer = () => {

    const [footerItems, setFooterItems] = useState<FooterItemProps[] | null>([])

    const {request} = useHttp()

    const onChangeState = (itemsArr:FooterItemProps[]) => {
        if(footerItems !== null){
            const newItems = [...itemsArr, ...footerItems]
            setFooterItems(newItems)
        }
    }

    const getFooterItems = () => {
        const footerItems = request('http://localhost:3000/footer')
            .then(onChangeState)

        return footerItems
    } 

    useEffect(() => {
        getFooterItems()
    }, [])

    return (
        <StyleFooter>
            <StyleFooterWrapper>
                <Logo/>
                {footerItems ? footerItems.map((item, i) => {
                    return <FooterItem key={i} header={item.header} items={item.items}/>
                }) : null}
            </StyleFooterWrapper>
            <FooterSocialMedia/>
        </StyleFooter>
    )
}

export default Footer