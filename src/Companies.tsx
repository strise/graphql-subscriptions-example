import React from 'react'
import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/client'
import { CompaniesQuery, CompaniesQueryVariables } from './types/graphql'
import { AppContext } from './App'
import { CompaniesTable } from './components/CompaniesTable'

export const COMPANIES = loader('./graphql/companies.graphql')

export const Companies = () => {
  const { teamId } = React.useContext(AppContext)
  const { data, loading } = useQuery<CompaniesQuery, CompaniesQueryVariables>(COMPANIES, { variables: { team: teamId }})
  const companies = data?.companies.edges.map(({ node }) => node)
  if (loading) {
    return (
      <>
        Loading ...
      </>
    )
  }
  return (
    <>
      {companies && <CompaniesTable companies={companies} />}
    </>
  )
}