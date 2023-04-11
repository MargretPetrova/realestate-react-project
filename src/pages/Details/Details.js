import { useLocation, useRouteLoaderData, useSearchParams } from "react-router-dom"
import { PageContent } from "../../components/PageContent/PageContent"
import { SectionMain } from "../../components/Section/Section"
import { ImageCard } from "../../components/ImageCard/ImageCard"
import { ScrollItem } from "../../components/ScrollItem/ScrollItem";
import styles from '../Details/Details.module.css'
import ScrollLiItems from "../../components/ScrollLiItems/ScrollLiItems";
import googleMap from '../../images/map.png'
import ColsTitleComponent from "../../components/SmallHelpers/ColsTitle";
import TitleConponent from "../../components/SmallHelpers/Title";
import Button from "../../components/SmallHelpers/Buttons";

export default function Details() {
    // !!! get details for the chosen house from loaderData , late it have to be from realtime datebase 
    const homes = useRouteLoaderData('root')
    const location = useLocation()
    const id = location.pathname.split('/catalog/')[1];
    const existing = getById(id, homes);

    const images = (existing.image).slice(1)
  
    return <PageContent>
<h2 className={styles.title}>{existing.title}</h2>

        <SectionMain>
            <ImageCard image={existing.image[1]} />
            <div className={styles.information}>
                <div className={styles.informationTitle}>
                    <h3>{existing.title}</h3>
                    <p>{existing.city}</p>
                </div>
                <h4>Price: <strong>{existing.price} </strong>EURO</h4>

            </div>
            <div className={styles.offers}>
                <ScrollItem>
                    {images.map(x => <ScrollLiItems item={x} />)}
                </ScrollItem>
            </div>

        </SectionMain>
        <SectionMain>
            <div className={styles.info}>
                <TitleConponent title={existing.title}/>
                <ColsTitleComponent srcImage={googleMap} title={existing.city}/>
              
                <div className={styles.cols}>
                    <ul>
                        <li>Type: <strong>{existing.type}</strong></li>
                        <li>Size: <strong>{existing.size}</strong></li>
                        <li>Bathroom: <strong>{existing.bathrooms}</strong></li>
                        <li>Bedroom: <strong>{existing.bedrooms}</strong></li>
                    </ul>

                </div>
                <div className={styles.cols}>
                    <ul>
                        <li>Aircondition: <strong>yes</strong></li>
                        <li>Elevator: <strong>yes</strong></li>
                        <li>Floor: <strong>4</strong></li>
                        <li>sfsf : <strong>no</strong></li>


                    </ul>

                </div>

                <div className={styles.cols}>
                    <p>Description: <strong>{existing.description}</strong></p>
                </div>
            
                <div className={styles.buttons}>
                    <Button name='Contacts'></Button>
                    <Button name='Comments'></Button>
                   
                </div>



            </div>
        </SectionMain>


    </PageContent>
}
function getById(id, homes) {
    const existing = homes.find(home => home.id == id);
    return existing

}