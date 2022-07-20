
class DataSource {
  static getRecipes () {
    return fetch('https://masak-apa.tomorisakura.vercel.app/api/recipes')
      .then(response => {
        return response.json()
      })
  }

  static getDetailRecipe (key) {
    return fetch(`https://masak-apa.tomorisakura.vercel.app/api/recipe/${key}`)
      .then(response => {
        return response.json()
      })
  }

  static getSearchRecipe (keyword) {
    return fetch(`https://masak-apa.tomorisakura.vercel.app/api/search/?q=${keyword}`)
      .then(response => {
        return response.json()
      })
  }
}

export default DataSource
