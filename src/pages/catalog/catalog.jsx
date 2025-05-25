import Catalog from "../../components/catalog/catalog.jsx";

export default function CatalogPage({enLan}) {
    document.title = `${enLan ? 'IRT — Catalog' : 'ИРТ - Каталог'}`
    return <Catalog enLan={enLan}/>
}