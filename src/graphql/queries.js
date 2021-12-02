import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        cursor
        node {
          id
          fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      url
      ownerAvatarUrl
      description
      language
    }
  }
`;
