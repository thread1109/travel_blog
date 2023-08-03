import "./destination-styles.css"
import DestinationData from "./DestinationData"
import Image1 from "../assets/21.jpg"
import Image2 from "../assets/26.jpg"
import Image3 from "../assets/17.jpg"
import Image4 from "../assets/23.jpg"


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData
                className="first-des"
                heading="India Gate"
                text="The iconic India Gate, an arch gate made using sandstone, is a war memorial situated in the Rajpath area, Delhi. It was built to commemorate the Undivided British Army (also known as British India Army) soldiers who laid down their lives during the First World War and the Third Anglo-Afghan War of 1919. This imposing structure is one of the largest war memorials in the country with the names of over 13,000 soldiers written on it. Surrounded by lush green and well-manicured gardens, India Gate is a favorite spot among Delhiites, who enjoy their summer evenings and Sunday picnics here with families and friends. Formerly known as All India War Memorial, it is one of the top tourist attractions to explore once you check in at the hotels in Delhi."
                img1={Image1}
                img2={Image2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Hawa Mahal"
                text="Hawa Mahal is a magnificent architectural monument in the pink city – Jaipur. It was built in 1799 by the architect Lal Chand Ustad for Maharaja Sawai Pratap Singh. The inspiration for the structure comes from the Khetri Mahal in Jhunjhunu. Hawa Mahal means the palace of breeze.

                The Hawa Mahal is on one side of the courtyard in the Palace, the three other sides having their own wings of the palace. The inner side of the structure is relatively plain. The exterior of the structure which is visible from the road is actually the rear side of the palace. It resembles a honeycomb structure for all the little lattice-worked windows, 953 to be precise. These windows or the jharokhas were meant to for the ladies of the royal family to be able to view the daily life on the road or processions that passed by without being seen, This was the time when women had to follow the purdah system, by keeping their faces covered in front of strangers."
                img1={Image3}
                img2={Image4}
            />
        </div>
    )
}

export default Destination;