import './componentsStyle/CategoriesList.css';
import Category from './Category';
import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';

export default function CategoriesList() {

  const { result: categories, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Vladasprogrammer/1558cfa032f42be9b31c41910e6566db/raw/00251bd104dcafdddf153e3c09e6a1fa93ce2bb9/Category.json', folder: 'Category', apiImage: 'fileName' });

  return (
    <div className="categories-list">
      <DataHandler loading={loading} error={error}>

      {
        categories.map((category) => (
          <Category
            key={category.id}
            imageSrc={category.imageSrc}
            title={category.title}
          />
        ))
      }
      </DataHandler>
    </div>
  )
}