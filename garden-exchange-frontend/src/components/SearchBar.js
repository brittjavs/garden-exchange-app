import React from "react";
import { connect } from "react-redux";
import { changeSearchTerm } from '../actions/search'

const SearchBar = props => {
    return(
        <div>
            <input type="text" placeholder="Search by item or category"  value={props.value}
            onChange={(event) => props.changeSearchTerm(event.target.value)} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
      value: state.searchTerm
    };
  };

export default connect(mapStateToProps, {changeSearchTerm})(SearchBar)