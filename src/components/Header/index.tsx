import { AvatarWithMenu } from "components/AvatarWhitMenu"
import Link from "next/link"
import { HeaderContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer>
            <Link href='/'>
                Matheus.testes
            </Link>
            <AvatarWithMenu />
        </HeaderContainer>
    )
}