import styled from "styled-components"

export default function MainBackgroundMap(){
    return(
        <MainLayout>
            <Layout1>
                <Layout2>
                   <LayoutImg src="/map.png" alt="" /> 
                </Layout2>
            </Layout1>
        </MainLayout>
    )
}

const MainLayout = styled.div`
    position:absolute;
    width:100%;
    height:100vh;
    padding: 0 160px;
    display:flex;
    flex-direction:column-reverse;
`
const Layout1 = styled.div`
    position:absolute;
    width:100%;
`

const Layout2 = styled.div`
    position:absolute;
`

const LayoutImg = styled.img`

`