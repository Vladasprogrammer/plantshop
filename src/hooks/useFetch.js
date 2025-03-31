import { useState, useEffect } from "react";

export default function useFetch({ url, folder, apiImage }) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(_ => {

    const fetchData = async _ => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to get the data from the API');

        }
        const data = await response.json();
        console.log(data);

        const dataWithImages = await Promise.all(data.map(async (dataItem) => {
          let imagePath;
          try {
            imagePath = await
              import(`../images/${folder}/${dataItem[apiImage]}`)

          } catch (err) {
            imagePath = await
              import(`../images/${folder}/empty.svg`)
          }

          return {
            ...dataItem,
            imageSrc: imagePath.default,
          }
        }))

        // await new Promise(resolve => setTimeout(resolve, 5000));
        setResult(dataWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

    }
    fetchData();
  }, [url, folder, apiImage]);
  return { result, loading, error };
}