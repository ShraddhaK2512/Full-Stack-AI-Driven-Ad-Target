import React, { useState } from "react";

const ProductSearch = () => {
    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
            // Implement the search logic or fetch data from API

        console.log('Searching for:', query)
    }

    return(
        <div>
            <h1>Product Search</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type = "text"
                    placeholder = "Search for a product..."
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ProductSearch;