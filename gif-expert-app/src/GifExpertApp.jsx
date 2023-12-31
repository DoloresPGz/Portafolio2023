import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sailor Moon'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([...categories, newCategory])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {
            categories.map(category =>

              <GifGrid
                key={category}
                category={category}
              />

            )
        }
    </>
  )
}
export default GifExpertApp
