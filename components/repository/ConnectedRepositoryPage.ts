import { connect } from 'react-redux'

import { Application } from '../../typescript/application/Application'

import { RepositoryPage } from './RepositoryPage'

/**
*
*/
function mapStateToProps(state: Application): RepositoryPage.Properties {
  return { application: state }
}

/**
*
*/
export const ConnectedRepositoryPage = connect(mapStateToProps)(RepositoryPage)
