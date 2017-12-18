import React from 'react'
import PropTypes from 'proptypes'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Dropdown from './dropdown'
import FindAreas from './find-areas'
import { Row, Column } from '../../../utils'
import * as actions from '../../../../stores/actions'

const SearchBox = ({
  areas,
  dropdown,
  searchAreas,
  selectItem,
  resetDropdown,
  toRestaurants }) => (

    <div className='search-box'>
      <div className='container-fluid'>
        <Row>
          <Column xSmall={1}>
            <i className='fa fa-map-marker color-primary' />
          </Column>

          <Column xSmall={10}>
            <Dropdown
              {...{selectItem}}
              areas={areas.items}
              isLoading={areas.isLoading}
              closeList={dropdown.closeList}>

              <FindAreas
                {...{searchAreas, resetDropdown}}
                selectedArea={dropdown.selectedItem.name} />

            </Dropdown>
          </Column>

          <Column xSmall={1}>
            <div className='search-button' onClick={() => {
              if (!dropdown.selectedItem.id) {
                return
              }
              const { id, name } = dropdown.selectedItem
              toRestaurants(id, name.trim())
            }}>
              <i className='fa fa-search color-primary' />
            </div>
          </Column>
        </Row>
      </div>
    </div>
)

SearchBox.propTypes = {
  dropdown: PropTypes.object,
  toRestaurants: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    areas: state.areas,
    dropdown: state.dropdown,
    isLoading: state.areas.isLoading
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    resetDropdown: () => dispatch(actions.resetDropdown()),
    selectItem: (item) => dispatch(actions.selectDropdownItem(item)),
    toRestaurants: (id, name) => {
      dispatch(actions.fetchEntities({type: 'restaurants', areaId: id}))
      history.push(`/areas/${name}/restaurants`)
    },
    searchAreas:
      (searchTerm) => dispatch(actions.fetchEntities({type: 'areas', searchTerm}))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBox))
