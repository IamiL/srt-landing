import Contacts from "../../components/contacts/contacts.jsx";
import FirstBlock from "../../components/firstBlock/block/block.jsx";
import AdvantagesBlock from "../../components/advantagesBlock/block/block.jsx";
import CapabilitiesBlock from "../../components/capabilitiesBlock/block/block.jsx";
import IndustrialRobotsBlock from "../../components/industrialRobotsBlock/block/block.jsx";
import Background1 from "../../components/background/1/background.jsx";
import CompanyInfo from "../../components/companyInfo/CompanyInfo.jsx";

export default function Home({enLan}) {
    return (
            <>
                <main>
                    <FirstBlock enLan={enLan} />
                    <AdvantagesBlock enLan={enLan} />
                    <CapabilitiesBlock enLan={enLan} />
                    <IndustrialRobotsBlock enLan={enLan} />
                    <Contacts enLan={enLan} />
                    <CompanyInfo enLan={enLan} />
                </main>
                <Background1 />
            </>
    );
}