import { useState, useEffect } from 'react'

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



function useFetchData(url: string): {
  data: Beverage[] | null
  done: boolean
} {
  const [data, dataSet] = useState<Beverage[] | null>(null) // warning re null default state
  const [done, doneSet] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((d: Beverage[]) => {
        dataSet(d)
        doneSet(true)
      })
    }, [url])

    return {
      data,
      done
    }
  }

function useCustomHookComponent() {

  const { data, done } = useFetchData('/hv-taplist.json')

  return (
    <div>
      {done && (
        <img
          alt="Beverage logo"
          src={data![0].logo}
          title={data![0].beverageName}
        />
      )}
    </div>
  )
}

export default useCustomHookComponent; // since exports default, can call it what we want when it's imported