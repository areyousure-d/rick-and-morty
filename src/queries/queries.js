import { gql } from '@apollo/client';

const getCharacters = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

const getCharactersInfo = gql`
  query getCharactersInfo {
    characters {
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

const getCharacterById = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
        type
        dimension
        created
      }
      episode {
        id
        name
        air_date
        episode
        created
      }
      created
    }
  } 
`;

const getCharacterImage = gql`
  query getCharacterImage($id: ID!) {
    character(id: $id) {
      name
      image
    }
  }
`;

const getEpisodesInfo = gql`
  query getEpisodesInfo {
    episodes {
      info {
        count
        pages
      }
    }
  }
`;

const getEpisodes = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      results {
        id
        name
        created
      }
    }
  }
`;

const getEpisodeById = gql`
  query getEpisodeById($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
      created
    }
  }
`;

const getLocationsInfo = gql`
  query getLocationsInfo {
    locations {
      info {
        count
        pages
      }
    }
  }
`;

const getLocations = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      results {
        id 
        name
        created
      }
    }
  }
`;

const getLocationById = gql`
  query getLocationById($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
      created
    }
  }
`;

export {
  getCharacters,
  getCharactersInfo,
  getCharacterById,
  getCharacterImage,
  getEpisodesInfo,
  getEpisodes,
  getEpisodeById,
  getLocationsInfo,
  getLocations,
  getLocationById,
};

