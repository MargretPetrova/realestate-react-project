import { useEffect } from "react";
import { ArticleOffers } from "../../components/ArticleOffers/ArticleOffers";
import { Features } from "../../components/Features/Features";
import FormComponent from "../../components/Form/Form";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { PageContent } from "../../components/PageContent/PageContent";
import { SectionMain } from "../../components/Section/Section";

function Home() {
   
    return (<PageContent title='Welcome'>
        <SectionMain>
            <ImageCard />
            <FormComponent />
        </SectionMain>
        <SectionMain>
            <Features />
        </SectionMain>
        <SectionMain>
            <ArticleOffers />
        </SectionMain>

    </PageContent>)
}
export default Home;