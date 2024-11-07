export interface card {
  isPriceCard?: {
    price: number;
    time: string;
    buttonText: string;
    link: string;
    package: string;
  };
  properties: string[];
}
