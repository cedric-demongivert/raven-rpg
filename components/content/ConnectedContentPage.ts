import { connect } from 'react-redux'

import { Application } from '../../typescript/state/application/Application'

import { ContentPage } from './ContentPage'

/**
*
*/
function mapStateToProps(state: Application): ContentPage.Properties {
  return {
    application: state
  }
}

/**
*
*/
export const ConnectedContentPage = connect(mapStateToProps)(ContentPage)
