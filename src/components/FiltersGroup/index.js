import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = ({
  ratingsList,
  categoryOptions,
  activeRatingId,
  changeRating,
  activeCategoryId,
  changeCategory,
  searchInput,
  enterSearchInput,
  changeSearchInput,
  clearFilters,
}) => {
  const renderFilterItem = (item, onClick, activeItemId) => {
    const isActive = item.categoryId === activeItemId
    const className = isActive ? 'active-category-name' : ''
    return (
      <li
        className="category-item"
        key={item.categoryId}
        onClick={() => onClick(item.categoryId)}
      >
        <p className={className}>{item.name}</p>
      </li>
    )
  }

  const renderCategoriesList = () => {
    if (categoryOptions.length === 0) {
      return <p>No categories available</p>
    }
    return categoryOptions.map(category =>
      renderFilterItem(category, changeCategory, activeCategoryId),
    )
  }

  const renderRatingsFiltersList = () => {
    if (ratingsList.length === 0) {
      return <p>No ratings available</p>
    }
    return ratingsList.map(rating =>
      renderFilterItem(rating, changeRating, activeRatingId),
    )
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        value={searchInput}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <div>
        <h1 className="category-heading">Category</h1>
        <ul className="categories-list">{renderCategoriesList()}</ul>
      </div>
      <div>
        <h1 className="rating-heading">Rating</h1>
        <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
      </div>
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
