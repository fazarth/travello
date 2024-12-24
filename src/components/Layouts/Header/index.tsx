import Image from 'next/image'
import Container from '../../Container'
import travelloLogo from 'public/assets/travelo-logo-header.png'
import Search from './Search'
import Nav from './Nav'
import Button from 'components/Button'

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className='flex'>
                    <Image
                        src={travelloLogo}
                        alt="Travello Logo"
                        placeholder='blur'
                        height={48}
                        width={182}
                        />

                    <Search />
                        </div>

                        <div className="flex gap-5">
                            <Nav />
                            <Button classaName="w-[190px]">
                                Masuk
                            </Button>   
                        </div>
                </div>
            </Container>
        </header>
    )
}

export default Header