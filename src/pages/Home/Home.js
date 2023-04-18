// import { useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { Suspense  } from 'react';
import { ArticleOffers } from "../../components/ArticleOffers/ArticleOffers";
import { Features } from "../../components/Features/Features";
import FormComponent from "../../components/Form/Form";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { PageContent } from "../../components/PageContent/PageContent";
import { SectionMain } from "../../components/Section/Section";

function Home() {
    const homes = useRouteLoaderData('root');
   

    return (<PageContent title='Welcome'>
        <SectionMain>
            <ImageCard />
            <FormComponent />
        </SectionMain>
        <SectionMain>
            <Features />
        </SectionMain>
        <SectionMain>
            <Suspense fallback={<h1>Loading...</h1>}>
                <ArticleOffers homes={homes} />
            </Suspense>

        </SectionMain>

    </PageContent>)
}
export default Home;

async function loadHomes() {

    // const response = await fetch('https://real-estate-agency-8089c-default-rtdb.firebaseio.com/homes.json');
const response = require('../../images/real-estate.json')
    // if (!response.ok) {
    //     throw json(
    //         { message: 'Could not fetch events.' },
    //         {
    //             status: 500,
    //         }
    //     );
    // } else {
    //     const resData = await response.json();
    //     resData.shift()
    //     return resData;
    // }
   
 
    console.log(response.homes);
    return response;
    // console.log(response);


}
export function loader() {
    return loadHomes()
}

