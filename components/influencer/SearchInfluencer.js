import React, { Component } from "react"
import Link from "next/link";
import InfluencerServices from '../../services/InfluencerServices';

class SearchBar extends Component {
	state = {
		search_expert: []
	}

	getFilter = (e) => {
		console.log(e.target.value.length);
		if (e.target.value.length === 0) {
			this.setState({search_expert: []})
		} else {
			InfluencerServices.getFilter(e.target.value)
			.then((res) => this.setState({ search_expert: res }))
			.catch((err) => console.log(err))
		}
	}

render() {
if(this.state.search_expert.length === 0){
    return (
    <div className="searchbar-container">
			  <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566509579/search.svg" />
        <input onChange={(e) =>this.getFilter(e)} className="search-bar" type="text" placeholder="Search" />
    </div>
    )
} else {
    return (
			<div className="searchbar-container">
			  <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566509579/search.svg" />
				<input onChange={(e) =>this.getFilter(e)} className="search-bar" type="text" placeholder="Search" />
					<div className="search-results-container">
					{this.state.search_expert.map((result, index) => {
						return (
							<Link href={`http://localhost:3000/review/${result._id}`} key={index} >
							<div className="search-result">
								<img src={result.profilePic} alt={result.name.firstName} id="search-picture"/>
								<p>{result.name.firstName} {result.name.lastName}</p>
							</div> 
							</Link>
							)
            })}
			</div>
        </div>
    )
}

}

}
export default SearchBar