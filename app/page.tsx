import Image from "next/image";
import TextSection from "./components/textSection/TextSection";
import Page from "./components/dynamicPage/Page";
import { cardData, homePageData } from "./data/homePage";
import { title } from "process";
import Card from "./components/card";
import Tagline from "./components/Tagline/Tagline";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Tagline />
        {homePageData.map((section: any, key: any, arr: any) => {
          if (key === arr.length - 1) {
            return (
              <>
                <div className="flex flex-col lg:flex-row space-y-8 items-center lg:items-stretch lg:space-y-0 w-full lg:justify-between space-x-8">
                  {cardData.map((card, key) => {
                    return (
                      <Card
                        isPriceCard={card.isPriceCard}
                        properties={card.properties}
                      />
                    );
                  })}
                </div>
                <TextSection
                  key={key}
                  title={section.title}
                  text={section.text}
                  image={section.image}
                  buttonText={section.buttonText}
                  button={section.button}
                  right={section.right}
                  buttonLink={section.buttonLink}
                  isFullWidth={section.isFullWidth}
                />
              </>
            );
          } else {
            return (
              <TextSection
                key={key}
                title={section.title}
                text={section.text}
                image={section.image}
                buttonText={section.buttonText}
                button={section.button}
                right={section.right}
                buttonLink={section.buttonLink}
                isFullWidth={section.isFullWidth}
              />
            );
          }
        })}
      </main>
    </div>
  );
}
