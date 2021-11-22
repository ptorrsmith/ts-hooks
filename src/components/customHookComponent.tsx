// copied sample data structure for an item into the clipboard

// {
//   "name": "beer",
//   "producerName": "Revision",
//   "beverageName": "Sparkle Muffin",
//   "beverageColor": "#FFDC67",
//   "beverageStyle": "New England IPA",
//   "producerLocation": "Sparks, NV",
//   "abv": 7,
//   "ibu": 30,
//   "logo": "https://s3.amazonaws.com/digitalpourproducerlogos/58813a565e002c0f185bd0e5.png",
//   "level": 27.027027027027028
// }

// then with ctrl+shift+option+V, extension JSONtoTS will paste the TS interface as follows
// remember to change from RootObject to something meaningful

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

