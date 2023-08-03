import "./Trip-styles.css"
import TripData from "./TripData";
import Image1 from "../assets/22.jpg"
import Image2 from "../assets/24.jpg"
import Image3 from "../assets/25.jpg"
import Image4 from "../assets/31.jpg"
import Image5 from "../assets/29.jpg"
import Image6 from "../assets/30.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Top places I have visited recently</p>

            <div className="tripcard">
                <TripData
                    image={Image1}
                    heading="Taj Mahal"
                    text="Taj Mahal is one of the world famous historic monuments and is also one among the New Seven Wonders of the World. Taj Mahal is also a UNESCO Heritage Centre and is a mausoleum that is made of white marble. It is said that the historic monument was built between years 1631 and 1648 in Agra.

                    The story of how and why Taj Mahal was built is popular around the world. It was built by the then Mughal emperor Shah Jahan in the loving memory of his wife. Taj Mahal can also be termed as a jewel of Muslim art and a masterpiece that is admired universally."
                />
                <TripData
                    image={Image2}
                    heading="Mehrangarh Fort"
                    text="The Mehrangarh Fort was built by Maharaja Rao Jodha in the year 1460 AD. This fort is considered to be one of the biggest forts not only in Rajasthan but in all of India as well. The fort has several gates and one of its gates still has the canon marks from the war with the Jaipur armies. The various Rajput rulers here built various courtyards, temples, and other structures in this fort. When Maharaja Man Singh won the war against the armies of Jaipur and Bikaner, he built seven gates here to commemorate the victory. 

                    Here's a guide to this magnificent fort in Jodhpur that's just a short distance away from our luxury desert camp in Jodhpur. "
                />
                <TripData
                    image={Image3}
                    heading="Jal Mahal"
                    text="Located in the middle of the Man Sagar Lake, a man-made reservoir created in 1596, the Jal Mahal (or “Water Palace”) only appears to be one story high, although there are four more levels to the building hidden beneath the water.
                    Although the name translates to “Water Palace,” the building was never intended to be a palace, as such, but was instead conceived as a hunting lodge for the local Raja (King). In the 16th-century, a severe drought spurred the locals to create a dam, creating the lake that submerged the lower portions of the lodge.
                    During the 18th century, the water-locked lodge was renovated and the lake area was expanded."
                />
            </div>
            <div className="tripcard">
            <TripData
                image={Image4}
                heading="Nainital"
                text="Nainital is one of the most beautiful and hot tourist destination of Uttrakhand and north India, and its beauty lies with is wonder calm naini lake which is covered with with mountain frm three sides.Around naini lake you will find forest of deodra, oak , pine holding the valley in form of (anjuli) The city is populated around naini lake. In nainital you can visit round the year and its shows diffent colors of season.Lots of hotel. restaurant and cottages where you can night stay viewing naini lake, its pleasure to walk around naini lake in night as there is lots of rush there you can have boating, tracking, horse riding , fun its like fest ."
            />
            <TripData
                image={Image5}
                heading="Golden Temple"
                text="The Harmandir Sahib and the Darbar Sahib located in the city of Amritsar, Punjab (India) are informally known as the Golden Temple. Built in the 16th Century by Guru Arjan Dev, the golden Temple opens from four gates which symbolises the openness of Sikhism towards all the people and all the religions.

                Jasa Singh Ahluwalia with the help of other Sikh Misl’s re- builded the present- day Gurudwara in 1764 with the intention of building a place of worship for all the men and women irrespective of their cast or social status. Guru Granth Sahib, the most holy text of Sikhism is always present inside the Golden Temple. "
            />
            <TripData
                image={Image6}
                heading="Visakhapatnam"
                text="This city is widely referred to as Vizag. It is considered to be one of the largest cities in Andhra Pradesh. This industrial city never fails to allure visitors due to the presence of several beautiful sandy beaches, carefully built and regularly maintained parks and gardens like the Araku Valley.

                The population of Visakhapatnam is around two million currently. It is often called the Goa of the East Coast. Similar to its west coast part, this part also contains attractive beaches, elegant landscapes, and laterite hillocks. Besides, the health tourism sector of this city is also growing constantly."
            />
        </div>
        </div>
    )
}

export default Trip;