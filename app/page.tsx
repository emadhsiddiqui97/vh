import Image from "next/image";
import TextSection from "./components/textSection/TextSection";
import Page from "./components/dynamicPage/Page";
import { homePageData } from "./data/homePage";
import { title } from "process";

export default function Home() {
  return (
    <Page>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {homePageData.map((section:any, key:any)=>{
          return(
            <TextSection key={key} title={section.title} text={section.text} image={section.image} buttonText={section.buttonText} button={section.button} right={section.right} buttonLink={section.buttonLink} isFullWidth={section.isFullWidth}/>
          )
        })}
      </main>
      
    </div>
    </Page>
  );
}
