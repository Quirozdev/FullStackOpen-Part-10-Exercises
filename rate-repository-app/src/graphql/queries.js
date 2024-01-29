import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS } from './fragments';

export const GET_ALL_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      edges {
        node {
          ...CoreRepositoryFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
  ${CORE_REPOSITORY_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!, $after: String, $first: Int) {
    repository(id: $repositoryId) {
      ...CoreRepositoryFields
      reviews(after: $after, first: $first) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
  ${CORE_REPOSITORY_FIELDS}
`;

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              id
              name
              ownerName
            }
          }
        }
      }
    }
  }
`;
