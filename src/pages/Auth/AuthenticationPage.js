import AuthForm from "../../components/AuthForm/AuthForm";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { PageContent } from "../../components/PageContent/PageContent";
import { SectionMain } from "../../components/Section/Section";

function AuthenticationPage(){
    return(<PageContent>
        <SectionMain>
            <ImageCard/>
        <AuthForm/>
        </SectionMain>
    </PageContent>
    )
}
export default AuthenticationPage;